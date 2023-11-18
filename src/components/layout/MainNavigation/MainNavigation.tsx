import React from 'react';
import { navLinks } from '../../../config';

export type MainNavigationProps = {
  className?: string;
};

const MainNavigation: React.FC<MainNavigationProps> = ({ className }) => {
  return (
    <nav className={`nav ${className || ''}`}>
      <ul className="flex gap-16">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a className="text-[16px]" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
