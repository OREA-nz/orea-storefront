import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  // Reset to first image when product changes
  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  return (
    /*
      Mobile:  25px all sides  → p-[25px]
      Desktop/Tablet: 50px top & bottom, 125px left, 25px right
    */
    <div className="w-full p-[25px] md:pt-[50px] md:pb-[50px] md:pl-[125px] md:pr-[25px]">

      {/* ── Main image stage ── */}
      <div className="relative w-full aspect-square bg-orea-sand/30 overflow-hidden group">
        <img
          src={images[activeIndex] || '/placeholder.svg'}
          alt={`Product view ${activeIndex + 1}`}
          width={1445}
          height={1445}
          loading="eager"
          className="w-full h-full object-cover object-center transition-opacity duration-300"
        />

        {/* Chevron navigation — visible on hover, only when more than 1 image */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-orea-dark transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-orea-dark transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={20} strokeWidth={1.2} />
            </button>
          </>
        )}
      </div>

      {/* ── Thumbnail strip — centred, all breakpoints ── */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto no-scrollbar pt-4 pb-1 justify-center">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden border-2 transition-all focus:outline-none ${
                idx === activeIndex
                  ? 'border-orea-dark opacity-100'
                  : 'border-transparent opacity-55 hover:opacity-90 hover:border-orea-champagne'
              }`}
              aria-label={`View image ${idx + 1}`}
            >
              <img
                src={img || '/placeholder.svg'}
                alt={`Thumbnail ${idx + 1}`}
                width={1445}
                height={1445}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
