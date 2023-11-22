import React from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export type LayoutProps = {
  children: React.ReactNode;
};

/**
 * Layout component wrapper
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="fit relative">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
