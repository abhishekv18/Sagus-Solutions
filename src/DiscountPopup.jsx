

// import React, { useState, useEffect } from 'react';
// import { X, Gift, ArrowRight, Phone, Star, Users, Clock } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const DiscountPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
//   const [spotsLeft, setSpotsLeft] = useState(8); // Dynamic spots left

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000); // Show after 1s
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isVisible && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, timeLeft]);

//   const closePopup = () => {
//     setIsVisible(false);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   if (!isVisible) return null;

//   const progressWidth = ((10 - spotsLeft) / 10) * 100;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black bg-opacity-70 animate-fadeIn">
//       <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xs overflow-hidden animate-scaleIn">
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-2 right-2 z-10 p-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
//           aria-label="Close popup"
//         >
//           <X className="w-4 h-4 text-white" />
//         </button>

//         {/* Content */}
//         <div className="flex flex-col">
//           {/* Header */}
//           <div className="relative h-28 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-white text-center px-3">
//                 <div className="flex justify-center mb-2">
//                   <div className="relative">
//                     <Gift className="w-8 h-8 relative z-10" />
//                     <div className="absolute -inset-1 bg-teal-400 rounded-full blur-md opacity-60"></div>
//                   </div>
//                 </div>
//                 <h2 className="text-lg font-bold mb-1">Special Offer!</h2>
//                 <p className="text-xs opacity-90">Limited time only</p>
//               </div>
//             </div>

//             {/* Floating decor */}
//             <div className="absolute top-1 left-2 w-4 h-4 rounded-full bg-white opacity-20 animate-pulse"></div>
//             <div className="absolute bottom-2 right-3 w-3 h-3 rounded-full bg-white opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//           </div>

//           {/* Body */}
//           <div className="p-3">
//             {/* Countdown */}
//             <div className="text-center mb-3">
//               <div className="inline-flex items-center px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium mb-2">
//                 <Clock className="w-3 h-3 mr-1" />
//                 Ends in {formatTime(timeLeft)}
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 mb-1">
//                 15% OFF
//               </h3>
//               <p className="text-slate-600 text-xs leading-relaxed">
//                 Get 15% discount on all services. Only {spotsLeft} spots remaining!
//               </p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-3">
//               <div className="flex justify-between text-xs text-slate-500 mb-1">
//                 <span className="flex items-center">
//                   <Users className="w-3 h-3 mr-1" />
//                   {10 - spotsLeft}/10 claimed
//                 </span>
//                 <span className="flex items-center">
//                   <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
//                   4.7/5
//                 </span>
//               </div>
//               <div className="w-full bg-slate-200 rounded-full h-1.5">
//                 <div
//                   className="bg-gradient-to-r from-teal-500 to-green-500 h-1.5 rounded-full transition-all duration-500"
//                   style={{ width: `${progressWidth}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col gap-2">
//               <Link to="/services">
//                 <button
//                   onClick={closePopup}
//                   className="w-full flex items-center justify-center px-3 py-2.5 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-green-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 text-sm"
//                 >
//                   <span>View Services</span>
//                   <ArrowRight className="w-3 h-3 ml-2" />
//                 </button>
//               </Link>
//               <Link to="/contact">
//                 <button
//                   onClick={closePopup}
//                   className="w-full flex items-center justify-center px-3 py-2 bg-white border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all text-sm"
//                 >
//                   <Phone className="w-3 h-3 mr-2" />
//                   <span>Contact Us</span>
//                 </button>
//               </Link>
//             </div>

//             {/* Trust */}
//             <div className="flex justify-center items-center mt-3 text-xs text-slate-500">
//               <div className="flex items-center">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <span className="ml-1">17+ happy clients</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-slate-50 px-3 py-2 text-center border-t border-slate-100">
//             <p className="text-xs text-slate-500">
//               Valid for new customers only. No code needed.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out forwards;
//         }
//         .animate-pulse {
//           animation: pulse 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DiscountPopup;
// import React, { useState, useEffect } from 'react';
// import { X, Gift, ArrowRight, Phone, Star, Users, Clock } from 'lucide-react';

// const DiscountPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
//   const [spotsLeft, setSpotsLeft] = useState(8); // Dynamic spots left

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000); // Show after 1s
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isVisible && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, timeLeft]);

//   const closePopup = () => {
//     setIsVisible(false);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   if (!isVisible) return null;

//   const progressWidth = ((10 - spotsLeft) / 10) * 100;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fadeIn">
//       <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg overflow-hidden animate-scaleIn">
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
//           aria-label="Close popup"
//         >
//           <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
//         </button>

//         {/* Content */}
//         <div className="flex flex-col">
//           {/* Header */}
//           <div className="relative h-24 sm:h-28 md:h-32 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-white text-center px-4">
//                 <div className="flex justify-center mb-3">
//                   <div className="relative">
//                     <Gift className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 relative z-10" />
//                     <div className="absolute -inset-2 bg-teal-400 rounded-full blur-md opacity-60"></div>
//                   </div>
//                 </div>
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Special Offer!</h2>
//                 <p className="text-xs md:text-sm opacity-90">Limited time only</p>
//               </div>
//             </div>

