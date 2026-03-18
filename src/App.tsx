import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';
import { ShopifyImagesProvider } from './context/ShopifyImagesContext';

// Route-level code splitting — each page loads only when first visited
const HomePage          = lazy(() => import('./pages/home/HomePage'));
const AboutOreaPage     = lazy(() => import('./pages/about-orea/AboutOreaPage'));
const AboutDiamondsPage = lazy(() => import('./pages/about-diamonds/AboutDiamondsPage'));
const BespokePage       = lazy(() => import('./pages/bespoke/BespokePage'));
const CollectionPage    = lazy(() => import('./pages/collection/CollectionPage'));
const ConciergePage     = lazy(() => import('./pages/concierge/ConciergePage'));
const ContactPage       = lazy(() => import('./pages/contact/ContactPage'));
const FAQPage           = lazy(() => import('./pages/faq/FAQPage'));
const CareGuidePage     = lazy(() => import('./pages/care-guide/CareGuidePage'));
const ProductPage       = lazy(() => import('./pages/product/ProductPage'));
const ReturnsPage       = lazy(() => import('./pages/returns/ReturnsPage'));
const ShippingPage      = lazy(() => import('./pages/shipping/ShippingPage'));
const TermsPage         = lazy(() => import('./pages/terms/TermsPage'));
const AuthPage          = lazy(() => import('./pages/auth/AuthPage'));
const ProfilePage       = lazy(() => import('./pages/auth/ProfilePage'));
const CartPage          = lazy(() => import('./pages/cart/CartPage'));
const CheckoutPage      = lazy(() => import('./pages/cart/CheckoutPage'));

/** Scrolls to the top of the page on every route or query-string change */
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, search]);
  return null;
}

/** Brand-aligned 404 fallback */
const NotFoundPage: React.FC = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-10">
    <div className="flex flex-col items-center gap-6">
      <p className="text-caption tracking-[0.5em] uppercase text-orea-champagne font-medium">404</p>
      <h1 className="font-serif text-h2 font-light text-orea-dark tracking-wide uppercase">
        Page Not Found
      </h1>
      <div className="w-12 h-px bg-orea-champagne/60" />
      <p className="text-body font-light text-orea-taupe tracking-wide max-w-sm leading-relaxed">
        The page you are looking for has moved or no longer exists.
      </p>
    </div>
    <Link
      to="/"
      className="text-micro font-bold uppercase tracking-widest text-orea-dark border-b border-orea-dark pb-1 hover:text-orea-gold-a hover:border-orea-gold-a transition-colors"
    >
      Return Home
    </Link>
  </div>
);


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
    <ShopifyImagesProvider>
      <ScrollToTop />
      <div className="min-h-screen">{/*Each page has its own background and styling*/}
        <Navbar />
        
        {/* Global spacer: 120px breathing room below the fixed navbar */}
        <main className="pt-[120px]">
        <ErrorBoundary>
        <Suspense fallback={<div className="min-h-[60vh] bg-orea-cream" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutOreaPage />} />
          <Route path="/diamonds" element={<AboutDiamondsPage />} />
          <Route path="/bespoke" element={<BespokePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/concierge" element={<ConciergePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/care-guide" element={<CareGuidePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
        </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </ShopifyImagesProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
