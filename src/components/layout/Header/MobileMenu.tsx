import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/common';
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
            className="fixed inset-0 top-20 bg-black/50 md:hidden"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white shadow-lg md:hidden"
          >
            <nav className="container-custom flex flex-col space-y-4 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors hover:text-primary-600 ${
                      isActive ? 'text-primary-600' : 'text-gray-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <NavLink to="/contact" onClick={onClose}>
                  <Button className="w-full">Get Started</Button>
                </NavLink>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};