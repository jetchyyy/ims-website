import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card, Button } from '@/components/common';
import { PricingPackage } from '../../../types/pricing.types';
import { formatPrice } from '@/utils/helpers';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  package: PricingPackage;
  index: number;
}

export const PricingCard: React.FC<PricingCardProps> = ({ package: pkg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card
        className={`relative h-full ${
          pkg.popular
            ? 'border-2 border-primary-600 shadow-2xl'
            : 'border border-gray-200'
        }`}
      >
        {/* Popular Badge */}
        {pkg.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-1 rounded-full bg-primary-600 px-4 py-1 text-sm font-semibold text-white">
              <Star className="h-4 w-4" />
              <span>Popular</span>
            </div>
          </div>
        )}

        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
            {pkg.description && <p className="text-sm text-gray-600">{pkg.description}</p>}
            {pkg.coverage && <p className="text-sm text-gray-600">{pkg.coverage}</p>}
          </div>

          {/* Price */}
          <div className="mb-6">
            <div className="mb-2 flex items-baseline">
              <span className="text-4xl font-bold text-gray-900">
                {formatPrice(pkg.regularPrice)}
              </span>
            </div>
            {pkg.publicistPrice && (
              <div className="text-sm text-gray-600">
                <p>+ {formatPrice(pkg.publicistPrice)}/month with publicist</p>
                {pkg.totalPackagePrice && (
                  <p className="font-semibold text-primary-600">
                    Total: {formatPrice(pkg.totalPackagePrice)}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Features */}
          <ul className="mb-8 flex-1 space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                <span className="text-sm text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/contact">
            <Button
              variant={pkg.popular ? 'primary' : 'outline'}
              className="w-full"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};