import React, { useState } from 'react';
import Header from '../Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {' '}
      <Header /> {children}
    </div>
  );
};
