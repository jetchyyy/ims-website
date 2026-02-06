import { motion } from 'framer-motion';
import { LucideIcon, BookOpen, Globe, TrendingUp, Palette } from 'lucide-react';
import { Card } from '@/components/common';
import { Service } from '../../../types/service.types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Globe,
  TrendingUp,
  Palette,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = iconMap[service.icon] || BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group h-full transition-all duration-300 hover:scale-105">
        <div className="flex flex-col items-start">
          {/* Icon */}
          <div className="mb-4 rounded-lg bg-primary-100 p-3 transition-colors group-hover:bg-primary-600">
            <Icon className="h-8 w-8 text-primary-600 transition-colors group-hover:text-white" />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-semibold text-gray-900">{service.title}</h3>

          {/* Description */}
          <p className="mb-4 text-gray-600">{service.description}</p>

          {/* Features */}
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-gray-600">
                <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Learn More Link */}
          <button className="mt-6 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700">
            Learn More →
          </button>
        </div>
      </Card>
    </motion.div>
  );
};