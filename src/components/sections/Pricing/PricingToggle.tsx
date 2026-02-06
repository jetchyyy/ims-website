import { motion } from 'framer-motion';

interface PricingToggleProps {
  activeTab: 'full-color' | 'black-white' | 'websites';
  onTabChange: (tab: 'full-color' | 'black-white' | 'websites') => void;
}

export const PricingToggle: React.FC<PricingToggleProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'full-color' as const, label: 'Full Color' },
    { id: 'black-white' as const, label: 'Black & White' },
    { id: 'websites' as const, label: 'Websites' },
  ];

  return (
    <div className="mb-12 flex justify-center">
      <div className="inline-flex rounded-lg bg-primary-800/50 p-1 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-6 py-3 text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-white' : 'text-primary-200 hover:text-white'
              }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-md bg-primary-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};