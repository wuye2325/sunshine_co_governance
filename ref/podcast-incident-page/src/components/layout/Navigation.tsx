import type React from 'react';
import { useState } from 'react';

type NavItem = {
  id: string;
  label: string;
};

const NavItems: NavItem[] = [
  { id: 'overview', label: '概述' },
  { id: 'timeline', label: '时间线' },
  { id: 'responses', label: '回应' },
  { id: 'issues', label: '问题' },
  { id: 'cases', label: '案例' },
  { id: 'evidence', label: '证据' },
];

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 py-3">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-center space-x-1 md:space-x-4">
          {NavItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
