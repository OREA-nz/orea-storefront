
import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import BrandValues from './BrandValues';
import FeaturedProducts from './FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <>
    <title>ORÉA Fine Jewellery — Lab-Grown Diamonds, Grown Not Mined</title>
    <meta name="description" content="Discover ORÉA's collection of exceptional lab-grown diamond jewellery in solid gold and platinum. Sustainably grown, certified, and made to order." />
    <div className="bg-[#FFFFFF] pb-[160px]">
      <main>
        <Hero 
          settings={{
            heading: "Diamonds. Grown. Not Mined.",
            subheading: "Exceptional pieces, made to keep.",
            button_label: "Explore the Collections",
            image: "/images/hero.webp"
          }}
        />

        <Collections />

        <FeaturedProducts />

        <BrandValues />
      </main>
    </div>
    </>
  );
};

export default HomePage;
