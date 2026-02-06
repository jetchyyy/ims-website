import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactInfo } from '@/data/contact';
import { Card } from '@/components/common';

export const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Get in Touch</h3>
        <p className="text-gray-600">
          Have a question or ready to start your project? We're here to help. Reach out to us
          using any of the methods below.
        </p>
      </div>

      <div className="space-y-4">
        {/* Phone Numbers */}
        <Card padding="md">
          <div className="flex items-start space-x-4">
            <div className="rounded-lg bg-primary-100 p-3">
              <Phone className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Phone</h4>
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="block text-gray-600 hover:text-primary-600"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </Card>

        {/* Email */}
        {contactInfo.email && (
          <Card padding="md">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <Mail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">Email</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 hover:text-primary-600"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </Card>
        )}

        {/* Address */}
        <Card padding="md">
          <div className="flex items-start space-x-4">
            <div className="rounded-lg bg-primary-100 p-3">
              <MapPin className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900">Office</h4>
              <p className="text-gray-600">{contactInfo.address.full}</p>
            </div>
          </div>
        </Card>

        {/* Business Hours */}
        {contactInfo.hours && (
          <Card padding="md">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg bg-primary-100 p-3">
                <Clock className="h-6 w-6 text-primary-600" />
              </div>
              <div className="flex-1">
                <h4 className="mb-3 font-semibold text-gray-900">Business Hours</h4>
                <div className="space-y-1 text-sm">
                  {Object.entries(contactInfo.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="capitalize text-gray-600">{day}:</span>
                      <span className="text-gray-900">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};