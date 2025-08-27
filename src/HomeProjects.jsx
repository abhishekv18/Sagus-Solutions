// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, ArrowUpRight, Lightbulb, Home } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const HomeProjects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlay, setIsAutoPlay] = useState(true);
// const projects = [
//   {
//     id: 1,
//     title: "Pindichap Junction",
//     category: "Web Development",
//     image: "/WhatsApp Image 2025-08-23 at 22.41.13_2fd089e7.jpg", // replace with your best screenshot
//     description: "A restaurant web app featuring menu categories, table booking, and a seamless food ordering experience.",
//       link: "/our-work"
//   },
//   {
//     id: 2,
//     title: "Ashwamedh Foundation",
//     category: "Web Development",
//     image: "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg", // replace with actual screenshot
//     description: "NGO website dedicated to education and healthcare initiatives, built with a responsive and user-friendly design.",
//      link: "/our-work"
//   },
//   {
//     id: 3,
//     title: "Adiyogi Foundation",
//     category: "Web Development",
//     image: "/WhatsApp Image 2025-08-23 at 22.46.06_a5864731.jpg", // replace with actual screenshot
//     description: "Spiritual and cultural foundation site highlighting purpose restoration and outreach programs.",
//      link: "/our-work"
//   },
//   {
//     id: 4,
//     title: "International Laity Association",
//     category: "Web Development",
//     image: "/WhatsApp Image 2025-08-23 at 22.51.51_e0180228.jpg", // replace with actual screenshot
//     description: "Interfaith digital platform embracing Sikhism, Hinduism, Islam, Christianity, and Buddhism to foster harmony.",
//      link: "/our-work"
//   },
//   {
//     id: 5,
//     title: "Fork App",
//     category: "Mobile Application",
//     image: "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg", // replace with actual screenshot
//     description: "Food discovery and rewards platform where users can explore restaurants, share reviews, and earn points.",
//     link: "/our-work"
//   }
// ];

//   // const projects = [
//   //   {
//   //     id: 1,
//   //     title: "E-commerce Platform",
//   //     category: "Web Development",
//   //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format",
//   //     description: "Modern e-commerce solution with AI-powered recommendations and seamless user experience",
//   //     link: "/projects/ecommerce"
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "Healthcare Mobile App",
//   //     category: "Mobile Development",
//   //     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format",
//   //     description: "Revolutionary telemedicine app connecting patients with doctors worldwide",
//   //     link: "/projects/healthcare"
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "Analytics Dashboard",
//   //     category: "Data Analytics",
//   //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
//   //     description: "Real-time business intelligence dashboard with advanced data visualization",
//   //     link: "/projects/analytics"
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "AI Chatbot System",
//   //     category: "AI/ML",
//   //     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
//   //     description: "Intelligent conversational AI system with natural language processing",
//   //     link: "/projects/chatbot"
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "Fintech Solution",
//   //     category: "Finance",
//   //     image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&auto=format",
//   //     description: "Secure digital banking platform with blockchain integration",
//   //     link: "/projects/fintech"
//   //   }
//   // ];

//   // Auto-play functionality
//   useEffect(() => {
//     if (isAutoPlay) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % projects.length);
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlay, projects.length]);

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % projects.length);
//   };

//   const handleProjectClick = (project) => {
//     // In a real app, you'd use React Router or Next.js router
//     console.log(`Navigating to: ${project.link}`);
//     // window.location.href = project.link;
//   };

//   const getSlideStyle = (index) => {
//     const diff = index - currentIndex;
//     const totalSlides = projects.length;
    
//     // Normalize the difference to handle wrapping
//     let normalizedDiff = diff;
//     if (diff > totalSlides / 2) {
//       normalizedDiff = diff - totalSlides;
//     } else if (diff < -totalSlides / 2) {
//       normalizedDiff = diff + totalSlides;
//     }
    
//     const isCenter = normalizedDiff === 0;
//     const translateX = normalizedDiff * 280; // Distance between slides
//     const scale = isCenter ? 1.15 : 0.85;
//     const zIndex = isCenter ? 20 : 10 - Math.abs(normalizedDiff);
//     const opacity = Math.abs(normalizedDiff) > 2 ? 0 : isCenter ? 1 : 0.7;
//     const rotateY = normalizedDiff * -8; // Slight 3D rotation
    
