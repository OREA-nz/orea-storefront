import React, { useState, useRef, useEffect } from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AuthPage: React.FC = () => {
  const location = useLocation();
  const [mode, setMode] = useState<'signin' | 'signup' | 'recover'>(location.pathname === '/signup' ? 'signup' : 'signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const firstInputRef = useRef<HTMLInputElement>(null);

  // Focus the first visible input and clear field errors whenever the form mode changes
  useEffect(() => {
    const timer = setTimeout(() => firstInputRef.current?.focus(), 50);
    setFieldErrors({});
    return () => clearTimeout(timer);
  }, [mode]);

  const { signIn, signUp, recoverPassword, user } = useAuth();
  const navigate = useNavigate();

  // React-compliant redirect: use Navigate component, not navigate() during render
  if (user) {
    return <Navigate to="/profile" replace />;
  }

  const clearFieldError = (field: string) =>
    setFieldErrors(prev => ({ ...prev, [field]: '' }));

  const validateFields = (): boolean => {
    const errors: Record<string, string> = {};
    if (mode === 'signup') {
      if (!firstName.trim()) errors.firstName = 'Required';
      if (!lastName.trim())  errors.lastName  = 'Required';
    }
    if (!email.trim()) {
      errors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Enter a valid email address';
    }
    if (mode !== 'recover') {
      if (!password)            errors.password = 'Required';
      else if (password.length < 6) errors.password = 'Minimum 6 characters';
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!validateFields()) return;
    setLoading(true);

    try {
      if (mode === 'recover') {
        const ok = await recoverPassword(email);
        if (ok) {
          setSuccess('If an account exists for that email, a password reset link has been sent.');
        } else {
          setError('Unable to send recovery email. Please try again.');
        }
        setLoading(false);
        return;
      }

      let ok = false;
      if (mode === 'signin') {
        ok = await signIn(email, password);
        if (!ok) setError('Invalid email or password.');
      } else {
        if (!firstName.trim() || !lastName.trim()) {
          setError('Please enter your full name.');
          setLoading(false);
          return;
        }
        ok = await signUp(firstName, lastName, email, password);
        if (!ok) setError('An account with this email may already exist.');
      }
      if (ok) {
        navigate('/profile');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass      = 'w-full bg-transparent border-b border-orea-dark/25 py-4 text-body-sm font-light text-orea-dark placeholder:text-orea-earth outline-none focus:border-orea-dark transition-colors tracking-wide';
  const inputErrorClass = 'w-full bg-transparent border-b border-orea-error py-4 text-body-sm font-light text-orea-dark placeholder:text-orea-earth outline-none focus:border-orea-error transition-colors tracking-wide';

  return (
    <section className="min-h-[80vh] bg-orea-cream flex items-center justify-center px-6 pt-20 pb-[160px]">
      <div className="w-full max-w-md flex flex-col gap-10">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-h2 font-light text-orea-dark tracking-wide font-serif uppercase">
            {mode === 'signin' ? 'Welcome Back' : mode === 'signup' ? 'Create Account' : 'Reset Password'}
          </h1>
          <p className="text-body-sm font-light tracking-wide text-orea-dark">
            {mode === 'signin'
              ? 'Sign in to access your account, order history, and saved pieces.'
              : mode === 'signup'
              ? 'Join ORÉA for a personalised luxury experience.'
              : "Enter your email and we'll send you a link to reset your password."}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
          {mode === 'signup' && (
            <div className="flex gap-4">
              <div className="flex-1 flex flex-col gap-1">
                <input ref={firstInputRef} type="text" placeholder="First Name" value={firstName} onChange={(e) => { setFirstName(e.target.value); clearFieldError('firstName'); }} className={fieldErrors.firstName ? inputErrorClass : inputClass} />
                {fieldErrors.firstName && <p className="text-micro text-orea-error tracking-wide">{fieldErrors.firstName}</p>}
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => { setLastName(e.target.value); clearFieldError('lastName'); }} className={fieldErrors.lastName ? inputErrorClass : inputClass} />
                {fieldErrors.lastName && <p className="text-micro text-orea-error tracking-wide">{fieldErrors.lastName}</p>}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-1">
            <input
              ref={mode !== 'signup' ? firstInputRef : undefined}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearFieldError('email'); }}
              className={fieldErrors.email ? inputErrorClass : inputClass}
            />
            {fieldErrors.email && <p className="text-micro text-orea-error tracking-wide">{fieldErrors.email}</p>}
          </div>

          {mode !== 'recover' && (
            <div className="flex flex-col gap-1">
              <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value); clearFieldError('password'); }} className={fieldErrors.password ? inputErrorClass : inputClass} minLength={6} />
              {fieldErrors.password && <p className="text-micro text-orea-error tracking-wide">{fieldErrors.password}</p>}
            </div>
          )}

          {error && (
            <p className="text-micro font-bold uppercase tracking-widest text-orea-error text-center">{error}</p>
          )}

          {success && (
            <p className="text-body-sm font-light tracking-wide text-center text-orea-dark">{success}</p>
          )}

          <button type="submit" disabled={loading} className="w-full py-5 bg-orea-dark text-orea-cream text-micro font-bold uppercase tracking-widest hover:bg-orea-taupe transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading && <div className="w-3 h-3 border-2 border-orea-cream/30 border-t-orea-cream rounded-full animate-spin" />}
            {mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Send Reset Link'}
          </button>

          {mode === 'signin' && (
            <p className="text-body-sm text-center tracking-wide text-orea-dark">
              Forgot your password?{' '}
              <button type="button" onClick={() => { setMode('recover'); setError(''); setSuccess(''); }} className="text-orea-dark font-medium underline underline-offset-4 hover:text-orea-gold-a transition-colors">
                Reset your password here
              </button>.
            </p>
          )}

          {mode === 'recover' && (
            <p className="text-body-sm text-center tracking-wide text-orea-dark">
              Remember your password?{' '}
              <button type="button" onClick={() => { setMode('signin'); setError(''); setSuccess(''); }} className="text-orea-dark font-medium underline underline-offset-4 hover:text-orea-gold-a transition-colors">
                Back to sign in
              </button>
            </p>
          )}
        </form>

        <div className="text-center border-t border-orea-champagne/15 pt-8">
          {mode === 'signin' || mode === 'recover' ? (
            <p className="text-body-sm font-light tracking-wide text-orea-dark">
              {"Don't have an account? "}
              <button onClick={() => { setMode('signup'); setError(''); setSuccess(''); }} className="text-orea-dark font-medium underline underline-offset-4 hover:text-orea-gold-a transition-colors">Create one</button>
            </p>
          ) : (
            <p className="text-body-sm font-light tracking-wide text-orea-dark">
              Already have an account?{' '}
              <button onClick={() => { setMode('signin'); setError(''); setSuccess(''); }} className="text-orea-dark font-medium underline underline-offset-4 hover:text-orea-gold-a transition-colors">Sign in</button>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuthPage;