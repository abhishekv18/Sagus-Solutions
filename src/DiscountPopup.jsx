import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Phone, Star, Target, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Check if popup was shown recently
    const popupShown = localStorage.getItem('discountPopupShown');
    const lastShownTime = localStorage.getItem('discountPopupTime');
    const currentTime = new Date().getTime();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    if (!popupShown || (lastShownTime && currentTime - lastShownTime > oneDay)) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        localStorage.setItem('discountPopupShown', 'true');
        localStorage.setItem('discountPopupTime', currentTime.toString());
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 p-1.5 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-slate-600" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {/* Header with Image */}
          <div className="relative h-40 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-4">
                <div className="flex justify-center mb-2">
                  <div className="relative">
                    <Gift className="w-12 h-12 relative z-10" />
                    <div className="absolute -inset-2 bg-teal-400 rounded-full blur-md opacity-70"></div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-1">Exclusive Offer!</h2>
                <p className="text-sm">For our first 10 customers</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-white opacity-20"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-white opacity-30"></div>
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white opacity-40"></div>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="text-center mb-4">
              <div className="inline-flex items-center px-3 py-1 bg-teal-50 text-teal-800 rounded-full text-sm font-medium mb-3">
                <Target className="w-4 h-4 mr-1 text-teal-600" />
                LIMITED SPOTS AVAILABLE
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                15% Extra Discount
              </h3>
              <p className="text-slate-600 text-sm">
                Be one of the first 10 customers to get an additional 15% off on all our services. 
                Transform your business with our digital solutions at a special rate!
              </p>
            </div>

            {/* Progress bar showing limited availability */}
            <div className="mb-5">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  Spots filled: 2/10
                </span>
                <span>Limited availability</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-green-500 h-2 rounded-full" 
                  style={{ width: '20%' }}
                ></div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/services" 
                className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-green-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40"
                onClick={closePopup}
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="flex-1 flex items-center justify-center px-4 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all"
                onClick={closePopup}
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-5 py-3 text-center border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Offer valid for first 10 customers only. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default DiscountPopup;