//     return {
//       transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
//       zIndex,
//       opacity,
//       transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//     };
//   };

//   return (
//     <section className="py-20 px-5 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm">
//             <Lightbulb className="w-4 h-4 mr-2 text-teal-600" />
//             Our Latest Work
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
//             Recent Projects
//           </h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             Showcasing our latest innovations and successful client solutions
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative h-[500px] mb-12">
//           <div 
//             className="flex items-center justify-center h-full relative perspective-1000"
//             style={{ perspective: '1000px' }}
//             onMouseEnter={() => setIsAutoPlay(false)}
//             onMouseLeave={() => setIsAutoPlay(true)}
//           >
//             {projects.map((project, index) => (
//               <div
//                 key={project.id}
//                 className="absolute w-80 h-96 cursor-pointer group"
//                 style={getSlideStyle(index)}
//                 onClick={() => handleProjectClick(project)}
//               >
//                 <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-white">
//                   {/* Gradient border effect */}
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
//                   {/* Image Container */}
//                   <div className="relative h-64 overflow-hidden">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                       loading="lazy"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
//                     {/* Category Badge */}
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
//                         {project.category}
//                       </span>
//                     </div>

//                     {/* Hover overlay with arrow */}
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                       <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform group-hover:scale-110 transition-transform duration-300">
//                         <ArrowUpRight className="w-6 h-6 text-white" />
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Content */}
//                   <div className="p-4">
//                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-1">
//                       {project.title}
//                     </h3>
//                     <p className="text-slate-600 text-sm line-clamp-2 mb-3">
//                       {project.description}
//                     </p>
//                     <Link to={project.link}>
//                      <div className="flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700 transition-colors duration-300">
//                       View Case Study
//                       <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
//                     </div>
//                     </Link>
                   
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={goToPrevious}
//             className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:scale-110 z-30"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
          
//           <button
//             onClick={goToNext}
//             className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:scale-110 z-30"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Dot Navigation */}
//         <div className="flex justify-center space-x-3 mb-12">
//           {projects.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentIndex === index
//                   ? 'bg-gradient-to-r from-teal-500 to-green-500 scale-125 shadow-lg'
//                   : 'bg-slate-300 hover:bg-slate-400'
//               }`}
//             />
//           ))}
//         </div>

//         {/* View All Projects Button */}
//         <div className="text-center">
//           <button 
//             onClick={() => window.location.href = '/our-work'}
//             className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer overflow-hidden"
//           >
//             View All Projects
//             <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            
//             {/* Shine effect */}
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//           </button>
//         </div>
//       </div>
      
//       {/* Decorative elements */}
//       <div className="absolute left-1/4 mt-16 w-5 h-5 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full shadow-sm animate-pulse opacity-50"></div>
//       <div className="absolute right-1/4 mt-24 w-4 h-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full shadow-sm animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
//     </section>
//   );
// };

