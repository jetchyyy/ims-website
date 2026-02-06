import { useState } from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';
import { PricingToggle } from './PricingToggle';
import { fullColorPackages, blackWhitePackages, websitePackages } from '@/data/pricing';

export const Pricing = () => {
  const [activeTab, setActiveTab] = useState<'full-color' | 'black-white' | 'websites'>(
    'full-color'
  );

  const getPackages = () => {
    switch (activeTab) {
      case 'full-color':
        return fullColorPackages;
      case 'black-white':
        return blackWhitePackages;
      case 'websites':
        return websitePackages.map((pkg) => ({
          ...pkg,
          regularPrice: pkg.price,
          features: pkg.features,
          description: pkg.coverage,
        }));
      default:
        return fullColorPackages;
    }
  };

  const packages = getPackages();

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold text-gray-900 md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the perfect package for your needs. All packages include our quality guarantee.
          </p>
        </motion.div>

        {/* Pricing Toggle */}
        <PricingToggle activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.id} package={pkg} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            All packages can be customized to fit your specific needs.{' '}
            <a href="/contact" className="font-medium text-primary-600 hover:text-primary-700">
              Contact us
            </a>{' '}
            for a custom quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};