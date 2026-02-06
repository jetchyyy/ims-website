import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/utils/constants';

const navItems = [
  { name: 'Home', path: ROUTES.HOME },
  { name: 'Services', path: ROUTES.SERVICES },
  { name: 'Pricing', path: ROUTES.PRICING },
  { name: 'About', path: ROUTES.ABOUT },
  { name: 'Contact', path: ROUTES.CONTACT },
];

export const Navigation = () => {
  return (
    <nav className="flex items-center space-x-8">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors hover:text-primary-600 ${
              isActive ? 'text-primary-600' : 'text-gray-700'
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
};