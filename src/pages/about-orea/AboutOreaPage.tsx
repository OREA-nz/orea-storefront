import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from './Hero';
import { OriginText } from './OriginText';
import { OreaStandards } from './OreaStandards';
import { BespokeProcess } from './BespokeProcess';
import { SustainabilityBadge } from './SustainabilityBadge';
import { LocationContact } from './LocationContact';

const AboutOreaPage: React.FC = () => {
  return (
    <main className="flex-grow">
      <Helmet>
        <title>About Us | ORÉA — Lab Grown Diamond Jewellery</title>
        <meta name="description" content="We use only certified premium lab-grown diamonds and solid precious metals — sustainably grown, never compromised." />
      </Helmet>
      <Hero />
      
      <div className="flex flex-col gap-section-lg pb-[160px] max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <OriginText />
        <OreaStandards />
        <BespokeProcess />
        <SustainabilityBadge />
        <LocationContact />
      </div>
    </main>
  );
};

export default AboutOreaPage;
