import { FAQItem, NavLink } from '../../types/common';

export const NAV_LINKS: NavLink[] = [
  { label: 'Collections', href: '#' },
  { label: 'The Lab', href: '#' },
  { label: 'Bespoke', href: '#' },
  { label: 'About', href: '#' },
];

export const SHIPPING_FAQ: FAQItem[] = [
  {
    question: "Where do you ship to?",
    answer: "We currently ship within New Zealand and to selected international destinations.\n\nIf your country is not listed at checkout, please contact us and we will do our best to assist."
  },
  {
    question: "How much does shipping cost?",
    answer: "New Zealand: Complimentary insured shipping on all orders.\n\nInternational: Shipping costs are calculated at checkout based on destination and service level."
  },
  {
    question: "When will I get my order?",
    answer: "We will work quickly to ship your order as soon as possible.\n\nReady-to-ship pieces: Dispatched within 2–3 business days.\n\nMade-to-order & bespoke pieces: Typically require 2–8 weeks for production before dispatch.\n\nOnce your order has been dispatched, delivery typically takes 4-12 business days. Delivery times may vary depending on your location, customs clearance, and local courier services."
  },
  {
    question: "What if my parcel is delayed?",
    answer: "While we work closely with trusted couriers, delays can occasionally occur due to weather, customs processing, or peak periods.\n\nIf your parcel has not arrived within the expected timeframe, please contact us and we will assist in tracking your order."
  },
  {
    question: "What if my order is lost or damaged in transit?",
    answer: "All shipments are fully insured. Please notify us as soon as possible so we can find a resolution as quickly as possible."
  },
  {
    question: "Can I change my delivery address after placing an order?",
    answer: "If your order has not yet been dispatched, we may be able to update the delivery address.\n\nPlease contact us as soon as possible. Once an order has been shipped, address changes may not be possible."
  },
  {
    question: "How is my jewellery packaged?",
    answer: "All ORÉA pieces are delivered in luxury, discreet packaging, designed for both protection and gifting."
  },
  {
    question: "Do you ship worldwide?",
    answer: "ORÉA ships internationally to most countries via DHL, so you can track your jewellery door to door.\n\nPlease note that we charge the tax-exclusive value of your jewellery. Any customs or duty charges incurred upon entry into your destination country are the responsibility of the recipient. We recommend researching your local import regulations before placing your order. ORÉA holds no responsibility for any charges applied by DHL or a local tax authority on internationally shipped purchases."
  },
  {
    question: "Can I request an urgent or priority order?",
    answer: "If you're working toward a specific date, please contact us before placing your order. We'll let you know what's possible based on current production availability and do our best to accommodate your timeline."
  }
];
