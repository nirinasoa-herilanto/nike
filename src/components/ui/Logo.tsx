import React from 'react';

import { footerLogo, headerLogo } from '../../assets/images';

export type LogoProps = {
  className?: string;
  hasFooterLogo?: boolean;
};

const Logo: React.FC<LogoProps> = ({ className, hasFooterLogo = false }) => {
  return (
    <div className={`logo ${className || ''}`}>
      <a href="/">
        {!hasFooterLogo && <img src={headerLogo} alt="logo" />}
        {hasFooterLogo && <img src={footerLogo} alt="logo" />}
      </a>
    </div>
  );
};

export default Logo;
