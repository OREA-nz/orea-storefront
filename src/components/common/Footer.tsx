import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { sendEmail } from '../../lib/email';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterState, setNewsletterState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      setNewsletterState('error');
      return;
    }
    setNewsletterState('loading');
    setErrorMsg('');
    const result = await sendEmail({
      subject: 'ORÉA Newsletter Sign-Up',
      from_name: 'Newsletter Subscriber',
      from_email: email.trim(),
      message: `New newsletter subscriber: ${email.trim()}`,
    });
    if (result.ok) {
      setNewsletterState('success');
      setEmail('');
    } else {
      setErrorMsg(result.message);
      setNewsletterState('error');
    }
  };

  return (
    <footer className="bg-orea-dark text-orea-cream py-section px-4 sm:px-6 lg:px-8 isolate transform-gpu">
      <div className="max-w-wide mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 lg:gap-x-12 items-start">

          <div className="flex flex-col gap-10">
            <h4 className="font-serif text-caption tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">SHOP</h4>
            <ul className="flex flex-col gap-5 text-caption tracking-[0.2em] font-light uppercase">
              <li><Link to="/collection?category=Rings" className="hover:text-orea-gold transition-colors duration-500">Rings</Link></li>
              <li><Link to="/collection?category=Necklaces" className="hover:text-orea-gold transition-colors duration-500">Necklaces</Link></li>
              <li><Link to="/collection?category=Earrings" className="hover:text-orea-gold transition-colors duration-500">Earrings</Link></li>
              <li><Link to="/collection?category=Bracelets" className="hover:text-orea-gold transition-colors duration-500">Bracelets</Link></li>
              <li><Link to="/collection?category=Pendants" className="hover:text-orea-gold transition-colors duration-500">Pendants</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-10">
            <h4 className="font-serif text-caption tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">HELP</h4>
            <ul className="flex flex-col gap-5 text-caption tracking-[0.2em] font-light uppercase">
              <li><Link to="/faq" className="hover:text-orea-gold transition-colors duration-500">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-orea-gold transition-colors duration-500">Contact Us</Link></li>
              <li><Link to="/care-guide" className="hover:text-orea-gold transition-colors duration-500">Care Guide</Link></li>
              <li><Link to="/shipping" className="hover:text-orea-gold transition-colors duration-500">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-orea-gold transition-colors duration-500">Returns & Exchanges</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-10 md:col-span-2 lg:col-span-1 lg:items-end lg:text-right">
            <div className="flex flex-col gap-6">
              <h4 className="font-serif text-caption tracking-[0.4em] uppercase text-orea-champagne font-semibold leading-none">JOIN OUR COMMUNITY</h4>
              <p className="text-body-sm tracking-[0.08em] text-orea-cream font-bold leading-relaxed uppercase">Receive $25 off your first order.</p>
              <p className="text-caption tracking-[0.1em] text-orea-oatmeal/70 font-light leading-relaxed uppercase">Early access to new pieces, private releases, exclusive offers & more.</p>
            </div>

            <div className="flex flex-col gap-8">
              {newsletterState === 'success' ? (
                <p className="text-caption tracking-[0.2em] uppercase text-orea-gold font-medium py-3 border-b border-orea-champagne/20">
                  Welcome to the community — check your inbox.
                </p>
              ) : (
                <form onSubmit={handleNewsletter} noValidate className="w-full">
                  <div className="flex border-b border-orea-champagne/20 pb-3 group focus-within:border-orea-gold transition-colors duration-700">
                    <label htmlFor="footer-email" className="sr-only">Email address for newsletter</label>
                    <input
                      id="footer-email"
                      type="email"
                      placeholder="EMAIL ADDRESS"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); if (newsletterState === 'error') setNewsletterState('idle'); }}
                      className="bg-transparent text-caption tracking-[0.3em] outline-none flex-1 placeholder:text-orea-taupe text-orea-cream uppercase"
                      autoComplete="email"
                      disabled={newsletterState === 'loading'}
                    />
                    <button type="submit" disabled={newsletterState === 'loading'} className="text-caption tracking-[0.4em] uppercase text-orea-champagne hover:text-orea-gold ml-4 font-semibold transition-colors duration-500 disabled:opacity-60">
                      {newsletterState === 'loading' ? (
                        <span className="inline-block w-3 h-3 border border-orea-champagne/40 border-t-orea-champagne rounded-full animate-spin" />
                      ) : 'JOIN'}
                    </button>
                  </div>
                  {newsletterState === 'error' && (
                    <p className="mt-2 text-micro tracking-[0.15em] text-orea-error font-medium">{errorMsg}</p>
                  )}
                </form>
              )}

              <div className="flex justify-end gap-3 pt-6">
                <span className="p-3 -m-1 text-orea-oatmeal/40 cursor-not-allowed" aria-label="Instagram (coming soon)" title="Coming soon">
                  <Instagram size={16} strokeWidth={1.2} />
                </span>
                <span className="p-3 -m-1 text-orea-oatmeal/40 cursor-not-allowed" aria-label="Facebook (coming soon)" title="Coming soon">
                  <Facebook size={16} strokeWidth={1.2} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-orea-champagne/10 flex justify-end items-center text-micro tracking-[0.4em] uppercase">
          <Link to="/terms" className="text-orea-oatmeal/60 hover:text-orea-cream transition-colors uppercase">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
