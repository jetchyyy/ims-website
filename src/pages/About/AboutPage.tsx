import { motion } from 'framer-motion';
import { Target, Users, Award, Zap } from 'lucide-react';
import { Card } from '../../components/common/Card';

export const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to helping businesses achieve their marketing goals through innovative and effective solutions.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We build lasting partnerships based on trust, transparency, and results.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards in everything we do, from design to delivery.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends to provide cutting-edge solutions that give you a competitive edge.',
    },
  ];

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
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-900">About Us</h1>
            <p className="text-xl text-gray-600">
              International Marketing Services is your trusted partner in brand transformation and
              business growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded with a vision to empower businesses through comprehensive marketing
                  solutions, International Marketing Services has grown into a trusted partner for
                  companies seeking to elevate their brand presence.
                </p>
                <p>
                  We specialize in publication services, website development, and full-spectrum
                  digital marketing. Our team of experienced professionals brings together
                  creativity, technical expertise, and strategic thinking to deliver results that
                  exceed expectations.
                </p>
                <p>
                  From startups to established enterprises, we've helped hundreds of clients
                  achieve their marketing goals through tailored solutions that reflect their
                  unique brand identity and business objectives.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '250+', label: 'Happy Clients' },
              { number: '15+', label: 'Years Experience' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Let's work together to transform your brand and achieve your business goals
            </p>
            <a
              href="/contact"
              className="inline-flex items-center rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-primary-700"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

