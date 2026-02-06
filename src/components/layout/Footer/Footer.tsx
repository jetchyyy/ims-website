import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { COMPANY_NAME, ROUTES } from '@/utils/constants';
import { contactInfo } from '@/data/contact';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <span className="text-xl font-bold text-white">IMS</span>
              </div>
              <span className="text-lg font-bold text-white">{COMPANY_NAME}</span>
            </div>
            <p className="text-sm text-gray-400">
              Transform your brand with professional marketing solutions tailored to your success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-sm hover:text-primary-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SERVICES} className="text-sm hover:text-primary-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to={ROUTES.PRICING} className="text-sm hover:text-primary-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ABOUT} className="text-sm hover:text-primary-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="text-sm hover:text-primary-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Publication & Republication</li>
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Graphic Design</li>
              <li>Publicist Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm">{contactInfo.address.full}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                <div className="space-y-1 text-sm">
                  {contactInfo.phones.map((phone, index) => (
                    <div key={index}>{phone}</div>
                  ))}
                </div>
              </li>
              {contactInfo.email && (
                <li className="flex items-start space-x-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-primary-400">
                    {contactInfo.email}
                  </a>
                </li>
              )}
            </ul>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-primary-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © {currentYear} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};