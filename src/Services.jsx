
// import React, { useState, useEffect } from 'react';
// import { 
//   Code, 
//   Palette, 
//   Smartphone, 
//   BarChart3, 
//   Cloud, 
//   Search,
//   Shield,
//   Zap,
//   CheckCircle,
//   ArrowRight,
//   Rocket,
//   MessageCircle,
//   Bot,
//   User,
//   Video,
//   FileText,
//   Brain,
//   Sparkles,
//   Play,
//   PenTool,
//   Server,
//   Target,
//   Award,
//   Users,
//   Clock,
//   TrendingUp,
//   Star,
//   Download
// } from 'lucide-react';
// import Footer from './Footer';
// import Header from './Header';
// import { Link } from 'react-router-dom';

// const Services = () => {
//   const [isVisible, setIsVisible] = useState({});
//   const [activeCategory, setActiveCategory] = useState('all');

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({
//               ...prev,
//               [entry.target.id]: true
//             }));
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('[data-animate]').forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "Web Development",
//       description: "Cutting-edge web applications built with modern frameworks, optimized for performance, scalability, and user experience.",
//       features: [
//         "React & Next.js Development",
//         "Progressive Web Apps",
//         "E-commerce Platforms",
//         "Custom CMS Solutions",
//         "API Development & Integration"
//       ],
//       color: "from-teal-500 to-teal-600",
//       stats: "11+",
//       metric: "Projects Delivered",
//       category: "development",
//       price: "Starting at ₹4,499"
//     },
//     {
//       icon: <Palette className="w-8 h-8" />,
//       title: "UI/UX Design",
//       description: "Strategic design solutions that combine aesthetic excellence with user psychology to drive engagement and conversions.",
//       features: [
//         "User Research & Analysis",
//         "Design Systems & Style Guides",
//         "Interactive Prototyping",
//         "Usability Testing",
//         "Brand Identity Design"
//       ],
//       color: "from-green-500 to-green-600",
//       stats: "98%",
//       metric: "Client Satisfaction",
//       category: "design",
//       price: "Starting at ₹2,499"
//     },
//     {
//       icon: <Smartphone className="w-8 h-8" />,
//       title: "Mobile App Development",
//       description: "Native and hybrid mobile solutions that deliver exceptional performance across iOS and Android platforms.",
//       features: [
//         "Native iOS & Android Apps",
//         "Cross-platform Development",
//         "App Store Optimization",
//         "Push Notification Systems",
//         "In-app Payment Integration"
//       ],
//       color: "from-blue-500 to-blue-600",
//       stats: "5+",
//       metric: "Apps in Store",
//       category: "development",
//       price: "Starting at ₹4,999"
//     },
//     {
//       icon: <MessageCircle className="w-8 h-8" />,
//       title: "AI Chatbots",
//       description: "Intelligent conversational AI that provides instant customer support, lead qualification, and seamless user interactions.",
//       features: [
//         "Natural Language Processing",
//         "Multi-channel Integration",
//         "Sentiment Analysis",
//         "Live Chat Handoff",
//         "Analytics & Insights"
//       ],
//       color: "from-purple-500 to-purple-600",
//       stats: "24/7",
//       metric: "Automated Support",
//       category: "ai",
//       price: "Starting at ₹4,499"
//     },
//     {
//       icon: <Bot className="w-8 h-8" />,
//       title: "AI Automation",
//       description: "Custom AI agents that streamline business processes, reduce operational costs, and enhance productivity.",
//       features: [
//         "Process Automation",
//         "Workflow Optimization",
//         "Data Processing & Analysis",
//         "Predictive Analytics",
//         "Custom AI Solutions"
//       ],
//       color: "from-indigo-500 to-indigo-600",
//       stats: "85%",
//       metric: "Efficiency Increase",
//       category: "ai",
//       price: "Starting at ₹4,999"
//     },
//     {
//       icon: <Video className="w-8 h-8" />,
//       title: "Video Production",
//       description: "Professional video content that captivates audiences and drives engagement across all digital platforms.",
//       // features: [
//       //   "Corporate Video Production",
//       //   "Motion Graphics & Animation",
//       //   "Post-production & Editing",
//       //   "Live Streaming Solutions",
//       //   "Video Marketing Strategy"
//       // ],
//       features: [
//   "Corporate Video Production – Professional video & photo shoots for your business",
//   "Engaging visuals for reels and promos",
//   "Editing – Flawless edits for videos and photos",
//   "Video Marketing Strategy – Create impactful reels and campaigns for growth"
// ],

//       color: "from-red-500 to-red-600",
//       stats: "4K+",
//       metric: "Ultra HD Quality",
//       category: "content",
//       price: "Starting at ₹2,499"
//     },
//   ];

//   const serviceCategories = [
//     {
//       id: 'all',
//       title: "All Services",
//       icon: <Target className="w-5 h-5" />,
//       count: services.length
//     },
//     {
//       id: 'ai',
//       title: "AI & ML",
//       icon: <Sparkles className="w-5 h-5" />,
//       count: services.filter(s => s.category === 'ai').length
//     },
//     {
//       id: 'development',
//       title: "Development",
//       icon: <Code className="w-5 h-5" />,
//       count: services.filter(s => s.category === 'development').length
//     },
//     {
//       id: 'design',
//       title: "Design",
//       icon: <Palette className="w-5 h-5" />,
//       count: services.filter(s => s.category === 'design').length
//     },
//     {
//       id: 'content',
//       title: "Content",
//       icon: <PenTool className="w-5 h-5" />,
//       count: services.filter(s => s.category === 'content').length
//     },
//   ];
//   const downloadQuotation = () => {
//     // Create a sample PDF quotation (in a real app, this would be generated from your backend)
//     const pdfUrl = '/Quation Sagus solution.pdf'; // Replace with your actual PDF path
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.download = 'DigitalAptech-Quotation.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   const filteredServices = activeCategory === 'all' 
//     ? services 
//     : services.filter(service => service.category === activeCategory);

//   const stats = [
//     {
//       icon: <Award className="w-6 h-6" />,
//       number: "26+",
//       label: "Projects Completed",
//       color: "text-teal-600"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       number: "17+",
//       label: "Happy Clients",
//       color: "text-green-600"
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       number: "1.5+",
//       label: "Years Experience",
//       color: "text-blue-600"
//     },
//     {
//       icon: <Star className="w-6 h-6" />,
//       number: "4.7/5",
//       label: "Client Rating",
//       color: "text-purple-600"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <Header/>
//       <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full opacity-20 animate-pulse"></div> */}
//           <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
//           <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20">
//           {/* Hero Content */}
//           <div className="text-center mb-20" data-animate id="hero-content">
//             <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 text-slate-700 rounded-full text-sm font-medium mb-8 shadow-sm transition-all duration-700 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               <Sparkles className="w-4 h-4 mr-2 text-teal-600" />
//               Professional Digital Services
//             </div>
            
//             <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-slate-900 transition-all duration-700 delay-200 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               Transform Your Business with 
//               <span className="block bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 bg-clip-text text-transparent mt-2">
//                 Digital Excellence
//               </span>
//             </h1>
            
//             <p className={`text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-700 delay-400 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               Partner with industry experts to build innovative solutions that drive growth, 
//               enhance user experience, and position your brand at the forefront of digital innovation.
//             </p>

//             {/* Stats */}
//             <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transition-all duration-700 delay-600 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center group">
//                   <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} bg-slate-50 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
//                     {stat.icon}
//                   </div>
//                   <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-slate-600 font-medium">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service Categories Filter */}
//       <section className="py-16 bg-white border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             {serviceCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`group relative inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
//                   activeCategory === category.id
//                     ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg shadow-teal-500/25'
//                     : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
//                 }`}
//               >
//                 {category.icon}
//                 <span className="ml-2">{category.title}</span>
//                 <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
//                   activeCategory === category.id
//                     ? 'bg-white/20 text-white'
//                     : 'bg-slate-200 text-slate-600'
//                 }`}>
//                   {category.count}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-animate id="services-grid">
//             {filteredServices.map((service, index) => (
//               <div 
//                 key={index}
//                 className={`group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden ${isVisible['services-grid'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
//                 style={{ animationDelay: `${index * 100}ms` }}
//               >
//                 {/* Service Header */}
//                 <div className="p-8 pb-6">
//                   <div className="flex items-start justify-between mb-6">
//                     <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} text-white rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                       {service.icon}
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-slate-900">{service.stats}</div>
//                       <div className="text-xs text-slate-500 font-medium">{service.metric}</div>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">
//                     {service.title}
//                   </h3>
                  
//                   <p className="text-slate-600 leading-relaxed mb-6">
//                     {service.description}
//                   </p>

//                   {/* Features */}
//                   <ul className="space-y-3 mb-8">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center text-slate-700 text-sm">
//                         <CheckCircle className="w-4 h-4 text-teal-500 mr-3 flex-shrink-0" />
//                         <span className="font-medium">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* Service Footer */}
//                 <div className="px-8 py-6 bg-slate-50 border-t border-slate-100">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <div className="text-sm text-slate-500 mb-1">Pricing</div>
//                       <div className="text-lg font-bold text-slate-900">{service.price}</div>
//                     </div>
//                     <button className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-xl hover:from-teal-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30">
//                       Get Started
//                       <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Hover Gradient Border */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-16" data-animate id="process-header">
//             <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 text-slate-700 rounded-full text-sm font-medium mb-8 shadow-sm transition-all duration-700 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               <Rocket className="w-4 h-4 mr-2 text-teal-600" />
//               Our Process
//             </div>
//             <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 transition-all duration-700 delay-200 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               How We Deliver <span className="text-teal-600">Excellence</span>
//             </h2>
//             <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//               Our proven methodology ensures exceptional results through strategic planning, 
//               innovative design, and flawless execution.
//             </p>
//           </div>

//           <div className="relative" data-animate id="process-steps">
//             {/* Process Timeline */}
//             <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-200 via-green-200 to-blue-200 hidden lg:block"></div>
            
//             {[
//               {
//                 step: "01",
//                 title: "Discovery & Strategy",
//                 description: "Deep dive into your business goals, target audience, and competitive landscape to craft a winning strategy.",
//                 icon: <Search className="w-6 h-6" />,
//                 color: "from-teal-500 to-teal-600"
//               },
//               {
//                 step: "02",
//                 title: "Design & Prototyping",
//                 description: "Create intuitive user experiences and stunning visual designs that resonate with your audience.",
//                 icon: <Palette className="w-6 h-6" />,
//                 color: "from-green-500 to-green-600"
//               },
//               {
//                 step: "03",
//                 title: "Development & Integration",
//                 description: "Build robust, scalable solutions using cutting-edge technologies and best practices.",
//                 icon: <Code className="w-6 h-6" />,
//                 color: "from-blue-500 to-blue-600"
//               },
//               {
//                 step: "04",
//                 title: "Testing & Optimization",
//                 description: "Rigorous testing and performance optimization to ensure flawless functionality.",
//                 icon: <Shield className="w-6 h-6" />,
//                 color: "from-purple-500 to-purple-600"
//               },
//               {
//                 step: "05",
//                 title: "Launch & Support",
//                 description: "Seamless deployment with ongoing support and maintenance for continued success.",
//                 icon: <Rocket className="w-6 h-6" />,
//                 color: "from-pink-500 to-pink-600"
//               }
//             ].map((process, index) => (
//               <div 
//                 key={index}
//                 className={`relative flex items-center mb-12 last:mb-0 transition-all duration-700 ${
//                   isVisible['process-steps'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
//                 } ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
//                 style={{ animationDelay: `${index * 200}ms` }}
//               >
//                 {/* Step Content */}
//                 <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
//                   <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
//                     <div className="flex items-start gap-6">
//                       <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${process.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                         {process.icon}
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm font-bold text-slate-400 mb-2">STEP {process.step}</div>
//                         <h3 className="text-2xl font-bold text-slate-900 mb-3">
//                           {process.title}
//                         </h3>
//                         <p className="text-slate-600 leading-relaxed">
//                           {process.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Timeline Dot */}
//                 <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-teal-500 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden mb-0.5">
//         {/* Animated Background */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//         </div>
        
//         <div className="relative max-w-6xl mx-auto text-center px-6 lg:px-8" data-animate id="cta-section">
//           <h2 className={`text-3xl md:text-5xl font-bold mb-8 transition-all duration-700 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//             Ready to Build Something 
//             <span className="block bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text text-transparent mt-2">
//               Extraordinary?
//             </span>
//           </h2>
          
//           <p className={`text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//             Join 200+ successful businesses that trust us to deliver innovative digital solutions. 
//             Let's discuss your project and bring your vision to life.
//           </p>
          
//           <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 delay-400 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
//             <Link to='/our-work'>
//              <button className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105">
//               <Rocket className="w-5 h-5 mr-3" />
//               View Projects
//               <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
//             </button>
//             </Link>
//            <Link to='/contact'>
            
//             <button className="group relative inline-flex items-center px-10 py-4 border-2 border-teal-400/30 hover:border-teal-400 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-teal-500/10">
//               <MessageCircle className="w-5 h-5 mr-3" />
//               Schedule Consultation
//             </button>
//            </Link>
           
//           </div>
//  <div className="mt-12">
//           <button 
//             onClick={downloadQuotation}
//             className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-xl hover:from-blue-300 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/30"
//           >
//             <Download className="w-5 h-5 mr-2" />
//             Download Quotation Template
//           </button>
//         </div>
      
//         </div>
      
//       </section>
//   <Footer/>
//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         @keyframes fade-in-up {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fade-in-up {
//           animation: fade-in-up 0.6s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  BarChart3, 
  Cloud, 
  Search,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Rocket,
  MessageCircle,
  Bot,
  User,
  Video,
  FileText,
  Brain,
  Sparkles,
  Play,
  PenTool,
  Server,
  Target,
  Award,
  Users,
  Clock,
  TrendingUp,
  Star,
  Download
} from 'lucide-react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Web Development",
      description: "Cutting-edge web applications built with modern frameworks, optimized for performance, scalability, and user experience.",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps",
        "E-commerce Platforms",
        "Custom CMS Solutions",
        "API Development & Integration"
      ],
      color: "from-teal-500 to-teal-600",
      stats: "11+",
      metric: "Projects Delivered",
      category: "development",
      price: "Starting at ₹4,499"
    },
    {
      icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
      title: "UI/UX Design",
      description: "Strategic design solutions that combine aesthetic excellence with user psychology to drive engagement and conversions.",
      features: [
        "User Research & Analysis",
        "Design Systems & Style Guides",
        "Interactive Prototyping",
        "Usability Testing",
        "Brand Identity Design"
      ],
      color: "from-green-500 to-green-600",
      stats: "98%",
      metric: "Client Satisfaction",
      category: "design",
      price: "Starting at ₹2,499"
    },
    {
      icon: <Smartphone className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Mobile App Development",
      description: "Native and hybrid mobile solutions that deliver exceptional performance across iOS and Android platforms.",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "App Store Optimization",
        "Push Notification Systems",
        "In-app Payment Integration"
      ],
      color: "from-blue-500 to-blue-600",
      stats: "5+",
      metric: "Apps in Store",
      category: "development",
      price: "Starting at ₹4,999"
    },
    {
      icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that provides instant customer support, lead qualification, and seamless user interactions.",
      features: [
        "Natural Language Processing",
        "Multi-channel Integration",
        "Sentiment Analysis",
        "Live Chat Handoff",
        "Analytics & Insights"
      ],
      color: "from-purple-500 to-purple-600",
      stats: "24/7",
      metric: "Automated Support",
      category: "ai",
      price: "Starting at ₹4,499"
    },
    {
      icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI Automation",
      description: "Custom AI agents that streamline business processes, reduce operational costs, and enhance productivity.",
      features: [
        "Process Automation",
        "Workflow Optimization",
        "Data Processing & Analysis",
        "Predictive Analytics",
        "Custom AI Solutions"
      ],
      color: "from-indigo-500 to-indigo-600",
      stats: "85%",
      metric: "Efficiency Increase",
      category: "ai",
      price: "Starting at ₹4,999"
    },
    {
      icon: <Video className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Video Production",
      description: "Professional video content that captivates audiences and drives engagement across all digital platforms.",
      features: [
        "Corporate Video Production – Professional video & photo shoots for your business",
        "Engaging visuals for reels and promos",
        "Editing – Flawless edits for videos and photos",
        "Video Marketing Strategy – Create impactful reels and campaigns for growth"
      ],
      color: "from-red-500 to-red-600",
      stats: "4K+",
      metric: "Ultra HD Quality",
      category: "content",
      price: "Starting at ₹2,499"
    },
  ];

  const serviceCategories = [
    {
      id: 'all',
      title: "All Services",
      icon: <Target className="w-4 h-4 md:w-5 md:h-5" />,
      count: services.length
    },
    {
      id: 'ai',
      title: "AI & ML",
      icon: <Sparkles className="w-4 h-4 md:w-5 md:h-5" />,
      count: services.filter(s => s.category === 'ai').length
    },
    {
      id: 'development',
      title: "Development",
      icon: <Code className="w-4 h-4 md:w-5 md:h-5" />,
      count: services.filter(s => s.category === 'development').length
    },
    {
      id: 'design',
      title: "Design",
      icon: <Palette className="w-4 h-4 md:w-5 md:h-5" />,
      count: services.filter(s => s.category === 'design').length
    },
    {
      id: 'content',
      title: "Content",
      icon: <PenTool className="w-4 h-4 md:w-5 md:h-5" />,
      count: services.filter(s => s.category === 'content').length
    },
  ];
  
  const downloadQuotation = () => {
    const pdfUrl = '/Quation Sagus solution.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'DigitalAptech-Quotation.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const stats = [
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      number: "26+",
      label: "Projects Completed",
      color: "text-teal-600"
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      number: "17+",
      label: "Happy Clients",
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-5 h-5 md:w-6 md:h-6" />,
      number: "1.5+",
      label: "Years Experience",
      color: "text-blue-600"
    },
    {
      icon: <Star className="w-5 h-5 md:w-6 md:h-6" />,
      number: "4.7/5",
      label: "Client Rating",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     
      <section className="relative py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
          {/* Hero Content */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20" data-animate id="hero-content">
            <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-sm transition-all duration-700 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Professional Digital Services
            </div>
            
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 text-slate-900 transition-all duration-700 delay-200 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              Transform Your Business with 
              <span className="block bg-gradient-to-r from-teal-600 via-green-600 to-blue-600 bg-clip-text text-transparent mt-2">
                Digital Excellence
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10 lg:mb-12 transition-all duration-700 delay-400 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              Partner with industry experts to build innovative solutions that drive growth, 
              enhance user experience, and position your brand at the forefront of digital innovation.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 max-w-4xl mx-auto transition-all duration-700 delay-600 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 ${stat.color} bg-slate-50 rounded-xl mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {category.icon}
                <span className="ml-1 md:ml-2">{category.title}</span>
                <span className={`ml-1 md:ml-2 px-1.5 py-0.5 md:px-2 md:py-1 text-xs rounded-full ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-animate id="services-grid">
            {filteredServices.map((service, index) => (
              <div 
                key={index}
                className={`group relative bg-white rounded-xl md:rounded-2xl border border-slate-100 hover:border-slate-200 transition-all duration-500 hover:shadow-xl md:hover:shadow-2xl hover:shadow-slate-200/50 overflow-hidden ${isVisible['services-grid'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="p-6 md:p-8 pb-4 md:pb-6">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} text-white rounded-xl md:rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xl md:text-2xl font-bold text-slate-900">{service.stats}</div>
                      <div className="text-xs text-slate-500 font-medium">{service.metric}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-teal-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-4 md:mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 text-xs md:text-sm">
                        <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-teal-500 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Footer */}
                <div className="px-6 md:px-8 py-4 md:py-6 bg-slate-50 border-t border-slate-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                    <div>
                      <div className="text-xs md:text-sm text-slate-500 mb-1">Pricing</div>
                      <div className="text-base md:text-lg font-bold text-slate-900">{service.price}</div>
                    </div>
                    <Link to='/contact'>
                       <button className="group/btn inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold rounded-lg md:rounded-xl hover:from-teal-400 hover:to-green-400 transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 text-xs md:text-sm">
                      Get Started
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                    </Link>
                 
                  </div>
                </div>

                {/* Hover Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl md:rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16" data-animate id="process-header">
            <div className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-sm transition-all duration-700 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              <Rocket className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Our Process
            </div>
            <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 text-slate-900 transition-all duration-700 delay-200 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              How We Deliver <span className="text-teal-600">Excellence</span>
            </h2>
            <p className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${isVisible['process-header'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
              Our proven methodology ensures exceptional results through strategic planning, 
              innovative design, and flawless execution.
            </p>
          </div>

          <div className="relative" data-animate id="process-steps">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-teal-200 via-green-200 to-blue-200 hidden lg:block"></div>
            
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description: "Deep dive into your business goals, target audience, and competitive landscape to craft a winning strategy.",
                icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
                color: "from-teal-500 to-teal-600"
              },
              {
                step: "02",
                title: "Design & Prototyping",
                description: "Create intuitive user experiences and stunning visual designs that resonate with your audience.",
                icon: <Palette className="w-5 h-5 md:w-6 md:h-6" />,
                color: "from-green-500 to-green-600"
              },
              {
                step: "03",
                title: "Development & Integration",
                description: "Build robust, scalable solutions using cutting-edge technologies and best practices.",
                icon: <Code className="w-5 h-5 md:w-6 md:h-6" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "Rigorous testing and performance optimization to ensure flawless functionality.",
                icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "05",
                title: "Launch & Support",
                description: "Seamless deployment with ongoing support and maintenance for continued success.",
                icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
                color: "from-pink-500 to-pink-600"
              }
            ].map((process, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 md:mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible['process-steps'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'
                } ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8 xl:pr-12' : 'lg:pl-8 xl:pl-12'}`}>
                  <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${process.color} text-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {process.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs md:text-sm font-bold text-slate-400 mb-1 md:mb-2">STEP {process.step}</div>
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                          {process.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-teal-500 to-green-500 rounded-full border-4 border-white shadow-lg z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden mb-0.5">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 md:right-20 w-28 h-28 md:w-40 md:h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8" data-animate id="cta-section">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 transition-all duration-700 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            Ready to Build Something 
            <span className="block bg-gradient-to-r from-teal-400 via-green-400 to-blue-400 bg-clip-text text-transparent mt-2">
              Extraordinary?
            </span>
          </h2>
          
          <p className={`text-lg md:text-xl text-slate-300 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            Join 200+ successful businesses that trust us to deliver innovative digital solutions. 
            Let's discuss your project and bring your vision to life.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center transition-all duration-700 delay-400 ${isVisible['cta-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
            <Link to='/our-work'>
              <button className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-400 hover:to-green-400 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 text-sm md:text-base">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                View Projects
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to='/contact'>
              <button className="group relative inline-flex items-center px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 border-2 border-teal-400/30 hover:border-teal-400 text-white font-semibold rounded-lg md:rounded-xl transition-all duration-300 hover:bg-teal-500/10 text-sm md:text-base">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                Schedule Consultation
              </button>
            </Link>
          </div>
          
          <div className="mt-8 md:mt-10 lg:mt-12">
            <button 
              onClick={downloadQuotation}
              className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-semibold rounded-lg md:rounded-xl hover:from-blue-300 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-blue-400/25 hover:shadow-xl hover:shadow-blue-400/30 text-sm md:text-base"
            >
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              Download Quotation Template
            </button>
          </div>
        </div>
      </section>
      
   

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Services;