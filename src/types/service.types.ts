export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: ServiceCategory;
}

export enum ServiceCategory {
  PUBLICATION = 'publication',
  WEBSITE = 'website',
  MARKETING = 'marketing',
  DESIGN = 'design',
}

export interface ServiceDetail extends Service {
  longDescription: string;
  benefits: string[];
  process: ProcessStep[];
  faqs: FAQ[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}