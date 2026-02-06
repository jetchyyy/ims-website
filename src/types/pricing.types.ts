export interface PricingPackage {
  id: string;
  name: string;
  category: PricingCategory;
  regularPrice: number;
  publicistPrice?: number;
  totalPackagePrice?: number;
  features: string[];
  popular?: boolean;
  description?: string;
  coverage?: string;
}

export enum PricingCategory {
  FULL_COLOR = 'full-color',
  BLACK_WHITE = 'black-white',
  WEBSITE = 'website',
}

export enum PackageTier {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum',
}

export interface WebsitePackage {
  id: string;
  name: string;
  category: PricingCategory;
  price: number;
  coverage: string;
  features: string[];
  examples: string[];
}