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
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 text-orea-cream/70 hover:text-orea-cream transition-colors z-10"
        aria-label="Close lightbox"
      >
        <X size={24} strokeWidth={1.2} />
      </button>

      {/* Counter */}
      <p className="absolute top-7 left-1/2 -translate-x-1/2 text-micro font-bold uppercase tracking-widest text-orea-cream/50">
        {index + 1} / {images.length}
      </p>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 p-3 text-orea-cream/70 hover:text-orea-cream transition-colors z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
      )}

      {/* Image */}
      <div
        className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Product view ${index + 1}`}
          className="max-w-full max-h-[85vh] object-contain animate-in zoom-in-95 duration-300"
        />
      </div>

      {/* Next */}
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleClose = useCallback(() => setLightboxIndex(null), []);
  const handlePrev = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length)),
  [images.length]);
  const handleNext = useCallback(() =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length)),
  [images.length]);

  return (
    <>
      {/* ── Mobile: primary image + thumbnail strip ── */}
      <div className="md:hidden w-full">
        {/* Primary image */}
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          className="w-full aspect-square bg-orea-sand/30 overflow-hidden group cursor-zoom-in focus:outline-none"
          aria-label="View product image in full size"
        >
          <img
            src={images[0] || '/placeholder.svg'}
            alt="Product view 1"
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </button>
        {/* Thumbnail strip — only if more than 1 image */}
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-4 pt-3 pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 overflow-hidden border transition-all ${idx === 0 ? 'border-orea-dark' : 'border-orea-sand hover:border-orea-champagne'}`}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={img || '/placeholder.svg'} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
      {/* ── Desktop: full stacked column (unchanged) ── */}
      <div className="hidden md:block w-full p-6">
        <div className="flex flex-col gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="w-full aspect-square bg-orea-sand/30 overflow-hidden group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-orea-champagne"
              aria-label={`View product image ${idx + 1} in full size`}
            >
              <img
                src={img || '/placeholder.svg'}
                alt={`Product view ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default ProductGallery;
