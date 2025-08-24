// components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';


import ScrollToTopButton from './ScrollToTopButton';
import Chatbot from './Chatbot';
import DiscountPopup from './DiscountPopup';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <ScrollToTopButton/>
      <DiscountPopup/>
      <Chatbot/>
      <Footer />
      {/* <ChatbotIframe /> */}
    </div>
  );
};

export default Layout;