//             {/* Floating decor */}
//             <div className="absolute top-2 left-3 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white opacity-20 animate-pulse"></div>
//             <div className="absolute bottom-3 right-4 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             <div className="absolute top-5 right-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//           </div>

//           {/* Body */}
//           <div className="p-3 md:p-4 lg:p-5">
//             {/* Countdown */}
//             <div className="text-center mb-4 md:mb-6">
//               <div className="inline-flex items-center px-3 py-2 bg-red-50 text-red-700 rounded-full text-sm md:text-base font-medium mb-3">
//                 <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 Ends in {formatTime(timeLeft)}
//               </div>
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
//                 15% OFF
//               </h3>
//               <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto">
//                 Get 15% discount on all services. Only {spotsLeft} spots remaining!
//               </p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-4 md:mb-6">
//               <div className="flex justify-between text-sm md:text-base text-slate-500 mb-2">
//                 <span className="flex items-center">
//                   <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                   {10 - spotsLeft}/10 claimed
//                 </span>
//                 <span className="flex items-center">
//                   <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 text-yellow-500 fill-current" />
//                   4.7/5
//                 </span>
//               </div>
//               <div className="w-full bg-slate-200 rounded-full h-2 md:h-3">
//                 <div
//                   className="bg-gradient-to-r from-teal-500 to-green-500 h-2 md:h-3 rounded-full transition-all duration-500"
//                   style={{ width: `${progressWidth}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
//               <button
//                 onClick={closePopup}
//                 className="flex-1 flex items-center justify-center px-4 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-green-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 text-sm md:text-base"
//               >
//                 <span>View Services</span>
//                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
//               </button>
//               <button
//                 onClick={closePopup}
//                 className="flex-1 flex items-center justify-center px-4 py-3 md:py-4 bg-white border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all text-sm md:text-base"
//               >
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 <span>Contact Us</span>
//               </button>
//             </div>

//             {/* Trust */}
//             <div className="flex justify-center items-center text-sm md:text-base text-slate-500">
//               <div className="flex items-center">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <span className="ml-2">17+ happy clients</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-slate-50 px-4 md:px-6 lg:px-8 py-3 md:py-4 text-center border-t border-slate-100">
//             <p className="text-xs md:text-sm text-slate-500">
//               Valid for new customers only. No code needed.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out forwards;
//         }
//         .animate-pulse {
//           animation: pulse 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DiscountPopup;


// import React, { useState, useEffect } from 'react';
// import { X, Gift, ArrowRight, Phone, Star, Users, Clock } from 'lucide-react';

// const DiscountPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
//   const [spotsLeft, setSpotsLeft] = useState(8); // Dynamic spots left

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 1000); // Show after 1s
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     if (isVisible && timeLeft > 0) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [isVisible, timeLeft]);

//   const closePopup = () => {
//     setIsVisible(false);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   if (!isVisible) return null;

//   const progressWidth = ((10 - spotsLeft) / 10) * 100;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 animate-fadeIn">
//       <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-sm overflow-hidden animate-scaleIn">
//         {/* Close Button */}
//         <button
//           onClick={closePopup}
//           className="absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
//           aria-label="Close popup"
//         >
//           <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
//         </button>

//         {/* Content */}
//         <div className="flex flex-col">
//           {/* Header */}
//           <div className="relative h-24 sm:h-26 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-white text-center px-4">
//                 <div className="flex justify-center mb-3">
//                   <div className="relative">
//                     <Gift className="w-8 h-8 md:w-9 md:h-9 relative z-10" />
//                     <div className="absolute -inset-2 bg-teal-400 rounded-full blur-md opacity-60"></div>
//                   </div>
//                 </div>
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-1">Special Offer!</h2>
//                 <p className="text-xs md:text-sm opacity-90">Limited time only</p>
//               </div>
//             </div>

//             {/* Floating decor */}
//             <div className="absolute top-2 left-3 w-5 h-5 md:w-6 md:h-6 rounded-full bg-white opacity-20 animate-pulse"></div>
//             <div className="absolute bottom-3 right-4 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
//             <div className="absolute top-5 right-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//           </div>

