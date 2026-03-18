import React from 'react';
import { Link } from 'react-router-dom';
import { SHOPIFY_PRODUCTS } from '../../data/shopifyProducts';
import { useShopifyAllImages } from '../../hooks/useShopifyImages';

const FEATURED_HANDLES = [
  'hera-trilogy-three-stone-ring',
  'pave-half-eternity-band',
  'signature-marquise-ring',
  'solitaire-pendant',
  'oval-solitaire-ring',
  'orbit-bezel-diamond-studs',
];

const formatPrice = (price: number): string => {
  return '$' + price.toLocaleString('en-NZ') + ' NZD';
};

const featuredProducts = FEATURED_HANDLES.map((handle) => {
  const entry = SHOPIFY_PRODUCTS[handle];
  const lowestPrice = Math.min(...entry.variants.map((v) => v.price));
  return {
    id: handle,
    name: entry.title,
    price: formatPrice(lowestPrice),
    shopifyHandle: handle,
  };
});

const ProductSkeleton: React.FC = () => (
  <div className="flex flex-col items-center animate-pulse">
    <div className="w-full aspect-square bg-orea-linen mb-8 md:mb-10" />
    <div className="w-full flex flex-col gap-3 items-center">
      <div className="h-3 w-36 bg-orea-linen rounded-sm" />
      <div className="h-2.5 w-24 bg-orea-linen/60 rounded-sm" />
    </div>
  </div>
);

const FeaturedProducts: React.FC = () => {
  // Live images from Shopify — shares the module-level cache with CollectionPage
  const { imageMap, loading } = useShopifyAllImages();

  return (
    <section className="pt-section-sm md:pt-section pb-section md:pb-section-lg bg-[#F9F6F1] px-4 sm:px-6 lg:px-8">
      <div className="max-w-wide mx-auto">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <h2 className="font-serif text-h3 text-orea-dark font-light tracking-[0.15em] uppercase">ORÉA Classics</h2>
          <div className="w-12 h-px bg-orea-gold/40 mt-6 md:mt-8"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
            : featuredProducts.map((product) => {
            const liveImages = product.shopifyHandle ? imageMap.get(product.shopifyHandle) : undefined;
            const imageSrc = liveImages?.primary;
            return (
            <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer flex flex-col items-center">
              {/* Product Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-orea-cream mb-8 md:mb-10 transition-shadow duration-700 shadow-sm group-hover:shadow-xl">
                <img
                  src={imageSrc}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orea-dark/0 group-hover:bg-orea-dark/[0.03] transition-colors duration-1000"></div>

                {/* Quick View Overlay */}
                <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="bg-orea-cream/90 backdrop-blur-sm px-6 py-3 text-micro tracking-[0.4em] uppercase font-medium text-orea-dark border border-orea-champagne/20">
                    Quick View
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="w-full flex flex-col gap-4 text-center">
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-caption tracking-[0.4em] text-orea-dark font-semibold uppercase leading-relaxed min-h-[2.5rem] flex items-center justify-center px-4">
                    {product.name}
                  </h3>
                  <p className="text-micro text-orea-taupe tracking-[0.2em] font-light">
                    From {product.price}
                  </p>
                </div>
              </div>
            </Link>
            );
          })}
        </div>
        
        <div className="mt-section-sm md:mt-section text-center">
          <Link 
            to="/collection" 
            className="group inline-flex flex-col items-center gap-4 text-caption tracking-[0.5em] uppercase text-orea-dark font-semibold transition-all duration-500"
          >
            <span>View All Pieces</span>
            <div className="w-24 h-px bg-orea-dark/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-orea-dark -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
