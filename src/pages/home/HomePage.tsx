
import React from 'react';
import Hero from './Hero';
import Collections from './Collections';
import BrandValues from './BrandValues';
import FeaturedProducts from './FeaturedProducts';

const HomePage: React.FC = () => {
  return (
    <>
    <title>ORÉA | Lab Grown Diamond Engagement Rings & Fine Jewellery</title>
    <meta name="description" content="Shop ORÉA's lab grown diamond engagement rings and fine jewellery in solid gold and platinum. Ethically grown, certified, made to order." />
    <div className="bg-[#F9F6F1]">
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
