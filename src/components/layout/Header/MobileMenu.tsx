import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/utils/constants';

const navItems = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Services', path: ROUTES.SERVICES },
  { name: 'Pricing', path: ROUTES.PRICING },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Contact', path: ROUTES.CONTACT },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-20 md:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-20 z-50 border-t border-gray-100 bg-white shadow-lg md:hidden"
          >
            <div className="border-b border-gray-100 p-4">
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-black tracking-tight text-primary-700">
                  IMS
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase leading-none tracking-wider text-gray-900">
                    International
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-none tracking-wider text-gray-900">
                    Marketing
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-none tracking-wider text-gray-900">
                    Services
                  </span>
                </div>
              </div>
            </div>
            <nav className="container-custom flex flex-col space-y-4 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-medium text-white transition-all duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Get Started
                </NavLink>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};