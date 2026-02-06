export const COMPANY_NAME = 'International Marketing Services';
export const COMPANY_SHORT_NAME = 'IMS';

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  PRICING: '/pricing',
  ABOUT: '/about',
  CONTACT: '/contact',
  PORTFOLIO: '/portfolio',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/imsmarketing',
  twitter: 'https://twitter.com/imsmarketing',
  linkedin: 'https://linkedin.com/company/imsmarketing',
  instagram: 'https://instagram.com/imsmarketing',
} as const;

export const META_DEFAULTS = {
  title: 'International Marketing Services - Professional Marketing Solutions',
  description:
    'Transform your brand with our comprehensive marketing services including publication, website development, and digital marketing solutions.',
  keywords:
    'marketing, publication, website development, digital marketing, graphic design, SEO, branding',
} as const;

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;