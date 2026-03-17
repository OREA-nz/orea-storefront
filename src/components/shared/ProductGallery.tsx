import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';

interface ProductGalleryProps {
  images: string[];
}

/** Minimal lightbox — no external dependency. */
const Lightbox: React.FC<{
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ images, index, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handle);
    lockScroll();
    return () => {
      document.removeEventListener('keydown', handle);
      unlockScroll();
    };
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-[300] bg-orea-dark/95 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Product image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-orea-cream/70 hover:text-orea-cream transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={24} strokeWidth={1.2} />
      </button>

      <p className="absolute top-7 left-1/2 -translate-x-1/2 text-micro font-bold uppercase tracking-widest text-orea-cream/50">
        {index + 1} / {images.length}
      </p>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 p-3 text-orea-cream/70 hover:text-orea-cream transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
      )}

      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Product view ${index + 1}`}
          width={2048}
          height={2048}
          className="max-w-full max-h-[85vh] object-contain animate-in zoom-in-95 duration-300"
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 p-3 text-orea-cream/70 hover:text-orea-cream transition-colors z-10"
          aria-label="Next image"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      )}
    </div>,
    document.body,
  );
};

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  const handlePrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const lightboxPrev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)),
  [images.length]);

  const lightboxNext = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length)),
  [images.length]);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  return (
    <>
      {/*
        Desktop/Tablet padding: 100px top & bottom, 100px left, 25px right
        Mobile padding: 50px all sides
      */}
      <div className="w-full p-[50px] md:pt-[100px] md:pb-[100px] md:pl-[100px] md:pr-[25px]">

        {/* Main image stage */}
        <div className="relative w-full aspect-square bg-orea-sand/30 overflow-hidden group">
          <button
            type="button"
            onClick={() => setLightboxIndex(activeIndex)}
            className="w-full h-full focus:outline-none cursor-zoom-in"
            aria-label="View product image in full size"
          >
            <img
              src={images[activeIndex] || '/placeholder.svg'}
              alt={`Product view ${activeIndex + 1}`}
              width={2048}
              height={2048}
              loading="eager"
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-orea-cream/80 hover:bg-orea-cream text-orea-dark transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} strokeWidth={1.2} />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-orea-cream/80 hover:bg-orea-cream text-orea-dark transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={20} strokeWidth={1.2} />
              </button>

              <div className="absolute bottom-3 right-3 bg-orea-dark/50 text-orea-cream text-micro font-bold tracking-widest px-2 py-1 pointer-events-none">
                {activeIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail strip — bottom, all breakpoints */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar pt-4 pb-1">
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
                  width={2048}
                  height={2048}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={lightboxPrev}
          onNext={lightboxNext}
        />
      )}
    </>
  );
};

export default ProductGallery;
