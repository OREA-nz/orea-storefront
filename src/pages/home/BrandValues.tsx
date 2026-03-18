
import React from 'react';
import { Sparkle, ShieldCheck, Gift } from 'lucide-react';
import { strings } from '../../content/strings';

const { brandValues: bv } = strings.home;

const BrandValues: React.FC = () => {
  return (
    <section className="py-section-sm md:py-section bg-orea-cream">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">

          {/* Value 1: Lab-Grown */}
          <div className="flex flex-col items-center text-center gap-6 px-4 md:px-8 py-10 md:py-0 border-b border-orea-champagne/10 md:border-b-0">
            <Sparkle size={18} strokeWidth={1} className="text-orea-gold" />
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-orea-dark text-caption tracking-[0.4em] uppercase font-semibold leading-none">
                {bv.labGrown.title}
              </span>
              <span className="text-orea-mocha text-micro tracking-[0.3em] uppercase font-normal leading-none">
                {bv.labGrown.subtitle}
              </span>
            </div>
          </div>

          {/* Value 2: Solid Gold */}
          <div className="flex flex-col items-center text-center gap-6 px-4 md:px-8 py-10 md:py-0 md:border-x md:border-orea-champagne/30 border-b border-orea-champagne/10 md:border-b-0">
            <ShieldCheck size={18} strokeWidth={1} className="text-orea-gold" />
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-orea-dark text-caption tracking-[0.4em] uppercase font-semibold leading-none">
                {bv.solidGold.title}
              </span>
              <span className="text-orea-mocha text-micro tracking-[0.3em] uppercase font-normal leading-none">
                {bv.solidGold.subtitle}
              </span>
            </div>
          </div>

          {/* Value 3: Made to Order */}
          <div className="flex flex-col items-center text-center gap-6 px-4 md:px-8 py-10 md:py-0 border-b-0">
            <Gift size={18} strokeWidth={1} className="text-orea-gold" />
            <div className="flex flex-col items-center gap-2.5">
              <span className="text-orea-dark text-caption tracking-[0.4em] uppercase font-semibold leading-none">
                {bv.madeToOrder.title}
              </span>
              <span className="text-orea-mocha text-micro tracking-[0.3em] uppercase font-normal leading-none">
                {bv.madeToOrder.subtitle}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandValues;
