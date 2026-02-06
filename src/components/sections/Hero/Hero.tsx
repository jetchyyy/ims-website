import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/common';
import LandingImage from '@/assets/landingpage.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary-700 pt-20">
      <div className="container-custom flex min-h-screen items-center py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="mb-6 font-heading text-5xl font-bold leading-tight text-white lg:text-6xl">
              Transform Your Brand with{' '}
              <span className="text-secondary-300">Professional Marketing</span>
            </h1>
            <p className="mb-8 text-xl text-primary-100">
              From publication to digital presence, we provide comprehensive marketing solutions
              tailored to elevate your business and reach your audience.
            </p>

            {/* Features */}
            <div className="mb-8 space-y-3">
              {[
                'Professional Publication Services',
                'Custom Website Development',
                'Full-Service Marketing Solutions',
                'Dedicated Publicist Support',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-secondary-400" />
                  <span className="text-primary-50">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white text-primary-700 hover:bg-gray-100 sm:w-auto">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white/10 sm:w-auto">
                  View Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-full min-h-[500px]">
              {/* Decorative Elements */}
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary-200/30 blur-3xl" />

              {/* Hero Image */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative rounded-2xl bg-white/10 p-4 backdrop-blur-sm cursor-pointer"
                >
                  <img
                    src={LandingImage}
                    alt="Platform Dashboard Preview"
                    className="rounded-xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-primary-200">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border-2 border-primary-200"
          >
            <div className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary-200" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};