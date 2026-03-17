import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Product } from './types';
import { sendReminderEmail } from '../../lib/email';
import { lockScroll, unlockScroll } from '../../lib/scrollLock';

interface GiftReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const GiftReminderModal: React.FC<GiftReminderModalProps> = ({ isOpen, onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    recipient: '',
    occasion: 'Anniversary',
    date: '',
    leadTime: '45'
  });
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [dateError, setDateError] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    lockScroll();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      unlockScroll();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const today = new Date().toISOString().split('T')[0];

  const validateDate = (value: string) => {
    if (!value) return 'Please select a date.';
    if (value < today) return 'Please choose a future date.';
    return '';
  };

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    const dErr = validateDate(formData.date);
    if (dErr) { setDateError(dErr); return; }
    setDateError('');
    setStatus('saving');
    setErrorMsg('');

    const result = await sendReminderEmail({
      name: formData.name,
      email: formData.email,
      productName: product.name,
      occasion: formData.occasion,
      occasionDate: formData.date,
      leadTime: formData.leadTime,
    });

    if (result.ok) {
      setStatus('saved');
    } else {
      setErrorMsg(result.message);
      setStatus('error');
    }
  };

  const inputClass = "w-full py-4 bg-transparent border-b border-orea-sand/50 text-body-sm focus:outline-none focus:border-orea-champagne transition-all duration-500 placeholder:text-orea-champagne/60 font-light tracking-widest text-orea-dark";
  const labelClass = "text-micro font-bold uppercase tracking-widest text-orea-dark block mb-1";

  /*
    Rendered via createPortal directly onto document.body so it sits outside
    every stacking context (including Footer's isolate + transform-gpu).
    z-[9999] guarantees it renders above all page content regardless of scroll position.
  */
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[80px] md:pt-[100px] p-0 sm:p-4 bg-orea-dark/60 backdrop-blur-sm animate-in fade-in duration-700"
      onClick={onClose}
    >
      <div
        className="bg-orea-cream w-full max-w-4xl rounded-t-lg sm:rounded-sm shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-in zoom-in-95 duration-500"
        style={{ maxHeight: 'calc(100vh - 100px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* X close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-8 right-8 z-30 text-orea-champagne hover:text-orea-dark transition-all"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left form panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-14 bg-orea-cream border-r border-orea-sand/30 flex flex-col overflow-y-auto">
          <div className="mb-10">
            <h3 className="text-h3 font-light font-serif italic text-orea-dark mb-2">Save for Occasion</h3>
            <p className="text-micro font-bold uppercase tracking-widest text-orea-dark/60">A considered reminder for a meaningful moment</p>
          </div>

          {status === 'saved' ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center gap-6 py-12 animate-in fade-in duration-700">
              <svg className="w-12 h-12 text-orea-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="font-serif text-h4 font-light text-orea-dark">Reminder Scheduled</h4>
              <p className="text-body-sm text-orea-dark/70 font-light leading-relaxed max-w-xs">
                We will reach out {formData.leadTime} days before your {formData.occasion.toLowerCase()} so you have time to prepare.
              </p>
              <button type="button" onClick={onClose} className="mt-4 text-micro font-bold uppercase tracking-widest text-orea-dark border-b border-orea-dark pb-2 hover:text-orea-taupe hover:border-orea-taupe transition-all">
                Return to the Piece
              </button>
            </div>
          ) : (
            <form onSubmit={handleSchedule} noValidate className="flex-grow flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={labelClass}>Your details</label>
                    <input type="text" placeholder="Full Name" className={inputClass} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required autoComplete="name" />
                    <input type="email" placeholder="Email Address" className={inputClass} value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required autoComplete="email" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Occasion</label>
                      <select id="occasion-select" className={inputClass} value={formData.occasion} onChange={(e) => setFormData({...formData, occasion: e.target.value})}>
                        <option>Anniversary</option>
                        <option>Birthday</option>
                        <option>Proposal</option>
                        <option>Holiday</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Occasion date</label>
                      <input id="occasion-date" type="date" min={today} className={inputClass} value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required />
                      {dateError && <p className="text-micro text-orea-error mt-1">{dateError}</p>}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{"Choose when you'd like to be reminded."}</label>
                    <div className="flex gap-3 pt-2">
                      {['30', '45', '60'].map(days => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setFormData({...formData, leadTime: days})}
                          className={`flex-1 py-3 text-micro font-bold uppercase tracking-widest border transition-all ${
                            formData.leadTime === days
                              ? 'bg-orea-dark text-orea-cream border-orea-dark shadow-sm'
                              : 'border-orea-sand/50 text-orea-dark/70 hover:border-orea-champagne'
                          }`}
                        >
                          {days} Days Prior
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                {status === 'error' && (
                  <p className="text-micro font-bold uppercase tracking-widest text-orea-error text-center animate-in slide-in-from-top-2">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'saving'}
                  className="w-full py-6 text-micro font-bold uppercase tracking-widest transition-all duration-700 flex items-center justify-center bg-orea-dark text-orea-cream hover:bg-orea-taupe disabled:opacity-70"
                >
                  {status === 'saving'
                    ? <div className="w-4 h-4 border border-orea-cream/30 border-t-orea-cream rounded-full animate-spin" />
                    : status === 'error' ? 'Try Again' : 'Schedule Reminder'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right preview panel */}
        <div className="hidden md:flex w-full md:w-1/2 bg-orea-sand/20 p-10 md:p-16 flex-col items-center justify-center text-center overflow-y-auto">
          <div className="w-full max-w-xs bg-orea-cream shadow-[0_30px_60px_-15px_rgba(74,63,53,0.1)] p-10 relative flex flex-col items-center gap-8 animate-in slide-in-from-right-8 duration-1000">
            <div className="text-caption font-light tracking-widest text-orea-dark">ORÉA</div>

            <div className="w-12 h-12 rounded-full bg-orea-sand/30 flex items-center justify-center text-orea-champagne">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="flex flex-col gap-4">
              <p className="font-serif italic text-body text-orea-dark/70 leading-relaxed px-2">
                {"We'll gently remind you"} {formData.leadTime} days before your upcoming {formData.occasion.toLowerCase()} — so you have time to prepare.
              </p>

              <div className="h-px bg-orea-sand/30 w-full" />

              <div className="flex flex-col gap-4">
                <p className="text-micro font-bold uppercase tracking-wider text-orea-dark">{product.name}</p>
                <div className="relative group">
                  <div className="bg-orea-cream p-2">
                    <img src={product.images[0] || "/placeholder.svg"} alt="Product thumbnail" width={1445} height={1445} className="w-24 h-32 object-cover mx-auto grayscale opacity-40 group-hover:opacity-60 transition-opacity" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-micro font-bold uppercase tracking-widest text-orea-dark/50 pt-4">
              With Love, ORÉA
            </div>

            <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center -translate-y-1/2 translate-x-1/2">
              <div className="w-px h-12 bg-orea-sand rotate-45 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GiftReminderModal;
