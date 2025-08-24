import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Phone, Star, Target, Users, Clock } from 'lucide-react';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [spotsLeft, setSpotsLeft] = useState(8); // Dynamic spots left

  useEffect(() => {
    // Check if popup was shown recently (removed localStorage for demo)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, timeLeft]);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleServiceClick = () => {
    setSpotsLeft(prev => Math.max(0, prev - 1));
    closePopup();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  const progressWidth = ((10 - spotsLeft) / 10) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black bg-opacity-60 animate-fadeIn">
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-1 sm:p-1.5 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {/* Compact Header with Image */}
          <div className="relative h-28 sm:h-32 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-3 sm:px-4">
                <div className="flex justify-center mb-1 sm:mb-2">
                  <div className="relative">
                    <Gift className="w-8 h-8 sm:w-10 sm:h-10 relative z-10" />
                    <div className="absolute -inset-1 sm:-inset-2 bg-teal-400 rounded-full blur-md opacity-60"></div>
                  </div>
                </div>
                <h2 className="text-lg sm:text-xl font-bold mb-0.5 sm:mb-1">Special Offer!</h2>
                <p className="text-xs sm:text-sm opacity-90">Limited time only</p>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-1 left-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white opacity-20 animate-pulse"></div>
            <div className="absolute bottom-2 right-3 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-4 right-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>

          {/* Compact Body */}
          <div className="p-3 sm:p-4">
            {/* Countdown Timer */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium mb-2">
                <Clock className="w-3 h-3 mr-1" />
                Ends in {formatTime(timeLeft)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                20% OFF
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Get 20% discount on all services. Only {spotsLeft} spots remaining!
              </p>
            </div>

            {/* Compact Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {10 - spotsLeft}/10 claimed
                </span>
                <span className="flex items-center">
                  <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                  4.7/5
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-1.5">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-green-500 h-1.5 rounded-full transition-all duration-500" 
                  style={{ width: `${progressWidth}%` }}
                ></div>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-col gap-2">
              <button 
                onClick={handleServiceClick}
                className="w-full flex items-center justify-center px-3 py-2.5 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-green-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 text-sm"
              >
                <span>Claim Discount</span>
                <ArrowRight className="w-3 h-3 ml-2" />
              </button>
              <button 
                onClick={closePopup}
                className="w-full flex items-center justify-center px-3 py-2 bg-white border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all text-sm"
              >
                <Phone className="w-3 h-3 mr-2" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center items-center mt-3 text-xs text-slate-500">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-1">17+ happy clients</span>
              </div>
            </div>
          </div>

          {/* Compact Footer */}
          <div className="bg-slate-50 px-3 py-2 text-center border-t border-slate-100">
            <p className="text-xs text-slate-500">
              Valid for new customers only. No code needed.
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
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @media (max-width: 640px) {
          .animate-scaleIn {
            animation: scaleIn 0.3s ease-out forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default DiscountPopup;