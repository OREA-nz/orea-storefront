
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ContactHero from './ContactHero';
import ContactCards from './ContactCards';
import ContactForm from './ContactForm';

const SignatureMotif = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-body-sm tracking-widest uppercase text-orea-taupe font-bold opacity-40">ORÉA</div>
  </div>
);

const ContactPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('consultation');

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Contact Us | ORÉA — Lab Grown Diamond Jewellery</title>
        <meta name="description" content="Whether you're beginning something bespoke or have a simple question, we're here to help." />
      </Helmet>
      <ContactHero />
      <ContactCards onSelectType={setSelectedType} />
      <SignatureMotif />
      <div className="bg-[#F9F6F1] pt-16 pb-[160px] px-4">
        <ContactForm selectedType={selectedType} />
      </div>
    </main>
  );
};

export default ContactPage;
