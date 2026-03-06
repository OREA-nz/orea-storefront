import { SHOPIFY_PRODUCTS } from '../../data/shopifyProducts';
import type { Product, Category } from './types';

function inferCategory(handle: string): Category {
  if (handle.includes('earring') || handle.includes('stud')) return 'Earrings';
  if (handle.includes('pendant')) return 'Pendants';
  if (handle.includes('ring') || handle.includes('band')) return 'Rings';
  if (handle.includes('necklace')) return 'Necklaces';
  if (handle.includes('bracelet')) return 'Bracelets';
  return 'Rings';
}

export const PRODUCTS: Product[] = Object.entries(SHOPIFY_PRODUCTS).map(([handle, product]) => {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  return {
    id: handle,
    name: product.title,
    price: lowestPrice,
    category: inferCategory(handle),
    shopifyHandle: handle,
    imageUrl: '',
    hoverImageUrl: '',
  };
});
