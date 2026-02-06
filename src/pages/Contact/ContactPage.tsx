import { motion } from 'framer-motion';
import { Contact } from '@/components/sections/Contact';
import { Card } from '../../components/common/Card';
import { paymentInfo } from '@/data/contact';

export const ContactPage = () => {
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
            <h1 className="mb-6 font-heading text-5xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Whether you have a question about our services, pricing,
              or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Payment Information Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              Payment Information
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Local Bank Info */}
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {paymentInfo.localBank.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Account Holder:</span>
                    <p className="text-gray-600">{paymentInfo.localBank.accountHolder}</p>
                    <p className="text-gray-600">{paymentInfo.localBank.accountHolderWise}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">ACH and Wire Routing Number:</span>
                    <p className="font-mono text-gray-900">{paymentInfo.localBank.routingNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Account Number:</span>
                    <p className="font-mono text-gray-900">{paymentInfo.localBank.accountNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Account Type:</span>
                    <p className="text-gray-600">{paymentInfo.localBank.accountType}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Bank Name and Address:</span>
                    <p className="text-gray-600">{paymentInfo.localBank.bankName}</p>
                    <p className="text-gray-600">{paymentInfo.localBank.bankAddress}</p>
                  </div>
                </div>
              </Card>

              {/* International Bank Info */}
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {paymentInfo.internationalBank.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Account Holder:</span>
                    <p className="text-gray-600">{paymentInfo.internationalBank.accountHolder}</p>
                    <p className="text-gray-600">{paymentInfo.internationalBank.accountHolderWise}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">SWIFT/BIC:</span>
                    <p className="font-mono text-gray-900">{paymentInfo.internationalBank.swiftBIC}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Account Number:</span>
                    <p className="font-mono text-gray-900">{paymentInfo.internationalBank.accountNumber}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Bank Name and Address:</span>
                    <p className="text-gray-600">{paymentInfo.internationalBank.bankName}</p>
                    <p className="text-gray-600">{paymentInfo.internationalBank.bankAddress}</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Find Us</h2>
            <div className="overflow-hidden rounded-xl bg-gray-200">
              {/* You can integrate Google Maps here */}
              <div className="flex h-96 items-center justify-center">
                <p className="text-gray-500">
                  206 S Magnolia Ave unit f, Ocala, FL 34471
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};