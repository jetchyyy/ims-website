import { motion } from 'framer-motion';
import { Pricing } from '@/components/sections/Pricing';
import { Card } from '../../components/common/Card';
import { publicistService } from '@/data/pricing';
import { formatPrice } from '@/utils/helpers';
import { Check } from 'lucide-react';

export const PricingPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the perfect package for your needs. All packages include our quality guarantee
              and can be customized to fit your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <Pricing />

      {/* Publicist Service */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Add Professional Publicist Service
              </h2>
              <p className="text-gray-600">
                Enhance any package with our dedicated publicist service
              </p>
            </div>

            <Card className="border-2 border-primary-200">
              <div className="grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {publicistService.name}
                  </h3>
                  <div className="mb-6 flex items-baseline">
                    <span className="text-4xl font-bold text-primary-600">
                      {formatPrice(publicistService.price)}
                    </span>
                    <span className="ml-2 text-gray-600">/{publicistService.billingCycle}</span>
                  </div>
                  <p className="text-gray-600">
                    Get dedicated support from our experienced publicist team to maximize your
                    reach and impact.
                  </p>
                </div>

                <div>
                  <h4 className="mb-4 font-semibold text-gray-900">What's Included:</h4>
                  <ul className="space-y-3">
                    {publicistService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'Can I customize a package to fit my specific needs?',
                  a: 'Absolutely! All our packages are flexible and can be customized. Contact us to discuss your specific requirements.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major credit cards, bank transfers, and offer payment plans for larger projects.',
                },
                {
                  q: 'How long does it take to complete a project?',
                  a: 'Timeline varies by project scope. Publication packages typically take 4-8 weeks, while websites can take 2-6 weeks depending on complexity.',
                },
                {
                  q: 'Do you offer ongoing support after project completion?',
                  a: 'Yes! All packages include post-launch support, and we offer monthly maintenance plans for continued assistance.',
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <h3 className="mb-2 font-semibold text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};