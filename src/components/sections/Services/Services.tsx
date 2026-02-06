import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { services } from '@/data/services';

export const Services = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="mb-4 font-heading text-4xl font-bold text-gray-900 md:text-5xl">
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive marketing solutions designed to elevate your brand and drive results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};