import React, { createContext, useContext } from 'react';
import { useShopifyAllImages } from '../hooks/useShopifyImages';

type ImageEntry = { primary: string; hover?: string };

interface ShopifyImagesContextValue {
  imageMap: Map<string, ImageEntry>;
  loading: boolean;
}

const ShopifyImagesContext = createContext<ShopifyImagesContextValue>({
  imageMap: new Map(),
  loading: true,
});

/**
 * Mount once at the app root. All consumers share one React state and
 * one underlying fetch — no duplicate network requests, no duplicate Maps.
 */
export function ShopifyImagesProvider({ children }: { children: React.ReactNode }) {
  const value = useShopifyAllImages();
  return (
    <ShopifyImagesContext.Provider value={value}>
      {children}
    </ShopifyImagesContext.Provider>
  );
}

export function useShopifyImages() {
  return useContext(ShopifyImagesContext);
}
