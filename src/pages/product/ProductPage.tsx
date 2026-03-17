
import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVariantId } from '../../data/shopifyProducts';

import ProductGallery from '../../components/shared/ProductGallery';
import ProductDetails from './ProductDetails';
import ProductTabs from '../../components/shared/ProductTabs';
import ValueProps from '../../components/shared/ValueProps';
import RelatedProducts from '../../components/shared/RelatedProducts';

import { Product } from './types';
import { PRODUCTS } from '../collection/constants';
import { SHOPIFY_PRODUCTS } from '../../data/shopifyProducts';
import { shopifyFetch, GET_PRODUCT_BY_HANDLE, SHOPIFY_CONFIG } from '../../lib/shopify';
import { useShopifyProductImages } from '../../hooks/useShopifyImages';
import SendAHintModal from './SendAHintModal';


// Normalize carat string: '1.0 CT' → '1.0CT'
function normalizeCarat(s: string): string {
  return s.replace(' CT', 'CT');
}

const SHAPE_OPTIONS = ['Round', 'Oval', 'Emerald', 'Pear', 'Marquise', 'Princess', 'Radiant', 'Asscher', 'Cushion', 'Heart'];
const RING_SIZES = ['F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isHintOpen, setIsHintOpen] = useState(false);

  const isRing = useMemo(() => {
    const base = PRODUCTS.find(p => p.id === id);
    return base?.category === 'Rings';
  }, [id]);

  const shopifyData = id ? SHOPIFY_PRODUCTS[id] : undefined;

  // Live data state — populated by direct Shopify fetch
  const [liveTitle, setLiveTitle] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const descriptionPlain = useMemo(
    () => description.replace(/<[^>]+>/g, '').trim(),
    [description]
  );
  const [fetchedImages, setFetchedImages] = useState<string[]>([]);

  // Fetch live product data when handle changes
  useEffect(() => {
    // Reset live state immediately so stale data is not shown for the new product
    setLiveTitle(null);
    setDescription('');
    setFetchedImages([]);

    if (!id || !SHOPIFY_CONFIG.isConfigured || !shopifyData) return;

    // Handle Shopify handle discrepancy: codebase uses 'pave-half-eternity-band'
    // but Shopify exports it as 'pav-half-eternity-band' (see shopifyProducts.ts)
    const shopifyHandle = id === 'pave-half-eternity-band' ? 'pav-half-eternity-band' : id;

    shopifyFetch<{
      productByHandle: {
        title: string;
        descriptionHtml: string;
        images: { edges: { node: { url: string } }[] };
      } | null;
    }>(GET_PRODUCT_BY_HANDLE, { handle: shopifyHandle })
      .then((data) => {
        const p = data.productByHandle;
        if (!p) return;
        setLiveTitle(p.title);
        setDescription(p.descriptionHtml);
        setFetchedImages(p.images.edges.map((e) => e.node.url));
      })
      .catch((err) => {
        console.error('[ProductPage] Shopify fetch failed:', err);
      });
  }, [id, shopifyData]); // eslint-disable-line react-hooks/exhaustive-deps

  // Fallback image source: used when the direct fetch fails or Shopify is not configured
  const { images: hookImages } = useShopifyProductImages(id || '');
  const galleryImages = useMemo(
    () => (fetchedImages.length > 0 ? fetchedImages : hookImages),
    [fetchedImages, hookImages],
  );

  // Build product object from SHOPIFY_PRODUCTS (real variant IDs) + live title/description/images
  const product: Product | undefined = useMemo(() => {
    if (!id || !shopifyData) return undefined;

    const isMC = shopifyData.productType === 'metal+carat';

    // Unique metals in order of first appearance
    const metals = [...new Set(shopifyData.variants.map((v) => v.name.split(' / ')[0]))];

    // Unique carats, normalised ('1.0 CT' → '1.0CT'); empty for metal-only products
    const carats = isMC
      ? [
          ...new Set(
            shopifyData.variants
              .filter((v) => v.name.includes(' / '))
              .map((v) => normalizeCarat(v.name.split(' / ')[1])),
          ),
          ...(isRing ? ['3+ CT'] : []),  // enquiry-only tier for rings
        ]
      : [];

    // Variants from SHOPIFY_PRODUCTS — verified numeric IDs; CartContext converts to GID internally
    const variants = shopifyData.variants.map((v) => {
      const parts = v.name.split(' / ');
      return {
        id: Number(v.variantId),
        title: v.name,
        option1: parts[0],                                     // Metal
        option2: parts[1] ? normalizeCarat(parts[1]) : '',    // Carat (normalised) or '' for metal-only
        price: v.price,
        available: true,
      };
    });

    return {
      id,
      name: liveTitle ?? shopifyData.title,
      price: Math.min(...shopifyData.variants.map((v) => v.price)),
      description,
      materials: isRing
        ? ['14k Gold', '18k Gold', 'Platinum', 'Lab Grown Diamond']
        : ['14k Gold', '18k Gold', 'Lab Grown Diamond'],
      images: galleryImages,
      options: {
        metal: metals,
        shape: SHAPE_OPTIONS,
        carat: carats,
        size: isRing ? RING_SIZES : ['Standard'],
      },
      variants,
    } as Product;
  }, [id, shopifyData, isRing, liveTitle, description, galleryImages]);

  const [selectedMetal, setSelectedMetal] = useState('');
  const [selectedShape, setSelectedShape] = useState('Emerald');
  const [selectedCarat, setSelectedCarat] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  
  // Resolve the numeric Shopify variant ID from current metal + carat selections
  const selectedVariantId = useMemo(() => {
    if (!id) return undefined;
    // selectedCarat is stored normalised ('1.0CT') but getVariantId expects '1.0 CT'
    const caratForLookup = selectedCarat
      ? selectedCarat.replace('CT', ' CT').trim()
      : undefined;
    const rawId = getVariantId(id, selectedMetal, caratForLookup);
    return rawId ? Number(rawId) : undefined;
  }, [id, selectedMetal, selectedCarat]);

  // Reset selections whenever the resolved product changes
  useEffect(() => {
    if (product) {
      setSelectedMetal(product.options.metal[0] || '');
      setSelectedShape('Emerald');
      setSelectedCarat(product.options.carat[0] || '');
      setSelectedSize(isRing ? 'L' : 'Standard');
    }
  }, [product?.id, product?.options.metal[0], product?.options.carat[0], isRing]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-orea-dark">
        Product not found
      </div>
    );
  }

  return (
    <>
    <title>{product.name} | ORÉA Fine Jewellery</title>
    <meta name="description" content={descriptionPlain || `Discover ${product.name} at ORÉA Fine Jewellery — certified lab-grown diamonds in solid gold and platinum.`} />
    <meta property="og:title" content={`${product.name} | ORÉA Fine Jewellery`} />
    <meta property="og:description" content={descriptionPlain || `Discover ${product.name} at ORÉA Fine Jewellery.`} />
    <meta property="og:image" content={product.images?.[0] || ''} />
    <div className="min-h-screen flex flex-col bg-orea-cream pb-[160px]">
      <main className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ProductGallery images={product.images} />

          <div className="px-6 py-12 lg:px-16 xl:px-24 md:sticky md:top-[140px] md:self-start">
            <div className="max-w-xl flex flex-col gap-12">
              <ProductDetails
                product={product}
                description={description}
                selectedMetal={selectedMetal}
                setSelectedMetal={setSelectedMetal}
                selectedShape={selectedShape}
                setSelectedShape={setSelectedShape}
                isRing={isRing}
                selectedCarat={selectedCarat}
                setSelectedCarat={setSelectedCarat}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
              <ProductTabs
                description={description || undefined}
              />
              <ValueProps />
            </div>
          </div>
        </div>

        <section className="mt-40 border-t border-orea-sand pt-24">
          <RelatedProducts currentId={id || ''} />
        </section>
      </main>
    </div>

    <SendAHintModal
      isOpen={isHintOpen}
      onClose={() => setIsHintOpen(false)}
      product={product}
      selectedMetal={selectedMetal}
      selectedCarat={selectedCarat || undefined}
      selectedSize={selectedSize || undefined}
      variantId={selectedVariantId}
    />
    </>