//           {/* Body */}
//           <div className="p-3 md:p-4">
//             {/* Countdown */}
//             <div className="text-center mb-4 md:mb-6">
//               <div className="inline-flex items-center px-3 py-2 bg-red-50 text-red-700 rounded-full text-sm md:text-base font-medium mb-3">
//                 <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 Ends in {formatTime(timeLeft)}
//               </div>
//               <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
//                 15% OFF
//               </h3>
//               <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto">
//                 Get 15% discount on all services. Only {spotsLeft} spots remaining!
//               </p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-4 md:mb-6">
//               <div className="flex justify-between text-sm md:text-base text-slate-500 mb-2">
//                 <span className="flex items-center">
//                   <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                   {10 - spotsLeft}/10 claimed
//                 </span>
//                 <span className="flex items-center">
//                   <Star className="w-4 h-4 md:w-5 md:h-5 mr-1 text-yellow-500 fill-current" />
//                   4.7/5
//                 </span>
//               </div>
//               <div className="w-full bg-slate-200 rounded-full h-2 md:h-3">
//                 <div
//                   className="bg-gradient-to-r from-teal-500 to-green-500 h-2 md:h-3 rounded-full transition-all duration-500"
//                   style={{ width: `${progressWidth}%` }}
//                 ></div>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
//               <button
//                 onClick={closePopup}
//                 className="flex-1 flex items-center justify-center px-4 py-3 md:py-4 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-green-600 transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 text-sm md:text-base"
//               >
//                 <span>View Services</span>
//                 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
//               </button>
//               <button
//                 onClick={closePopup}
//                 className="flex-1 flex items-center justify-center px-4 py-3 md:py-4 bg-white border border-slate-300 text-slate-600 font-medium rounded-lg hover:bg-slate-50 transition-all text-sm md:text-base"
//               >
//                 <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
//                 <span>Contact Us</span>
//               </button>
//             </div>

//             {/* Trust */}
//             <div className="flex justify-center items-center text-sm md:text-base text-slate-500">
//               <div className="flex items-center">
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
//                 <span className="ml-2">17+ happy clients</span>
//               </div>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="bg-slate-50 px-4 md:px-6 lg:px-8 py-3 md:py-4 text-center border-t border-slate-100">
//             <p className="text-xs md:text-sm text-slate-500">
//               Valid for new customers only. No code needed.
//             </p>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes scaleIn {
//           from { transform: scale(0.9); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 0.8; }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out forwards;
//         }
//         .animate-pulse {
//           animation: pulse 2s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DiscountPopup;

import React, { useState, useEffect } from 'react';
import { X, Gift, ArrowRight, Phone, Star, Users, Clock } from 'lucide-react';

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [spotsLeft, setSpotsLeft] = useState(8); // Dynamic spots left

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show after 1s
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

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  const progressWidth = ((10 - spotsLeft) / 10) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black bg-opacity-70 animate-fadeIn">
      <div className="relative bg-white rounded-lg shadow-xl w-full max-w-xs overflow-hidden animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 z-10 p-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Content */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="relative h-20 bg-gradient-to-r from-teal-500 via-green-500 to-blue-600 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-center px-3">
                <div className="flex justify-center mb-1">
                  <div className="relative">
                    <Gift className="w-6 h-6 relative z-10" />
                    <div className="absolute -inset-1 bg-teal-400 rounded-full blur-md opacity-60"></div>
                  </div>
                </div>
                <h2 className="text-base font-bold mb-0.5">Special Offer!</h2>
                <p className="text-xs opacity-90">Limited time only</p>
              </div>
            </div>

            {/* Floating decor */}
            <div className="absolute top-1 left-2 w-4 h-4 rounded-full bg-white opacity-20 animate-pulse"></div>
            <div className="absolute bottom-2 right-3 w-3 h-3 rounded-full bg-white opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Body */}
          <div className="p-3">
            {/* Countdown */}
            <div className="text-center mb-3">
              <div className="inline-flex items-center px-2 py-1 bg-red-50 text-red-700 rounded-full text-xs font-medium mb-2">
                <Clock className="w-3 h-3 mr-1" />
                Ends in {formatTime(timeLeft)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                15% OFF
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed max-w-md mx-auto">
                Get 15% discount on all services. Only {spotsLeft} spots remaining!
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-slate-500 mb-1">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {10 - spotsLeft}/10 claimed
                </span>
                <span className="flex items-center">
                  <Star className="w-3 h-3 mr-0.5 text-yellow-500 fill-current" />
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

            {/* Action Buttons */}
            <div className="flex flex-col gap-2 mb-3">
              <button
                onClick={closePopup}
                className="flex items-center justify-center px-3 py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-md hover:from-teal-600 hover:to-green-600 transition-all shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 text-xs"
              >
                <span>View Services</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </button>
              <button
                onClick={closePopup}
                className="flex items-center justify-center px-3 py-2 bg-white border border-slate-300 text-slate-600 font-medium rounded-md hover:bg-slate-50 transition-all text-xs"
              >
                <Phone className="w-3 h-3 mr-1" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Trust */}
            <div className="flex justify-center items-center text-xs text-slate-500">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-1">20+ happy clients</span>
              </div>
            </div>
          </div>

          {/* Footer */}
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
          animation: scaleIn 0.3s ease-out forwards;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default DiscountPopup;