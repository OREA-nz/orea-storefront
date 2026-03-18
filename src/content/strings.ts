/**
 * Centralized UI copy — single source of truth for all user-facing strings.
 *
 * i18n-ready: keys map 1:1 to what react-intl / i18next message IDs would use.
 * To add a language, copy this object, translate the values, and swap at runtime.
 * Usage: import { strings } from '../../content/strings';
 */
export const strings = {
  nav: {
    shop:         'Shop',
    concierge:    'Concierge',
    viewAll:      'View All Pieces',
    beginBespoke: 'Begin Bespoke',
    customPrompt: 'Looking for something custom?',
    sustain:      'Sustainably grown diamonds',
    delivery:     'Complimentary NZ Delivery',
    search: {
      placeholder: 'What are you looking for?',
      label:       'Search',
      close:       'Close search',
      submit:      'Submit search',
    },
    mobile: {
      open:  'Open menu',
      close: 'Close menu',
    },
    account:     'Account',
    shoppingBag: 'Shopping Bag',
  },

  home: {
    brandValues: {
      labGrown:  { title: 'Lab-Grown Only',    subtitle: 'Never mined.'         },
      solidGold: { title: 'Solid Gold - Always', subtitle: '14k, 18k, Platinum'  },
      madeToOrder: { title: 'Made to Order',    subtitle: 'Crafted with care.'   },
    },
    featuredProducts: {
      heading: 'ORÉA Classics',
      viewAll: 'View All Pieces',
      from:    'From',
      quickView: 'Quick View',
    },
  },

  collection: {
    empty:       'No pieces match your search.',
    clearFilter: 'Clear',
    sortBy:      'Sort by',
    continueShopping: 'Continue Shopping',
  },

  cart: {
    heading:     'Your Bag',
    empty:       'Your bag is empty',
    emptyDetail: 'Explore our collection to find your perfect piece.',
    subtotal:    'Subtotal',
    taxNote:     'Shipping and tax calculated at checkout',
    checkout:    'Secure Checkout',
    proceed:     'Proceed to Checkout',
    viewFull:    'View Full Bag',
  },

  product: {
    addToBag:    'Add to Bag',
    adding:      'Adding...',
    outOfStock:  'Out of Stock',
    enquire:     'Request a Consultation',
    contactUs:   'Contact Us',
    sendHint:    'Send a Hint',
    saveOccasion: 'Save for Occasion',
    metalLabel:  'Metal:',
    shapeLabel:  'Shape:',
    caratLabel:  'Carat',
    sizeLabel:   'Ring Size',
    sizeGuide:   'Size Guide',
    addedToBag:  'Added to your bag',
    addFailed:   'Failed to add to bag',
    unavailable: 'Combination not available',
  },

  auth: {
    signIn:       'Welcome Back',
    signUp:       'Create Account',
    resetPassword: 'Reset Password',
    subtitles: {
      signIn:    'Sign in to access your account, order history, and saved pieces.',
      signUp:    'Join ORÉA for a personalised luxury experience.',
      reset:     "Enter your email and we'll send you a link to reset your password.",
    },
    cta: {
      signIn:    'Sign In',
      signUp:    'Create Account',
      sendReset: 'Send Reset Link',
    },
    links: {
      forgotPassword:   'Forgot your password?',
      resetHere:        'Reset your password here',
      rememberPassword: 'Remember your password?',
      backToSignIn:     'Back to sign in',
      noAccount:        "Don't have an account?",
      createOne:        'Create one',
      haveAccount:      'Already have an account?',
      signInLink:       'Sign in',
    },
    fields: {
      firstName:    'First Name',
      lastName:     'Last Name',
      email:        'Email Address',
      password:     'Password',
    },
    errors: {
      invalidCredentials: 'Invalid email or password.',
      emailExists:        'An account with this email may already exist.',
      generic:            'Something went wrong. Please try again.',
      recoverFail:        'Unable to send recovery email. Please try again.',
      recoverSuccess:     'If an account exists for that email, a password reset link has been sent.',
      nameRequired:       'Please enter your full name.',
      fieldRequired:      'Required',
      invalidEmail:       'Enter a valid email address',
      passwordTooShort:   'Minimum 6 characters',
    },
  },

  about: {
    standards: {
      heading:  'The ORÉA Standards',
      subtitle: 'ORÉA works within a considered framework',
      metals: {
        title:    'Solid Precious Metals',
        body1:    'We work only in solid 14k or 18k gold and platinum — never plated, filled, or vermeil.',
        body2:    'Precious metals are inherently durable, repairable, and made to last.',
      },
      diamonds: {
        title:    'Certified Premium Diamonds',
        body1:    'ORÉA works exclusively with certified lab-grown diamonds.',
        body2:    'Selected for exceptional brilliance and traceable quality.',
        body3:    'For centre stones over 1 carat, we offer only diamonds that meet our highest minimum standards, independently graded by IGI.',
      },
      guided: {
        title: 'Guided, Never Rushed',
        body:  'We offer a calm, consultation-led experience — never pressure, never urgency. Whether you are choosing a signature piece or designing bespoke, you will be guided with clarity and care.',
      },
      lasting: {
        title: 'Designed to Last',
        body:  'ORÉA jewellery is crafted for everyday wear and long-term keeping. Engagement and wedding rings include a Lifetime Manufacturing Warranty, supporting longevity well beyond the moment of purchase.',
      },
    },
  },

  errors: {
    notFound: {
      code:    '404',
      heading: 'Page Not Found',
      body:    'The page you are looking for has moved or no longer exists.',
      cta:     'Return Home',
    },
    boundary: {
      code:    'Error',
      heading: 'Something Went Wrong',
      body:    'An unexpected error occurred. Please try refreshing the page.',
      cta:     'Return Home',
    },
  },
} as const;

export type Strings = typeof strings;
