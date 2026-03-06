import { SHOPIFY_PRODUCTS } from '../../data/shopifyProducts';
import type { HomeProduct, HomeCollection } from '../../types/common';

function inferCategory(handle: string): string {
  if (handle.includes('ring') || handle.includes('band')) return 'RINGS';
  if (handle.includes('necklace') || handle.includes('pendant')) return 'NECKLACES';
  if (handle.includes('earring') || handle.includes('stud')) return 'EARRINGS';
  if (handle.includes('bracelet')) return 'BRACELETS';
  return 'RINGS';
}

export const PRODUCTS: HomeProduct[] = Object.entries(SHOPIFY_PRODUCTS).map(([handle, product]) => {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  return {
    id: handle,
    name: product.title,
    price: `$${lowestPrice.toLocaleString()}`,
    image: '',
    shopifyHandle: handle,
    category: inferCategory(handle),
    description: '',
  };
});

export const COLLECTIONS: HomeCollection[] = [
  { id: 'rings', title: 'Rings', image: '', link: '/collection?category=Rings' },
  { id: 'necklaces', title: 'Necklaces', image: '', link: '/collection?category=Necklaces' },
  { id: 'earrings', title: 'Earrings', image: '', link: '/collection?category=Earrings' },
  { id: 'bracelets', title: 'Bracelets', image: '', link: '/collection?category=Bracelets' },
];
