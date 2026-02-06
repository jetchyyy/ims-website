import { Service, ServiceCategory } from '../types/service.types';

export const services: Service[] = [
  {
    id: 'publication-republication',
    title: 'Publication & Republication',
    description:
      'Professional publication services with full color or black & white options. Get your content published with comprehensive marketing support.',
    icon: 'BookOpen',
    category: ServiceCategory.PUBLICATION,
    features: [
      'Full color & black/white options',
      'Professional layout & design',
      'Multi-channel distribution',
      'Marketing campaign support',
      'Optional publicist service',
      'Global reach capabilities',
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description:
      'Custom website solutions for portfolios, personal sites, business websites, and e-commerce platforms.',
    icon: 'Globe',
    category: ServiceCategory.WEBSITE,
    features: [
      'Responsive design',
      'SEO optimization',
      'Mobile-friendly layouts',
      'E-commerce capabilities',
      'CMS integration',
      'Custom functionality',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description:
      'Comprehensive digital marketing services including social media management, content creation, and brand strategy.',
    icon: 'TrendingUp',
    category: ServiceCategory.MARKETING,
    features: [
      'Social media management',
      'Content marketing',
      'Brand strategy',
      'SEO & SEM',
      'Email campaigns',
      'Analytics & reporting',
    ],
  },
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description:
      'Professional graphic design services for branding, marketing materials, and digital assets.',
    icon: 'Palette',
    category: ServiceCategory.DESIGN,
    features: [
      'Logo design',
      'Brand identity',
      'Marketing collateral',
      'Digital graphics',
      'Print materials',
      'Custom illustrations',
    ],
  },
];

export const serviceHighlights = [
  {
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success',
    icon: 'Users',
  },
  {
    title: 'Proven Results',
    description: 'Track record of successful campaigns and satisfied clients',
    icon: 'Award',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored strategies to meet your unique business needs',
    icon: 'Target',
  },
  {
    title: '24/7 Support',
    description: 'Always available to assist you with your projects',
    icon: 'Headphones',
  },
];