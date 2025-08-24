// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';


import ScrollToTopButton from './ScrollToTopButton';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <ScrollToTopButton/>
      <Footer />
      {/* <ChatbotIframe /> */}
    </div>
  );
};

export default Layout;