// export default HomeProjects;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Lightbulb, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  const projects = [
    {
      id: 1,
      title: "Pindichap Junction",
      category: "Web Development",
      image: "/WhatsApp Image 2025-08-23 at 22.41.13_2fd089e7.jpg",
      description: "A restaurant web app featuring menu categories, table booking, and a seamless food ordering experience.",
      link: "/our-work"
    },
    {
      id: 2,
      title: "Ashwamedh Foundation",
      category: "Web Development",
      image: "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg",
      description: "NGO website dedicated to education and healthcare initiatives, built with a responsive and user-friendly design.",
      link: "/our-work"
    },
    {
      id: 3,
      title: "Adiyogi Foundation",
      category: "Web Development",
      image: "/WhatsApp Image 2025-08-23 at 22.46.06_a5864731.jpg",
      description: "Spiritual and cultural foundation site highlighting purpose restoration and outreach programs.",
      link: "/our-work"
    },
    {
      id: 4,
      title: "International Laity Association",
      category: "Web Development",
      image: "/WhatsApp Image 2025-08-23 at 22.51.51_e0180228.jpg",
      description: "Interfaith digital platform embracing Sikhism, Hinduism, Islam, Christianity, and Buddhism to foster harmony.",
      link: "/our-work"
    },
    {
      id: 5,
      title: "Fork App",
      category: "Mobile Application",
      image: "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg",
      description: "Food discovery and rewards platform where users can explore restaurants, share reviews, and earn points.",
      link: "/our-work"
    }
  ];

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, projects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handleProjectClick = (project) => {
    console.log(`Navigating to: ${project.link}`);
  };

  const getSlideStyle = (index) => {
    const diff = index - currentIndex;
    const totalSlides = projects.length;
    
    // For mobile and tablet, use a simpler carousel
    if (isMobile) {
      // Mobile: single slide view
      if (index === currentIndex) {
        return {
          transform: 'translateX(0) scale(1)',
          zIndex: 20,
          opacity: 1,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
      } else {
        return {
          transform: 'translateX(100%)',
          zIndex: 10,
          opacity: 0,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
      }
    } else if (isTablet) {
      // Tablet: show 2-3 slides with less spacing
      if (Math.abs(diff) <= 1) {
        const translateX = diff * 220; // Reduced distance between slides
        const scale = diff === 0 ? 1.1 : 0.9;
        const zIndex = diff === 0 ? 20 : 15 - Math.abs(diff);
        const opacity = diff === 0 ? 1 : 0.8;
        
        return {
          transform: `translateX(${translateX}px) scale(${scale})`,
          zIndex,
          opacity,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
      } else {
        return {
          transform: 'translateX(0) scale(0.8)',
          zIndex: 5,
          opacity: 0,
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
      }
    }
    
    // Desktop: original 3D carousel
    let normalizedDiff = diff;
    if (diff > totalSlides / 2) {
      normalizedDiff = diff - totalSlides;
    } else if (diff < -totalSlides / 2) {
      normalizedDiff = diff + totalSlides;
    }
    
    const isCenter = normalizedDiff === 0;
    const translateX = normalizedDiff * 280;
    const scale = isCenter ? 1.15 : 0.85;
    const zIndex = isCenter ? 20 : 10 - Math.abs(normalizedDiff);
    const opacity = Math.abs(normalizedDiff) > 2 ? 0 : isCenter ? 1 : 0.7;
    const rotateY = normalizedDiff * -8;
    
    return {
      transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
      zIndex,
      opacity,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    };
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <div className="inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Lightbulb className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
            Our Latest Work
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-slate-900">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing our latest innovations and successful client solutions
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[380px] sm:h-[420px] md:h-[450px] lg:h-[500px] mb-8 md:mb-10 lg:mb-12">
          <div 
            className="flex items-center justify-center h-full relative perspective-1000"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute ${isMobile ? 'w-full max-w-xs' : 'w-64 md:w-72 lg:w-80'} h-80 md:h-88 lg:h-96 cursor-pointer group`}
                style={getSlideStyle(index)}
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl md:shadow-2xl hover:shadow-3xl transition-shadow duration-500 bg-white">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Image Container */}
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 md:top-4 right-3 md:right-4">
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs md:text-sm font-medium rounded-full shadow-lg backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover overlay with arrow */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-2 md:p-3 transform group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 md:p-4">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm line-clamp-2 mb-2 md:mb-3">
                      {project.description}
                    </p>
                    <Link to={project.link}>
                      <div className="flex items-center text-teal-600 font-medium text-xs md:text-sm group-hover:text-teal-700 transition-colors duration-300">
                        View Case Study
                        <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:scale-110 z-30"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 hover:text-teal-600 hover:scale-110 z-30"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center space-x-2 md:space-x-3 mb-8 md:mb-10 lg:mb-12">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-gradient-to-r from-teal-500 to-green-500 scale-125 shadow-lg'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button 
            onClick={() => window.location.href = '/our-work'}
            className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 cursor-pointer overflow-hidden text-sm md:text-base"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      {/* <div className="absolute left-10 md:left-1/4 mt-12 md:mt-16 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full shadow-sm animate-pulse opacity-50"></div>
      <div className="absolute right-10 md:right-1/4 mt-16 md:mt-24 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full shadow-sm animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div> */}
    </section>
  );
};

export default HomeProjects;