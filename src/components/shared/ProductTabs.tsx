import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductTabsProps {
  description?: string;
  shippingContext?: string;
}

const DEFAULT_DESCRIPTION = 'A celebration of modern love and classic architecture. The focal stone is held in a minimalist setting, meticulously engineered to catch the light from every angle.';

const ProductTabs: React.FC<ProductTabsProps> = ({
  description = DEFAULT_DESCRIPTION,
  shippingContext = 'gifts',
}) => {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'shipping', label: 'Ordering' },
    { id: 'warranty', label: 'Our Service' },
  ];

  const tabContentClass = "flex flex-col gap-4 text-body font-serif leading-relaxed animate-in fade-in duration-700 text-orea-taupe font-light";

  const renderContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className={tabContentClass}>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        );
      case 'shipping':
        return (
          <div className={tabContentClass}>
            <p>Our pieces are made to order and typically take between 2-8 weeks to produce, depending on the design.</p>
            <p>If you are working toward a tight timeline or require your piece by a specific date, please contact us and we'll do our best to accommodate.</p>
            <p>For detailed delivery information, please refer to our <Link to="/shipping" className="border-b border-orea-champagne pb-0.5 hover:opacity-70 transition-opacity">Shipping Information page</Link>.</p>
          </div>
        );
      case 'warranty':
        return (
          <div className={tabContentClass}>
            <p>ORÉA jewellery is crafted in solid gold or platinum and set with certified, 100% real lab-grown diamonds.</p>
            <p>Our pieces are covered by a Manufacturing Warranty, with optional <Link to="/concierge" className="underline underline-offset-4 hover:opacity-70 transition-opacity">ORÉA Concierge Service</Link> available for extended care.</p>
            <p className="opacity-70">Please note: Normal wear and tear, improper care, third-party repairs, scratches, loss or theft, and discolouration caused by harsh chemicals are not covered. Each ORÉA piece is handcrafted to order; slight variations are a natural part of its character.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="border-t border-orea-sand">
      <div className="flex border-b border-orea-sand/50 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-6 px-3 sm:px-2 text-micro font-bold tracking-widest uppercase transition-all relative whitespace-nowrap outline-none flex-shrink-0 flex-1 min-w-[72px] text-center ${
              activeTab === tab.id ? 'text-orea-dark' : 'text-orea-taupe hover:text-orea-dark/60'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-px bg-orea-champagne" />}
          </button>
        ))}
      </div>
      <div className="py-12">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductTabs;
