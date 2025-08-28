// import React, { useState, useEffect, useRef } from 'react';

// const ClientLogos = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Replace these with your actual client logo image paths
//   const clientLogos = [
//     {
//       id: 1,
//       name: "Client 1",
//       logo: "/logo1.png", // Replace with your actual logo path
//     },
//     {
//       id: 2,
//       name: "Client 2", 
//       logo: "/logo2.png", // Replace with your actual logo path
//     },
//     {
//       id: 3,
//       name: "Client 3",
//       logo: "/logo3.png", // Replace with your actual logo path
//     },
//     {
//       id: 4,
//       name: "Client 4",
//       logo: "/logo4.png", // Replace with your actual logo path
//     }
//   ];

//   // Auto-scroll effect
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     let animationId;
//     let position = 0;
//     const speed = 0.5; // Pixels per frame (adjust for speed)

//     const animate = () => {
//       position -= speed;
      
//       // Reset position when scrolled completely
//       if (-position >= container.scrollWidth / 2) {
//         position = 0;
//       }
      
//       container.style.transform = `translateX(${position}px)`;
//       animationId = requestAnimationFrame(animate);
//     };

//     animationId = requestAnimationFrame(animate);

//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, []);

//   return (
//     <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-10 md:mb-14">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
//             Trusted by Industry Leaders
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
//             We've had the privilege of working with amazing companies across various industries
//           </p>
//         </div>

//         {/* Logo Carousel Container */}
//         <div className="relative overflow-hidden py-4">
//           {/* Gradient overlays for a smoother look */}
//           <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
          
//           {/* Logo Carousel */}
//           <div className="overflow-hidden">
//             <div 
//               ref={scrollContainerRef}
//               className="flex whitespace-nowrap"
//             >
//               {/* Double the logos for seamless looping */}
//               {[...clientLogos, ...clientLogos].map((client, index) => (
//                 <div 
//                   key={`${client.id}-${index}`} 
//                   className="inline-flex items-center justify-center px-4 md:px-6 lg:px-8"
//                   style={{ 
//                     width: isMobile ? '50%' : isTablet ? '33.333%' : '25%',
//                     flexShrink: 0
//                   }}
//                 >
//                   <div className="flex items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 h-28 md:h-32 w-full group">
//                     <div className="relative w-full h-full flex items-center justify-center">
//                       <img 
//                         src={client.logo} 
//                         alt={client.name}
//                         className="object-contain max-h-full max-w-full filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300 p-2"
//                       />
//                     </div>
//                     {/* Teal accent on hover */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 rounded-xl group-hover:from-teal-500/5 group-hover:to-teal-600/10 transition-all duration-300"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Teal decorative elements */}
//           <div className="flex justify-center mt-8 space-x-2">
//             {[1, 2, 3, 4].map((dot) => (
//               <div
//                 key={dot}
//                 className="w-2 h-2 rounded-full bg-teal-200 animate-pulse"
//                 style={{ animationDelay: `${dot * 0.2}s` }}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientLogos;




import React, { useState, useEffect, useRef } from 'react';

const ClientLogos = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Replace these with your actual client logo image paths
  const clientLogos = [
    {
      id: 1,
      name: "Client 1",
      logo: "/WhatsApp Image 2025-08-29 at 01.22.40_2bb8cc7b.jpg", // Replace with your actual logo path
    },
    {
      id: 2,
      name: "Client 2", 
      logo: "/WhatsApp Image 2025-08-29 at 01.22.41_2e00eaa6.jpg", // Replace with your actual logo path
    },
    {
      id: 3,
      name: "Client 3",
      logo: "/WhatsApp Image 2025-08-29 at 01.22.41_55aaadfb.jpg", // Replace with your actual logo path
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/WhatsApp Image 2025-08-29 at 01.22.41_ca37cac5.jpg", // Replace with your actual logo path
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let position = 0;
    const speed = 0.5; // Pixels per frame (adjust for speed)

    const animate = () => {
      position -= speed;
      
      // Reset position when scrolled completely
      if (-position >= container.scrollWidth / 2) {
        position = 0;
      }
      
      container.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Teal Accent */}
        <div className="text-center mb-10 md:mb-14">
         
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Trusted by <span className="text-teal-600">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We've had the privilege of working with amazing companies across various industries
          </p>
        </div>

        {/* Logo Carousel Container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient overlays for a smoother look */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
          
          {/* Logo Carousel */}
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex whitespace-nowrap"
            >
              {/* Double the logos for seamless looping */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={`${client.id}-${index}`} 
                  className="inline-flex items-center justify-center px-4 md:px-6 lg:px-8"
                  style={{ 
                    width: isMobile ? '50%' : isTablet ? '33.333%' : '25%',
                    flexShrink: 0
                  }}
                >
                  <div className="flex items-center justify-center p-4 md:p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 h-28 md:h-32 w-full group relative">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="object-contain max-h-full max-w-full filter  opacity-100 transition-all duration-300 p-2"
                      />
                    </div>
                    {/* Teal accent on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 rounded-xl group-hover:from-teal-500/5 group-hover:to-teal-600/10 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teal decorative elements */}
          <div className="flex justify-center mt-8 space-x-2">
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"
                style={{ animationDelay: `${dot * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Teal accent text at bottom */}
        <div className="text-center mt-10 md:mt-14">
          <p className="text-sm md:text-base text-teal-700 font-medium">
            Partner with us today and join our growing list of satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;