
// import React, { useEffect, useState, useRef } from 'react';
// import { 
//   ExternalLink, 
//   Github, 
//   ArrowRight, 
//   Eye,
//   Code,
//   Palette,
//   Smartphone,
//   Server,
//   Zap,
//   Clock,
//   Users,
//   Award,
//   ChevronLeft,
//   ChevronRight,
//   X,
//   Calendar,
//   Target,
//   BarChart3,
//   CheckCircle,
//   Play,
//   Shield,
//   Database,
//   Cpu,
//   Globe,
//   MessageCircle,
//   Video,
//   FileText,
//   Brain
// } from 'lucide-react';
// import Header from './Header';
// import Footer from './Footer';
// import { Link } from 'react-router-dom';

// const OurWork = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [currentProject, setCurrentProject] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [isVisible, setIsVisible] = useState({});
//   const [statsValues, setStatsValues] = useState({
//     projects: 0,
//     satisfaction: 0,
//     technologies: 0,
//     users: 0
//   });
//   const [contentLoaded, setContentLoaded] = useState(false);
//   const statsRef = useRef(null);

//   const categories = [
//     { id: 'all', name: 'Some Projects', icon: <Zap className="w-4 h-4" />, count: 5 },
   
//   ];

//   useEffect(() => {
//     // Set content as loaded after 100ms to trigger animations
//     const timer = setTimeout(() => {
//       setContentLoaded(true);
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, []);

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

//   // Stats animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Animate stats counting
//           animateCounter(50, 50, 2000, 'projects');
//           animateCounter(0, 98, 2000, 'satisfaction');
//           animateCounter(0, 25, 2000, 'technologies');
//           animateCounter(0, 3, 2500, 'users');
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => {
//       if (statsRef.current) {
//         observer.unobserve(statsRef.current);
//       }
//     };
//   }, []);

//   const animateCounter = (start, end, duration, key) => {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const value = Math.floor(progress * (end - start) + start);
      
//       setStatsValues(prev => ({
//         ...prev,
//         [key]: key === 'users' ? value + 'M+' : value + (key === 'satisfaction' ? '%' : '+')
//       }));
      
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   };

//   // const webProjects = [
//   //   {
//   //     id: 1,
//   //     title: "Nexus E-commerce Platform",
//   //     category: "ecommerce",
//   //     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
//   //     coverImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop",
//   //     description: "A comprehensive e-commerce solution revolutionizing online retail experiences",
//   //     fullDescription: "Nexus is a cutting-edge e-commerce platform designed to handle high-volume transactions while providing personalized shopping experiences. We implemented AI-driven product recommendations, real-time inventory management, and a seamless checkout process that reduced cart abandonment by 42%.",
//   //     technologies: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "AWS", "Redis", "Elasticsearch"],
//   //     features: [
//   //       "AI-Powered Recommendations",
//   //       "Real-time Inventory Management", 
//   //       "Multi-payment Gateway Integration",
//   //       "Advanced Admin Dashboard",
//   //       "Customer Behavior Analytics",
//   //       "Mobile-First Responsive Design",
//   //       "SEO Optimized Architecture",
//   //       "Cloud Infrastructure"
//   //     ],
//   //     challenges: [
//   //       "Handling 10,000+ concurrent users during sales events",
//   //       "Integrating multiple payment providers securely",
//   //       "Personalizing user experiences at scale"
//   //     ],
//   //     solutions: [
//   //       "Implemented microservices architecture with auto-scaling",
//   //       "Built custom payment gateway abstraction layer",
//   //       "Developed machine learning models for personalized recommendations"
//   //     ],
//   //     results: [
//   //       { metric: "42%", description: "Reduction in cart abandonment" },
//   //       { metric: "3.2x", description: "Increase in conversion rate" },
//   //       { metric: "99.9%", description: "Uptime during peak seasons" },
//   //       { metric: "2.8s", description: "Average page load time" }
//   //     ],
//   //     liveUrl: "https://nexus-ecommerce.com",
//   //     githubUrl: "https://github.com/nexus-ecommerce",
//   //     caseStudyUrl: "/case-studies/nexus",
//   //     stats: { 
//   //       duration: "6 months", 
//   //       team: "8 professionals", 
//   //       clients: "50K+ active users",
//   //       budget: "$150K",
//   //       launchDate: "2023-03-15"
//   //     },
//   //     logo: "🛒",
//   //     gallery: [
//   //       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1556742044-3f034d92b010?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1556742044-3f034d92b010?w=600&h=400&fit=crop"
//   //     ],
//   //     testimonials: [
//   //       {
//   //         text: "SAGUS transformed our online presence. The platform handles our peak traffic effortlessly and the AI recommendations have significantly increased our average order value.",
//   //         author: "Sarah Johnson",
//   //         role: "CEO, Fashion Retail Co.",
//   //         avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 2,
//   //     title: "AnalyticsPro Dashboard",
//   //     category: "dashboard",
//   //     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
//   //     coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
//   //     description: "Enterprise-grade business intelligence platform with real-time analytics",
//   //     fullDescription: "AnalyticsPro is a comprehensive business intelligence solution that transforms complex data into actionable insights. The platform features real-time analytics, custom reporting, and advanced visualization tools that help businesses make data-driven decisions.",
//   //     technologies: ["Next.js", "TypeScript", "D3.js", "PostgreSQL", "Chart.js", "Python", "FastAPI", "Docker"],
//   //     features: [
//   //       "Real-time Data Processing",
//   //       "Custom Report Builder",
//   //       "Advanced Data Visualization",
//   //       "Team Collaboration Tools",
//   //       "Data Export & Sharing",
//   //       "API Integration Suite",
//   //       "Role-based Access Control",
//   //       "Scheduled Reporting"
//   //     ],
//   //     challenges: [
//   //       "Processing large datasets in real-time",
//   //       "Creating intuitive data visualization interfaces",
//   //       "Ensuring data security and compliance"
//   //     ],
//   //     solutions: [
//   //       "Implemented WebSocket connections for real-time updates",
//   //       "Developed custom D3.js visualization components",
//   //       "Built comprehensive audit logging and encryption"
//   //     ],
//   //     results: [
//   //       { metric: "200+", description: "Business clients using the platform" },
//   //       { metric: "87%", description: "Reduction in manual reporting time" },
//   //       { metric: "2.5M", description: "Data points processed daily" },
//   //       { metric: "4.9/5", description: "Customer satisfaction rating" }
//   //     ],
//   //     liveUrl: "https://analyticspro.com",
//   //     githubUrl: "https://github.com/analyticspro",
//   //     caseStudyUrl: "/case-studies/analyticspro",
//   //     stats: { 
//   //       duration: "5 months", 
//   //       team: "6 professionals", 
//   //       clients: "200+ businesses",
//   //       budget: "$120K",
//   //       launchDate: "2023-06-20"
//   //     },
//   //     logo: "📊",
//   //     gallery: [
//   //       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
//   //     ],
//   //     testimonials: [
//   //       {
//   //         text: "The AnalyticsPro dashboard has revolutionized how we understand our business metrics. The real-time insights have helped us optimize operations and increase profitability.",
//   //         author: "Michael Chen",
//   //         role: "CTO, Tech Solutions Inc.",
//   //         avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 3,
//   //     title: "HealthConnect Portal",
//   //     category: "portal",
//   //     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop",
//   //     coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop",
//   //     description: "Comprehensive healthcare management platform connecting patients and providers",
//   //     fullDescription: "HealthConnect is a telemedicine platform that bridges the gap between patients and healthcare providers. The system includes appointment scheduling, video consultations, electronic medical records, and prescription management in a secure, HIPAA-compliant environment.",
//   //     technologies: ["Vue.js", "Python", "Firebase", "Twilio", "Stripe", "HL7 FHIR", "WebRTC", "Redis"],
//   //     features: [
//   //       "Telemedicine Video Consultations",
//   //       "Electronic Health Records",
//   //       "Appointment Scheduling",
//   //       "Prescription Management",
//   //       "Billing & Insurance Integration",
//   //       "Patient Portal",
//   //       "Provider Dashboard",
//   //       "Mobile Applications"
//   //     ],
//   //     challenges: [
//   //       "Ensuring HIPAA compliance and data security",
//   //       "Synchronizing real-time video consultations",
//   //       "Integrating with legacy healthcare systems"
//   //     ],
//   //     solutions: [
//   //       "Implemented end-to-end encryption and audit trails",
//   //       "Built custom WebRTC implementation for reliable video",
//   //       "Developed HL7 FHIR integration adapters"
//   //     ],
//   //     results: [
//   //       { metric: "100+", description: "Healthcare clinics onboarded" },
//   //       { metric: "30%", description: "Reduction in administrative costs" },
//   //       { metric: "95%", description: "Patient satisfaction rate" },
//   //       { metric: "40%", description: "Faster appointment scheduling" }
//   //     ],
//   //     liveUrl: "https://healthconnect.com",
//   //     githubUrl: "https://github.com/healthconnect",
//   //     caseStudyUrl: "/case-studies/healthconnect",
//   //     stats: { 
//   //       duration: "8 months", 
//   //       team: "10 professionals", 
//   //       clients: "100+ clinics",
//   //       budget: "$200K",
//   //       launchDate: "2023-01-10"
//   //     },
//   //     logo: "🏥",
//   //     gallery: [
//   //       "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
//   //     ],
//   //     testimonials: [
//   //       {
//   //         text: "HealthConnect has transformed our practice. The seamless integration of telemedicine with our existing workflows has improved patient care and operational efficiency.",
//   //         author: "Dr. Emily Rodriguez",
//   //         role: "Medical Director, Community Health",
//   //         avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 4,
//   //     title: "TaskFlow SaaS",
//   //     category: "saas",
//   //     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
//   //     coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
//   //     description: "Comprehensive project management solution for modern teams",
//   //     fullDescription: "TaskFlow is a feature-rich project management SaaS that helps teams collaborate, track progress, and deliver projects efficiently. The platform combines task management, team communication, time tracking, and performance analytics in one intuitive interface.",
//   //     technologies: ["React", "NestJS", "Redis", "Socket.io", "Docker", "Kubernetes", "PostgreSQL", "Jest"],
//   //     features: [
//   //       "Task & Project Management",
//   //       "Real-time Team Collaboration",
//   //       "Time Tracking & Reporting",
//   //       "Resource Allocation",
//   //       "Gantt Charts & Timelines",
//   //       "Integration Marketplace",
//   //       "Mobile Applications",
//   //       "Advanced Analytics"
//   //     ],
//   //     challenges: [
//   //       "Managing real-time updates across multiple clients",
//   //       "Scaling to support large enterprise teams",
//   //       "Providing offline functionality for mobile apps"
//   //     ],
//   //     solutions: [
//   //       "Implemented operational transforms for real-time sync",
//   //       "Built microservices architecture with auto-scaling",
//   //       "Developed service workers for offline functionality"
//   //     ],
//   //     results: [
//   //       { metric: "500+", description: "Teams using the platform" },
//   //       { metric: "35%", description: "Increase in team productivity" },
//   //       { metric: "99.95%", description: "Platform uptime" },
//   //       { metric: "4.8/5", description: "User rating on app stores" }
//   //     ],
//   //     liveUrl: "https://taskflow.com",
//   //     githubUrl: "https://github.com/taskflow",
//   //     caseStudyUrl: "/case-studies/taskflow",
//   //     stats: { 
//   //       duration: "7 months", 
//   //       team: "9 professionals", 
//   //       clients: "500+ teams",
//   //       budget: "$180K",
//   //       launchDate: "2023-04-05"
//   //     },
//   //     logo: "✅",
//   //     gallery: [
//   //       "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
//   //     ],
//   //     testimonials: [
//   //       {
//   //         text: "TaskFlow has been a game-changer for our distributed teams. The real-time collaboration features and intuitive interface have significantly improved our project delivery times.",
//   //         author: "David Thompson",
//   //         role: "Project Director, Global Consulting",
//   //         avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     id: 5,
//   //     title: "EduLearn Platform",
//   //     category: "portal",
//   //     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop",
//   //     coverImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=600&fit=crop",
//   //     description: "Next-generation online learning environment for educational institutions",
//   //     fullDescription: "EduLearn is a comprehensive learning management system that provides educational institutions with tools for course creation, student engagement, and performance tracking. The platform supports blended learning environments with interactive content, assessments, and progress analytics.",
//   //     technologies: ["Angular", "Java", "MySQL", "Cloudinary", "WebRTC", "Spring Boot", "Hibernate", "AWS"],
//   //     features: [
//   //       "Course Management System",
//   //       "Interactive Video Lessons",
//   //       "Assessment & Grading Tools",
//   //       "Student Progress Analytics",
//   //       "Parent & Teacher Portals",
//   //       "Gamification Elements",
//   //       "Mobile Learning Applications",
//   //       "LMS Integration"
//   //     ],
//   //     challenges: [
//   //       "Supporting diverse learning content formats",
//   //       "Scaling for large educational institutions",
//   //       "Ensuring accessibility compliance"
//   //     ],
//   //     solutions: [
//   //       "Built flexible content management system",
//   //       "Implemented cloud-native architecture",
//   //       "Developed WCAG 2.1 compliant interfaces"
//   //     ],
//   //     results: [
//   //       { metric: "10K+", description: "Active students on platform" },
//   //       { metric: "28%", description: "Improvement in student engagement" },
//   //       { metric: "92%", description: "Teacher satisfaction rate" },
//   //       { metric: "3x", description: "Faster course creation" }
//   //     ],
//   //     liveUrl: "https://edulearn.com",
//   //     githubUrl: "https://github.com/edulearn",
//   //     caseStudyUrl: "/case-studies/edulearn",
//   //     stats: { 
//   //       duration: "9 months", 
//   //       team: "11 professionals", 
//   //       clients: "10K+ students",
//   //       budget: "$220K",
//   //       launchDate: "2023-02-28"
//   //     },
//   //     logo: "🎓",
//   //     gallery: [
//   //       "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
//   //       "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop"
//   //     ],
//   //     testimonials: [
//   //       {
//   //         text: "EduLearn has transformed our distance learning programs. The platform's intuitive design and comprehensive features have made online education accessible and effective for all our students.",
//   //         author: "Dr. Lisa Wang",
//   //         role: "Dean of Education, University",
//   //         avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
//   //       }
//   //     ]
//   //   }
//   // ];
// const webProjects = [
//     {
//       id: 1,
//       title: "FoodieX - Pindi Chaap Junction",
//       category: "webapp",
//       image: "/WhatsApp Image 2025-08-23 at 22.41.13_2fd089e7.jpg",
//       coverImage: "/Screenshot 2025-08-24 000817.png",
//       description: "A comprehensive restaurant discovery and food delivery platform",
//       fullDescription: "FoodieX is a modern restaurant discovery platform that helps users find the best dining experiences in their area. The platform features real-time menu updates, table reservations, and food delivery integration with a seamless user experience.",
//       technologies: ["React", "Next.js", "Node.js","Tailwind CSS"],
//       features: [
//         "Restaurant Search & Filtering",
//         "Real-time Menu Updates", 
//         "Table Reservation System",
//         "Food Delivery Integration",
//         "User Reviews & Ratings",
//         "Mobile-First Responsive Design",
//         "SEO Optimized Architecture",
//       ],
//       challenges: [
//         "Integrating multiple restaurant APIs with consistent data",
//         "Handling real-time reservation updates",
//         "Managing delivery logistics and tracking"
//       ],
//       solutions: [
//         "Developed a unified API layer for restaurant data integration",
//         "Implemented WebSocket connections for real-time updates",
//         "Built a custom delivery tracking system with map integration"
//       ],
//       results: [
//         { metric: "4.8/5", description: "User rating on app stores" },
//         { metric: "25%", description: "Increase in restaurant bookings" },
//         { metric: "2.5s", description: "Average page load time" }
//       ],
//       liveUrl: "https://foodiex-final.vercel.app/",
//       stats: { 
//         duration: "5 months", 
//         team: "6 professionals", 
//         clients: "200+ restaurants",
//         budget: "₹9,999",
       
//       },
//       logo: "🍕",
//       gallery: [
//         "/Screenshot 2025-08-24 001034.png",
//         "/Screenshot 2025-08-24 001049.png",
//         "/Screenshot 2025-08-24 001216.png",
//         "/Screenshot 2025-08-24 001018.png"
//       ],
//    testimonials: [
//   {
//     text: "FoodieX has completely changed the way customers find our restaurant. The platform is easy to use and has noticeably boosted our footfall and orders.",
//     author: "Chef Rohan",
//     role: "Owner, Spice Delight",
//     avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
//   }
// ]

//     },
//     {
//       id: 2,
//       title: "Ashwamedh NGO Platform",
//       category: "webapp",
//       image: "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg",
//       coverImage: "/Screenshot 2025-08-24 002838.png",
//       description: "Comprehensive platform for NGO management and donor engagement",
//       fullDescription: "Ashwamedh is a dedicated platform for non-profit organizations to manage their operations, engage with donors, and showcase their impact. The system includes donation processing, volunteer management, and campaign tracking features.",
//       technologies: ["React", "Firebase", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
//       features: [
//         "Donation Management System",
//         "Volunteer Recruitment Portal",
//         "Campaign Tracking & Analytics",
//         "Event Management",
//         "Impact Reporting",
//         "Recurring Donations",
//         "Multi-language Support",
//         "Mobile Responsive Design"
//       ],
//       challenges: [
//         "Creating a seamless donation experience",
//         "Managing volunteer data securely",
//         "Demonstrating impact transparency to donors"
//       ],
//       solutions: [
//         "Implemented one-click donation with multiple payment options",
//         "Built a secure volunteer database with role-based access",
//         "Developed visual impact dashboards with real-time metrics"
//       ],
//       results: [
//         { metric: "40%", description: "Increase in recurring donations" },
//         { metric: "300+", description: "Volunteers registered" },
//         { metric: "₹45,000+", description: "Funds raised through platform" },
//         { metric: "95%", description: "Donor satisfaction rate" }
//       ],
//       liveUrl: "http://ashwamedh-ngo.vercel.app",
    
//       stats: { 
//         duration: "4 months", 
//         team: "5 professionals", 
//         budget: "₹15,000",
       
//       },
//       logo: "🤝",
//       gallery: [
//         "/Screenshot 2025-08-24 002849.png",
//         "/Screenshot 2025-08-24 002902.png",
//         "/Screenshot 2025-08-24 003136.png",
//         "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg"

//       ],
//      testimonials: [
//   {
//     text: "The Ashwamedh platform has transformed the way we manage donations and connect with our supporters. The detailed impact reports have helped us build trust and transparency with our donors.",
//     author: "Rohit Verma",
//     role: "Director, Community NGO",
//     avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
//   }
// ]

//     },
//     {
//       id: 3,
//       title: "Adiyogi Foundation Website",
//       category: "webapp",
//       image: "/WhatsApp Image 2025-08-23 at 23.06.39_52247e23.jpg",
//       coverImage: "/WhatsApp Image 2025-08-23 at 22.46.06_a5864731.jpg",
//       description: "Modern website for spiritual foundation with event management",
//       fullDescription: "A comprehensive website for the Adiyogi Foundation featuring program information, event registration, meditation resources, and community engagement tools. The platform serves as a digital hub for the foundation's global community.",
//       technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "WooCommerce"],
//       features: [
//         "Event Management System",
//         "Program Registration",
//         "E-commerce for Merchandise",
//         "Meditation Resources Library",
//         "Blog & Content Management",
//         "Multi-language Support",
//         "Donation Processing",
//         "Community Forum"
//       ],
//       challenges: [
//         "Creating a serene digital experience reflecting spiritual values",
//         "Managing event registrations for large-scale programs",
//         "Integrating e-commerce for spiritual merchandise"
//       ],
//       solutions: [
//         "Designed a minimalist interface with calming aesthetics",
//         "Built a scalable event management system with waitlist features",
//         "Implemented seamless checkout for merchandise and donations"
//       ],
//       results: [
//         { metric: "10K+", description: "Monthly visitors" },
//         { metric: "65%", description: "Increase in program registrations" },
//         { metric: "5/5", description: "User experience rating" },
//         { metric: "40%", description: "Growth in online merchandise sales" }
//       ],
//       liveUrl: "http://www.adiyogifoundation.org.in",
   
//       stats: { 
//         duration: "3 months", 
//         team: "4 professionals", 
//         clients: "Global community",
//         budget: "₹13,000",
       
//       },
//       logo: "🧘",
//       gallery: [
//         "/Screenshot 2025-08-24 003428.png",
//         "/Screenshot 2025-08-24 003440.png",
//         "/Screenshot 2025-08-24 003459.png",
//         "/Screenshot 2025-08-24 003507.png"
//       ],
//      testimonials: [
//   {
//     text: "The website beautifully captures the essence of our foundation and has become an invaluable resource for our community. The event management tools have simplified our program registrations and improved participation.",
//     author: "Ravi Kumar",
//     role: "Program Director, Adiyogi Foundation",
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
//   }
// ]

//     },
//     {
//       id: 4,
//       title: "Laity Spiritual Community",
//       category: "webapp",
//       image: "/WhatsApp Image 2025-08-23 at 22.51.51_e0180228.jpg",
//       coverImage: "/Screenshot 2025-08-24 003853.png",
//       description: "Online community platform for spiritual seekers",
//       fullDescription: "Laity is a digital platform connecting spiritual seekers with resources, teachers, and like-minded community members. The platform features course offerings, meditation tools, discussion forums, and live event streaming capabilities.",
//       technologies: ["React", "Firebase", "Node.js", "MongoDB", "WebRTC", "Stripe"],
//       features: [
//         "Community Discussion Forums",
//         "Live Event Streaming",
//         "Course Management System",
//         "Meditation Timer & Tracker",
//         "User Profiles & Connections",
//         "Resource Library",
//         "Subscription Management",
//         "Mobile App Integration"
//       ],
//       challenges: [
//         "Creating meaningful connections in a digital space",
//         "Managing live streaming for events with large audiences",
//         "Developing engaging content delivery systems"
//       ],
//       solutions: [
//         "Built community features with interest-based matching",
//         "Implemented scalable live streaming with CDN integration",
//         "Created interactive learning paths with progress tracking"
//       ],
//       results: [
//         { metric: "15K+", description: "Active community members" },
//         { metric: "80%", description: "User retention rate" },
//         { metric: "200+", description: "Hours of content available" },
//         { metric: "4.9/5", description: "Average user rating" }
//       ],
//       liveUrl: "http://www.laity.su",
     
//       stats: { 
//         duration: "6 months", 
//         team: "7 professionals", 
//         clients: "15K+ users",
//         budget: "₹10,000",
       
//       },
//       logo: "✨",
//       gallery: [
//         "/Screenshot 2025-08-24 003902.png",
//         "/Screenshot 2025-08-24 003902.png",
//         "/Screenshot 2025-08-24 003923.png",
//         "/Screenshot 2025-08-24 003853.png"
//       ],
//      testimonials: [
//   {
//     text: "Laity has built a wonderful platform for our community to connect, learn, and grow spiritually. Its user-friendly design makes spiritual practice accessible to everyone in India.",
//     author: "Sandeep Mehta",
//     role: "Community Manager, Laity",
//     avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
//   }
// ]

//     },
//     {
//       id: 5,
//       title: "Fork App - Food Delivery Mobile App",
//       category: "mobile",
//       image: "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg",
//       coverImage: "/WhatsApp Image 2025-08-23 at 22.57.21_6525abae.jpg",
//       description: "Mobile application for food delivery with real-time tracking",
//       fullDescription: "Fork App is a feature-rich mobile application that connects users with local restaurants for food delivery. The app includes real-time order tracking, personalized recommendations, and a seamless checkout experience designed for mobile users.",
//       technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
//       features: [
//         "Real-time Order Tracking",
//         "Personalized Restaurant Recommendations",
//         "Multiple Payment Options",
//         "Order History & Reordering",
//         "Push Notifications",
//         "Rating & Review System",
//         "Delivery Driver Management",
//         "Loyalty Program Integration"
//       ],
//       challenges: [
//         "Creating smooth real-time tracking experience",
//         "Managing delivery logistics efficiently",
//         "Providing personalized recommendations"
//       ],
//       solutions: [
//         "Integrated Google Maps API for precise tracking",
//         "Developed algorithm for optimal delivery routing",
//         "Implemented machine learning for personalized suggestions"
//       ],
//       results: [
//         { metric: "4.8/5", description: "App store rating" },
//         { metric: "50K+", description: "App downloads" },
//         { metric: "35%", description: "Repeat customer rate" },
//         { metric: "<2s", description: "Average app response time" }
//       ],
//       liveUrl: "https://fork-app-website.netlify.app/",
      
//       stats: { 
//         duration: "7 months", 
//         team: "8 professionals", 
//         clients: "100+ restaurant partners",
//         budget: "₹18,000",
//       },
//       logo: "🍴",
//       gallery: [
//         "/WhatsApp Image 2025-08-23 at 22.57.20_1fa7b39d.jpg",
//         "/WhatsApp Image 2025-08-23 at 22.57.21_6525abae.jpg",
//         "/WhatsApp Image 2025-08-23 at 22.57.21_be47bd8e.jpg",
//         "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg",

//       ],
//      testimonials: [
//   {
//     text: "The Fork App has transformed our food delivery business. The real-time tracking feature keeps our customers informed, and the easy-to-use interface makes ordering effortless.",
//     author: "Rajesh Sharma",
//     role: "CEO, Swiggy Express",
//     avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
//   }
// ]

//     }
//   ];
//   const filteredProjects = selectedCategory === 'all' 
//     ? webProjects 
//     : webProjects.filter(project => project.category === selectedCategory);

//   const openProjectModal = (projectId) => {
//     setCurrentProject(projectId - 1);
//     setIsModalOpen(true);
//     setActiveTab('overview');
//   };

//   const nextProject = () => {
//     setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
//   };

//   const prevProject = () => {
//     setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
//   };

//   const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
//     if (!project) return null;

//     return (
//       <div className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative">
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300"
//           >
//             <X className="w-6 h-6 text-slate-700" />
//           </button>

//           {/* Navigation Arrows */}
//           <button
//             onClick={onPrev}
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300"
//           >
//             <ChevronLeft className="w-6 h-6 text-slate-700" />
//           </button>
//           <button
//             onClick={onNext}
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 w-12 h-12 bg-white/90 rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors duration-300"
//           >
//             <ChevronRight className="w-6 h-6 text-slate-700" />
//           </button>

//           {/* Project Header */}
//           <div className="relative h-80 overflow-hidden">
//             <img
//               src={project.coverImage}
//               alt={project.title}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//             <div className="absolute bottom-6 left-6 text-white">
//               <div className="flex items-center mb-4">
//                 <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-3xl mr-4">
//                   {project.logo}
//                 </div>
//                 <div>
//                   <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
//                   <div className="flex items-center space-x-4">
//                     <span className="px-3 py-1 bg-teal-500/90 text-white text-sm rounded-full">
//                       {categories.find(cat => cat.id === project.category)?.name}
//                     </span>
//                     <span className="flex items-center text-sm">
//                       <Calendar className="w-4 h-4 mr-1" />
//                       {new Date(project.stats.launchDate).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="border-b border-slate-200">
//             <div className="flex space-x-8 px-8">
//               {['overview', 'features', 'technology', 'results', 'gallery'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`py-4 px-1 font-medium text-sm border-b-2 transition-colors duration-300 ${
//                     activeTab === tab
//                       ? 'border-teal-500 text-teal-600'
//                       : 'border-transparent text-slate-500 hover:text-slate-700'
//                   }`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Tab Content */}
//           <div className="p-8">
//             {activeTab === 'overview' && (
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
//                   <p className="text-slate-600 mb-6 leading-relaxed">{project.fullDescription}</p>
                  
//                   <div className="grid grid-cols-2 gap-4 mb-6">
//                     <div className="bg-slate-50 rounded-lg p-4">
//                       <div className="text-sm text-slate-500 mb-1">Duration</div>
//                       <div className="font-semibold">{project.stats.duration}</div>
//                     </div>
//                     <div className="bg-slate-50 rounded-lg p-4">
//                       <div className="text-sm text-slate-500 mb-1">Team Size</div>
//                       <div className="font-semibold">{project.stats.team}</div>
//                     </div>
//                     <div className="bg-slate-50 rounded-lg p-4">
//                       <div className="text-sm text-slate-500 mb-1">Budget</div>
//                       <div className="font-semibold">{project.stats.budget}</div>
//                     </div>
//                     <div className="bg-slate-50 rounded-lg p-4">
//                       <div className="text-sm text-slate-500 mb-1">Users</div>
//                       <div className="font-semibold">{project.stats.clients}</div>
//                     </div>
//                   </div>

//                   <div className="flex space-x-4">
//                     <a
//                       href={project.liveUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg hover:from-teal-600 hover:to-green-600 transition-all duration-300"
//                     >
//                       <ExternalLink className="w-4 h-4 mr-2" />
//                       Live Demo
//                     </a>
//                     <a
//                       href={project.caseStudyUrl}
//                       className="flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:border-teal-400 hover:text-teal-600 transition-all duration-300"
//                     >
//                       <FileText className="w-4 h-4 mr-2" />
//                       Full Case Study
//                     </a>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
//                   <div className="space-y-3">
//                     {project.results.map((result, index) => (
//                       <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg">
//                         <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-lg mr-4">
//                           {result.metric}
//                         </div>
//                         <div className="text-sm text-slate-600">{result.description}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'features' && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Key Features</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {project.features.map((feature, index) => (
//                     <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg">
//                       <CheckCircle className="w-5 h-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
//                       <span className="text-slate-700">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'technology' && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h4 className="text-lg font-semibold mb-4">Frontend</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.slice(0, 4).map((tech) => (
//                         <span key={tech} className="px-3 py-2 bg-teal-100 text-teal-700 rounded-lg text-sm">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="text-lg font-semibold mb-4">Backend & Infrastructure</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.technologies.slice(4).map((tech) => (
//                         <span key={tech} className="px-3 py-2 bg-green-100 text-green-700 rounded-lg text-sm">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === 'results' && (
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-6">Project Results</h3>
//                   <div className="space-y-6">
//                     {project.results.map((result, index) => (
//                       <div key={index} className="p-6 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl">
//                         <div className="text-3xl font-bold text-teal-600 mb-2">{result.metric}</div>
//                         <div className="text-slate-600">{result.description}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold mb-6">Client Testimonial</h4>
//                   {project.testimonials.map((testimonial, index) => (
//                     <div key={index} className="bg-white border border-slate-200 rounded-xl p-6">
//                       <div className="flex items-center mb-4">
//                         <img
//                           src={testimonial.avatar}
//                           alt={testimonial.author}
//                           className="w-12 h-12 rounded-full mr-4"
//                         />
//                         <div>
//                           <div className="font-semibold">{testimonial.author}</div>
//                           <div className="text-sm text-slate-500">{testimonial.role}</div>
//                         </div>
//                       </div>
//                       <p className="text-slate-600 italic">"{testimonial.text}"</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {activeTab === 'gallery' && (
//               <div>
//                 <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {project.gallery.map((image, index) => (
//                     <div key={index} className="rounded-xl overflow-hidden shadow-lg">
//                       <img
//                         src={image}
//                         alt={`${project.title} screenshot ${index + 1}`}
//                         className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div>
//       <Header />
//       <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
//         {/* Header */}
//         <section className="py-20 px-5 sm:px-6 lg:px-8" data-animate>
//           <div className="max-w-7xl mx-auto text-center">
//             <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-sm font-medium mb-6 shadow-sm transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//               <Code className="w-4 h-4 mr-2 text-teal-600" />
//               Our Portfolio
//             </div>
//             <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
//               Web Development <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Projects</span>
//             </h1>
//             <p className={`text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
//               Discover our comprehensive web development solutions that drive business growth and digital transformation
//             </p>
//           </div>
//         </section>

//         {/* Category Filters */}
//         <section className="px-5 sm:px-6 lg:px-8 mb-16">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex flex-wrap justify-center gap-4">
//               {categories.map((category, index) => (
//                 <button
//                   key={category.id}
//                   onClick={() => setSelectedCategory(category.id)}
//                   className={`group relative flex items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-500 overflow-hidden ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${
//                     selectedCategory === category.id
//                       ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
//                       : 'bg-white/90 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200/50'
//                   }`}
//                   style={{ transitionDelay: `${300 + index * 100}ms` }}
//                 >
//                   {/* Animated background for active state */}
//                   {selectedCategory === category.id && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   )}
                  
//                   <span className="relative z-10 mr-2">{category.icon}</span>
//                   <span className="relative z-10">{category.name}</span>
//                   <span className="relative z-10 ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
//                     {category.count}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Grid */}
//         <section className="px-5 sm:px-6 lg:px-8 mb-20">
//           <div className="max-w-7xl mx-auto">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project, index) => (
//                 <div
//                   key={project.id}
//                   className={`group relative bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100/60 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
//                   style={{ 
//                     transitionDelay: `${400 + index * 100}ms`,
//                     transform: 'translateZ(0)' // Hardware acceleration
//                   }}
//                 >
//                   {/* Gradient border effect on hover */}
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
//                   {/* Project Image Container */}
//                   <div className="relative h-56 overflow-hidden">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
                    
//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
//                     {/* Project Logo with shine effect */}
//                     <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
//                       <div className="relative">
//                         {project.logo}
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                       </div>
//                     </div>

//                     {/* Category Badge */}
//                     <div className="absolute top-4 right-4">
//                       <span className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs font-semibold rounded-full shadow-lg group-hover:from-teal-600 group-hover:to-green-600 transition-colors duration-300">
//                         {categories.find(cat => cat.id === project.category)?.name}
//                       </span>
//                     </div>

//                     {/* Hover Overlay with action buttons */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-teal-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-3">
//                       <button
//                         onClick={() => openProjectModal(project.id)}
//                         className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex items-center px-4 py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-300"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         View Details
//                       </button>
//                       <a
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center px-4 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300"
//                       >
//                         <ExternalLink className="w-4 h-4 mr-2" />
//                         Live Demo
//                       </a>
//                     </div>

//                     {/* Floating stats badge */}
//                     <div className="absolute bottom-4 left-4">
//                       <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
//                         <div className="flex items-center text-xs text-slate-700">
//                           <Clock className="w-3 h-3 mr-1" />
//                           {project.stats.duration}
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Project Info */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-1">
//                       {project.title}
//                     </h3>
                    
//                     <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
//                       {project.description}
//                     </p>
                    
//                     {/* Technologies with animated hover */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {project.technologies.slice(0, 4).map((tech) => (
//                         <span
//                           key={tech}
//                           className="px-2.5 py-1.5 bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-200/60 group-hover:border-teal-200/60 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                       {project.technologies.length > 4 && (
//                         <span className="px-2.5 py-1.5 bg-slate-100 text-slate-500 text-xs rounded-md border border-slate-200/60">
//                           +{project.technologies.length - 4}
//                         </span>
//                       )}
//                     </div>

//                     {/* Stats with icons */}
//                     <div className="flex items-center justify-between text-sm text-slate-500 pt-3 border-t border-slate-100/60">
//                       <div className="flex items-center group">
//                         <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-2 group-hover:bg-teal-200 transition-colors duration-300">
//                           <Users className="w-3 h-3 text-teal-600" />
//                         </div>
//                         <span>{project.stats.team}</span>
//                       </div>
                      
//                       <div className="flex items-center group">
//                         <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2 group-hover:bg-green-200 transition-colors duration-300">
//                           <Target className="w-3 h-3 text-green-600" />
//                         </div>
//                         <span>{project.stats.clients}</span>
//                       </div>
                      
//                       <div className="flex items-center group">
//                         <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2 group-hover:bg-blue-200 transition-colors duration-300">
//                           <Award className="w-3 h-3 text-blue-600" />
//                         </div>
//                         <span className="text-xs">Success</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Bottom gradient accent */}
//                   <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section ref={statsRef} className="py-16 bg-white/50 backdrop-blur-sm relative overflow-hidden">
//           {/* Animated background elements */}
//           <div className="absolute top-10 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-10 animate-pulse"></div>
//           <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
          
//           <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
//               <p className="text-slate-600 max-w-2xl mx-auto">
//                 Delivering exceptional results across all our web development projects
//               </p>
//             </div>
//             <div className="grid md:grid-cols-4 gap-8">
//               {[
//                 { value: "26+", label: "Projects Completed", color: "teal", icon: <Code className="w-6 h-6" /> },
//                 { value: statsValues.satisfaction, label: "Client Satisfaction", color: "green", icon: <Award className="w-6 h-6" /> },
//                 { value: statsValues.technologies, label: "Technologies Used", color: "blue", icon: <Cpu className="w-6 h-6" /> },
//                 { value: "3K+", label: "Users Served", color: "purple", icon: <Users className="w-6 h-6" /> }
//               ].map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
//                 >
//                   <div className={`w-14 h-14 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-${stat.color}-600`}>
//                     {stat.icon}
//                   </div>
//                   <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
//                   <div className="text-slate-700">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-5 sm:px-6 lg:px-8">
//           <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-teal-500 to-green-500 rounded-2xl p-12 text-white relative overflow-hidden">
//             {/* Animated background elements */}
//             <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
//             <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-20 translate-y-20"></div>
            
//             <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to Start Your Project?</h2>
//             <p className="text-xl mb-8 opacity-90 relative z-10">
//               Let's discuss how we can transform your ideas into a powerful web solution
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
//               <Link to='/contact'>
//                             <button className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg">
//                 Get Free Consultation
//               </button>
//               </Link>
// <Link to='/services'>
//  <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
//                 View Pricing
//               </button>
// </Link>
             
//             </div>
//           </div>
//         </section>

//         {/* Project Modal */}
//         {isModalOpen && (
//           <ProjectModal
//             project={filteredProjects[currentProject]}
//             onClose={() => setIsModalOpen(false)}
//             onNext={nextProject}
//             onPrev={prevProject}
//           />
//         )}
//       </div>
//       <Footer/>
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

// // Add missing icon components
// const ShoppingCart = ({ className }) => (
//   <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//   </svg>
// );

// export default OurWork;


import React, { useEffect, useState, useRef } from 'react';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Eye,
  Code,
  Palette,
  Smartphone,
  Server,
  Zap,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Target,
  BarChart3,
  CheckCircle,
  Play,
  Shield,
  Database,
  Cpu,
  Globe,
  MessageCircle,
  Video,
  FileText,
  Brain
} from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const OurWork = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentProject, setCurrentProject] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState({});
  const [statsValues, setStatsValues] = useState({
    projects: 0,
    satisfaction: 0,
    technologies: 0,
    users: 0
  });
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024);
  const statsRef = useRef(null);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'all', name: 'Some Projects', icon: <Zap className="w-4 h-4" />, count: 5 },
  ];

  useEffect(() => {
    // Set content as loaded after 100ms to trigger animations
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

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

  // Stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate stats counting
          animateCounter(50, 50, 2000, 'projects');
          animateCounter(0, 98, 2000, 'satisfaction');
          animateCounter(0, 25, 2000, 'technologies');
          animateCounter(0, 3, 2500, 'users');
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounter = (start, end, duration, key) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      
      setStatsValues(prev => ({
        ...prev,
        [key]: key === 'users' ? value + 'M+' : value + (key === 'satisfaction' ? '%' : '+')
      }));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  const webProjects = [
    {
      id: 1,
      title: "FoodieX - Pindi Chaap Junction",
      category: "webapp",
      image: "/WhatsApp Image 2025-08-23 at 22.41.13_2fd089e7.jpg",
      coverImage: "/Screenshot 2025-08-24 000817.png",
      description: "A comprehensive restaurant discovery and food delivery platform",
      fullDescription: "FoodieX is a modern restaurant discovery platform that helps users find the best dining experiences in their area. The platform features real-time menu updates, table reservations, and food delivery integration with a seamless user experience.",
      technologies: ["React", "Next.js", "Node.js","Tailwind CSS"],
      features: [
        "Restaurant Search & Filtering",
        "Real-time Menu Updates", 
        "Table Reservation System",
        "Food Delivery Integration",
        "User Reviews & Ratings",
        "Mobile-First Responsive Design",
        "SEO Optimized Architecture",
      ],
      challenges: [
        "Integrating multiple restaurant APIs with consistent data",
        "Handling real-time reservation updates",
        "Managing delivery logistics and tracking"
      ],
      solutions: [
        "Developed a unified API layer for restaurant data integration",
        "Implemented WebSocket connections for real-time updates",
        "Built a custom delivery tracking system with map integration"
      ],
      results: [
        { metric: "4.8/5", description: "User rating on app stores" },
        { metric: "25%", description: "Increase in restaurant bookings" },
        { metric: "2.5s", description: "Average page load time" }
      ],
      liveUrl: "https://foodiex-final.vercel.app/",
      stats: { 
        duration: "5 months", 
        team: "6 professionals", 
        clients: "200+ restaurants",
        budget: "₹9,999",
      },
      logo: "🍕",
      gallery: [
        "/Screenshot 2025-08-24 001034.png",
        "/Screenshot 2025-08-24 001049.png",
        "/Screenshot 2025-08-24 001216.png",
        "/Screenshot 2025-08-24 001018.png"
      ],
      testimonials: [
        {
          text: "FoodieX has completely changed the way customers find our restaurant. The platform is easy to use and has noticeably boosted our footfall and orders.",
          author: "Chef Rohan",
          role: "Owner, Spice Delight",
          avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 2,
      title: "Ashwamedh NGO Platform",
      category: "webapp",
      image: "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg",
      coverImage: "/Screenshot 2025-08-24 002838.png",
      description: "Comprehensive platform for NGO management and donor engagement",
      fullDescription: "Ashwamedh is a dedicated platform for non-profit organizations to manage their operations, engage with donors, and showcase their impact. The system includes donation processing, volunteer management, and campaign tracking features.",
      technologies: ["React", "Firebase", "Node.js", "MongoDB", "Stripe", "Cloudinary"],
      features: [
        "Donation Management System",
        "Volunteer Recruitment Portal",
        "Campaign Tracking & Analytics",
        "Event Management",
        "Impact Reporting",
        "Recurring Donations",
        "Multi-language Support",
        "Mobile Responsive Design"
      ],
      challenges: [
        "Creating a seamless donation experience",
        "Managing volunteer data securely",
        "Demonstrating impact transparency to donors"
      ],
      solutions: [
        "Implemented one-click donation with multiple payment options",
        "Built a secure volunteer database with role-based access",
        "Developed visual impact dashboards with real-time metrics"
      ],
      results: [
        { metric: "40%", description: "Increase in recurring donations" },
        { metric: "300+", description: "Volunteers registered" },
        { metric: "₹45,000+", description: "Funds raised through platform" },
        { metric: "95%", description: "Donor satisfaction rate" }
      ],
      liveUrl: "http://ashwamedh-ngo.vercel.app",
      stats: { 
        duration: "4 months", 
        team: "5 professionals", 
        budget: "₹15,000",
      },
      logo: "🤝",
      gallery: [
        "/Screenshot 2025-08-24 002849.png",
        "/Screenshot 2025-08-24 002902.png",
        "/Screenshot 2025-08-24 003136.png",
        "/WhatsApp Image 2025-08-23 at 22.43.36_92846333.jpg"
      ],
      testimonials: [
        {
          text: "The Ashwamedh platform has transformed the way we manage donations and connect with our supporters. The detailed impact reports have helped us build trust and transparency with our donors.",
          author: "Rohit Verma",
          role: "Director, Community NGO",
          avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 3,
      title: "Adiyogi Foundation Website",
      category: "webapp",
      image: "/WhatsApp Image 2025-08-23 at 23.06.39_52247e23.jpg",
      coverImage: "/WhatsApp Image 2025-08-23 at 22.46.06_a5864731.jpg",
      description: "Modern website for spiritual foundation with event management",
      fullDescription: "A comprehensive website for the Adiyogi Foundation featuring program information, event registration, meditation resources, and community engagement tools. The platform serves as a digital hub for the foundation's global community.",
      technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "WooCommerce"],
      features: [
        "Event Management System",
        "Program Registration",
        "E-commerce for Merchandise",
        "Meditation Resources Library",
        "Blog & Content Management",
        "Multi-language Support",
        "Donation Processing",
        "Community Forum"
      ],
      challenges: [
        "Creating a serene digital experience reflecting spiritual values",
        "Managing event registrations for large-scale programs",
        "Integrating e-commerce for spiritual merchandise"
      ],
      solutions: [
        "Designed a minimalist interface with calming aesthetics",
        "Built a scalable event management system with waitlist features",
        "Implemented seamless checkout for merchandise and donations"
      ],
      results: [
        { metric: "10K+", description: "Monthly visitors" },
        { metric: "65%", description: "Increase in program registrations" },
        { metric: "5/5", description: "User experience rating" },
        { metric: "40%", description: "Growth in online merchandise sales" }
      ],
      liveUrl: "http://www.adiyogifoundation.org.in",
      stats: { 
        duration: "3 months", 
        team: "4 professionals", 
        clients: "Global community",
        budget: "₹13,000",
      },
      logo: "🧘",
      gallery: [
        "/Screenshot 2025-08-24 003428.png",
        "/Screenshot 2025-08-24 003440.png",
        "/Screenshot 2025-08-24 003459.png",
        "/Screenshot 2025-08-24 003507.png"
      ],
      testimonials: [
        {
          text: "The website beautifully captures the essence of our foundation and has become an invaluable resource for our community. The event management tools have simplified our program registrations and improved participation.",
          author: "Ravi Kumar",
          role: "Program Director, Adiyogi Foundation",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 4,
      title: "Laity Spiritual Community",
      category: "webapp",
      image: "/WhatsApp Image 2025-08-23 at 22.51.51_e0180228.jpg",
      coverImage: "/Screenshot 2025-08-24 003853.png",
      description: "Online community platform for spiritual seekers",
      fullDescription: "Laity is a digital platform connecting spiritual seekers with resources, teachers, and like-minded community members. The platform features course offerings, meditation tools, discussion forums, and live event streaming capabilities.",
      technologies: ["React", "Firebase", "Node.js", "MongoDB", "WebRTC", "Stripe"],
      features: [
        "Community Discussion Forums",
        "Live Event Streaming",
        "Course Management System",
        "Meditation Timer & Tracker",
        "User Profiles & Connections",
        "Resource Library",
        "Subscription Management",
        "Mobile App Integration"
      ],
      challenges: [
        "Creating meaningful connections in a digital space",
        "Managing live streaming for events with large audiences",
        "Developing engaging content delivery systems"
      ],
      solutions: [
        "Built community features with interest-based matching",
        "Implemented scalable live streaming with CDN integration",
        "Created interactive learning paths with progress tracking"
      ],
      results: [
        { metric: "15K+", description: "Active community members" },
        { metric: "80%", description: "User retention rate" },
        { metric: "200+", description: "Hours of content available" },
        { metric: "4.9/5", description: "Average user rating" }
      ],
      liveUrl: "http://www.laity.su",
      stats: { 
        duration: "6 months", 
        team: "7 professionals", 
        clients: "15K+ users",
        budget: "₹10,000",
      },
      logo: "✨",
      gallery: [
        "/Screenshot 2025-08-24 003902.png",
        "/Screenshot 2025-08-24 003902.png",
        "/Screenshot 2025-08-24 003923.png",
        "/Screenshot 2025-08-24 003853.png"
      ],
      testimonials: [
        {
          text: "Laity has built a wonderful platform for our community to connect, learn, and grow spiritually. Its user-friendly design makes spiritual practice accessible to everyone in India.",
          author: "Sandeep Mehta",
          role: "Community Manager, Laity",
          avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
        }
      ]
    },
    {
      id: 5,
      title: "Fork App - Food Delivery Mobile App",
      category: "mobile",
      image: "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg",
      coverImage: "/WhatsApp Image 2025-08-23 at 22.57.21_6525abae.jpg",
      description: "Mobile application for food delivery with real-time tracking",
      fullDescription: "Fork App is a feature-rich mobile application that connects users with local restaurants for food delivery. The app includes real-time order tracking, personalized recommendations, and a seamless checkout experience designed for mobile users.",
      technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Google Maps API", "Stripe"],
      features: [
        "Real-time Order Tracking",
        "Personalized Restaurant Recommendations",
        "Multiple Payment Options",
        "Order History & Reordering",
        "Push Notifications",
        "Rating & Review System",
        "Delivery Driver Management",
        "Loyalty Program Integration"
      ],
      challenges: [
        "Creating smooth real-time tracking experience",
        "Managing delivery logistics efficiently",
        "Providing personalized recommendations"
      ],
      solutions: [
        "Integrated Google Maps API for precise tracking",
        "Developed algorithm for optimal delivery routing",
        "Implemented machine learning for personalized suggestions"
      ],
      results: [
        { metric: "4.8/5", description: "App store rating" },
        { metric: "50K+", description: "App downloads" },
        { metric: "35%", description: "Repeat customer rate" },
        { metric: "<2s", description: "Average app response time" }
      ],
      liveUrl: "https://fork-app-website.netlify.app/",
      stats: { 
        duration: "7 months", 
        team: "8 professionals", 
        clients: "100+ restaurant partners",
        budget: "₹18,000",
      },
      logo: "🍴",
      gallery: [
        "/WhatsApp Image 2025-08-23 at 22.57.20_1fa7b39d.jpg",
        "/WhatsApp Image 2025-08-23 at 22.57.21_6525abae.jpg",
        "/WhatsApp Image 2025-08-23 at 22.57.21_be47bd8e.jpg",
        "/WhatsApp Image 2025-08-23 at 22.57.20_593e5f89.jpg",
      ],
      testimonials: [
        {
          text: "The Fork App has transformed our food delivery business. The real-time tracking feature keeps our customers informed, and the easy-to-use interface makes ordering effortless.",
          author: "Rajesh Sharma",
          role: "CEO, Swiggy Express",
          avatar: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=150&h=150&fit=crop&crop=face"
        }
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? webProjects 
    : webProjects.filter(project => project.category === selectedCategory);

  const openProjectModal = (projectId) => {
    setCurrentProject(projectId - 1);
    setIsModalOpen(true);
    setActiveTab('overview');
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
    if (!project) return null;

  return (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
    <div className="bg-white rounded-lg md:rounded-xl max-w-full w-full max-h-[98vh] overflow-y-auto relative shadow-2xl" style={{ maxWidth: '1200px' }}>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 md:top-3 md:right-3 z-50 w-7 h-7 md:w-8 md:h-8 bg-white/80 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors duration-200"
        aria-label="Close modal"
      >
        <X className="w-3 h-3 md:w-4 md:h-4 text-slate-600" />
      </button>

      {/* Navigation Arrows - Only show on larger screens or if touch device */}
      <button
        onClick={onPrev}
        className="hidden sm:flex absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 z-40 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full shadow-md items-center justify-center hover:bg-white transition-colors duration-200"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
      </button>
      <button
        onClick={onNext}
        className="hidden sm:flex absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 z-40 w-8 h-8 md:w-10 md:h-10 bg-white/80 rounded-full shadow-md items-center justify-center hover:bg-white transition-colors duration-200"
        aria-label="Next project"
      >
        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
      </button>

      {/* Project Header */}
      <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
          <div className="flex items-center mb-1 md:mb-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-lg md:text-xl mr-2 md:mr-3">
              {project.logo}
            </div>
            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-0.5 md:mb-1">{project.title}</h2>
              <div className="flex flex-wrap items-center gap-1 md:gap-2">
                <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-teal-500/90 text-white text-xs rounded-full">
                  {categories.find(cat => cat.id === project.category)?.name}
                </span>
                <span className="flex items-center text-xs">
                  <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1" />
                  {project.stats.launchDate || "2023"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs - Scrollable on mobile */}
      <div className="border-b border-slate-200 overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 md:space-x-6 px-4 min-w-max">
          {['overview', 'features', 'technology', 'results', 'gallery'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 md:py-3.5 px-1 font-medium text-xs md:text-sm border-b-2 transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 md:p-5 lg:p-6">
        {activeTab === 'overview' && (
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Project Overview</h3>
              <p className="text-slate-600 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{project.fullDescription}</p>
              
              <div className="grid grid-cols-2 gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="bg-slate-50 rounded-lg p-2 md:p-3">
                  <div className="text-xs text-slate-500 mb-1">Duration</div>
                  <div className="font-semibold text-sm">{project.stats.duration}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 md:p-3">
                  <div className="text-xs text-slate-500 mb-1">Team Size</div>
                  <div className="font-semibold text-sm">{project.stats.team}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 md:p-3">
                  <div className="text-xs text-slate-500 mb-1">Budget</div>
                  <div className="font-semibold text-sm">{project.stats.budget}</div>
                </div>
                <div className="bg-slate-50 rounded-lg p-2 md:p-3">
                  <div className="text-xs text-slate-500 mb-1">Users</div>
                  <div className="font-semibold text-sm">{project.stats.clients}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-lg hover:from-teal-600 hover:to-green-600 transition-all duration-200 text-xs md:text-sm"
                >
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                  Live Demo
                </a>
                {project.caseStudyUrl && (
                  <a
                    href={project.caseStudyUrl}
                    className="flex items-center px-3 py-1.5 md:px-4 md:py-2 border border-slate-300 text-slate-700 rounded-lg hover:border-teal-400 hover:text-teal-600 transition-all duration-200 text-xs md:text-sm"
                  >
                    <FileText className="w-3 h-3 md:w-3.5 md:h-3.5 mr-1 md:mr-1.5" />
                    Full Case Study
                  </a>
                )}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Key Achievements</h4>
              <div className="space-y-2 md:space-y-2.5">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-center p-2.5 md:p-3 bg-slate-50 rounded-lg">
                    <div className="w-8 h-8 md:w-9 md:h-9 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 font-bold text-sm md:text-base mr-2 md:mr-3">
                      {result.metric}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-2 md:gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start p-2.5 md:p-3 bg-slate-50 rounded-lg">
                  <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-teal-500 mr-2 md:mr-2.5 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Technology Stack</h3>
            <div className="grid md:grid-cols-2 gap-3 md:gap-4">
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 md:px-2.5 md:py-1 bg-teal-100 text-teal-700 rounded-lg text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 md:mt-0">
                <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Backend & Infrastructure</h4>
                <div className="flex flex-wrap gap-1 md:gap-1.5">
                  {project.technologies.slice(4).map((tech) => (
                    <span key={tech} className="px-2 py-1 md:px-2.5 md:py-1 bg-green-100 text-green-700 rounded-lg text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'results' && (
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Project Results</h3>
              <div className="space-y-2 md:space-y-3">
                {project.results.map((result, index) => (
                  <div key={index} className="p-3 md:p-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-teal-600 mb-1 md:mb-1.5">{result.metric}</div>
                    <div className="text-slate-600 text-sm md:text-base">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Client Testimonial</h4>
              {project.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-3 md:p-4">
                  <div className="flex items-center mb-2 md:mb-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
                    />
                    <div>
                      <div className="font-semibold text-sm md:text-base">{testimonial.author}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-600 italic text-sm md:text-base">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
              {project.gallery.map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-32 md:h-36 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    
    <style jsx>{`
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}</style>
  </div>
);
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen pt-16 md:pt-20 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
        {/* Header */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" data-animate>
          <div className="max-w-7xl mx-auto text-center">
            <div className={`inline-flex items-center px-3 py-1 md:px-4 md:py-2 bg-gradient-to-r from-teal-100 to-green-100 text-slate-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Code className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-teal-600" />
              Our Portfolio
            </div>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-slate-900 transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
              Web Development <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className={`text-lg md:text-xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              Discover our comprehensive web development solutions that drive business growth and digital transformation
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative flex items-center px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-medium transition-all duration-500 overflow-hidden ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg'
                      : 'bg-white/90 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200/50'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  {/* Animated background for active state */}
                  {selectedCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  <span className="relative z-10 mr-1 md:mr-2">{category.icon}</span>
                  <span className="relative z-10">{category.name}</span>
                  <span className="relative z-10 ml-1 md:ml-2 px-1.5 py-0.5 md:px-2 md:py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-1 md:hover:-translate-y-2 border border-slate-100/60 ${contentLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ 
                    transitionDelay: `${400 + index * 100}ms`,
                    transform: 'translateZ(0)' // Hardware acceleration
                  }}
                >
                  {/* Gradient border effect on hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-green-400 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  {/* Project Image Container */}
                  <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Project Logo with shine effect */}
                    <div className="absolute top-2 md:top-3 left-2 md:left-3 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl flex items-center justify-center text-lg md:text-xl lg:text-2xl shadow-lg group-hover:shadow-xl transition-all duration-500">
                      <div className="relative">
                        {project.logo}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 md:top-3 right-2 md:right-3">
                      <span className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-teal-500 to-green-500 text-white text-xs font-semibold rounded-full shadow-lg group-hover:from-teal-600 group-hover:to-green-600 transition-colors duration-300">
                        {categories.find(cat => cat.id === project.category)?.name}
                      </span>
                    </div>

                    {/* Hover Overlay with action buttons */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/95 to-green-500/95 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-2 md:space-x-3">
                      <button
                        onClick={() => openProjectModal(project.id)}
                        className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-white text-teal-600 font-semibold rounded-lg hover:bg-slate-50 transition-colors duration-300 text-xs md:text-sm"
                      >
                        <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        View Details
                      </button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center px-3 py-1.5 md:px-4 md:py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-xs md:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Live Demo
                      </a>
                    </div>

                    {/* Floating stats badge */}
                    <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center text-xs text-slate-700">
                          <Clock className="w-3 h-3 md:w-3 md:h-3 mr-1" />
                          {project.stats.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4 md:p-5 lg:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-teal-700 transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-3 md:mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    
                    {/* Technologies with animated hover */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-br from-slate-100 to-slate-50 text-slate-700 text-xs font-medium rounded-md border border-slate-200/60 group-hover:border-teal-200/60 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs rounded-md border border-slate-200/60">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Stats with icons */}
                    <div className="flex items-center justify-between text-xs md:text-sm text-slate-500 pt-3 border-t border-slate-100/60">
                      <div className="flex items-center group">
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-1 md:mr-2 group-hover:bg-teal-200 transition-colors duration-300">
                          <Users className="w-3 h-3 md:w-3 md:h-3 text-teal-600" />
                        </div>
                        <span className="text-xs md:text-sm">{project.stats.team}</span>
                      </div>
                      
                      <div className="flex items-center group">
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-green-100 rounded-lg flex items-center justify-center mr-1 md:mr-2 group-hover:bg-green-200 transition-colors duration-300">
                          <Target className="w-3 h-3 md:w-3 md:h-3 text-green-600" />
                        </div>
                        <span className="text-xs md:text-sm">{project.stats.clients}</span>
                      </div>
                      
                      <div className="flex items-center group">
                        <div className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-1 md:mr-2 group-hover:bg-blue-200 transition-colors duration-300">
                          <Award className="w-3 h-3 md:w-3 md:h-3 text-blue-600" />
                        </div>
                        <span className="text-xs md:text-sm">Success</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom gradient accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="py-12 md:py-16 bg-white/50 backdrop-blur-sm relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-8 md:top-10 left-8 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-teal-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-8 md:bottom-10 right-8 md:right-10 w-20 h-20 md:w-24 md:h-24 bg-green-200 rounded-full opacity-10 animate-pulse delay-1000"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">Our Impact</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
                Delivering exceptional results across all our web development projects
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                { value: "26+", label: "Projects Completed", color: "teal", icon: <Code className="w-5 h-5 md:w-6 md:h-6" /> },
                { value: statsValues.satisfaction, label: "Client Satisfaction", color: "green", icon: <Award className="w-5 h-5 md:w-6 md:h-6" /> },
                { value: statsValues.technologies, label: "Technologies Used", color: "blue", icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" /> },
                { value: "3K+", label: "Users Served", color: "purple", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-4 md:p-5 lg:p-6 bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-100/50 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 text-${stat.color}-600`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl md:text-3xl lg:text-4xl font-bold text-${stat.color}-600 mb-1 md:mb-2`}>{stat.value}</div>
                  <div className="text-slate-700 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-teal-500 to-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 xl:p-12 text-white relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full -translate-x-8 -translate-y-8 md:-translate-x-12 md:-translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 md:w-40 md:h-40 bg-white/10 rounded-full translate-x-8 translate-y-8 md:translate-x-16 md:translate-y-16"></div>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 relative z-10">Ready to Start Your Project?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 relative z-10">
              Let's discuss how we can transform your ideas into a powerful web solution
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center relative z-10">
              <Link to='/contact'>
                <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-teal-600 font-semibold rounded-lg md:rounded-xl hover:bg-slate-100 transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base">
                  Get Free Consultation
                </button>
              </Link>
              <Link to='/services'>
                <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-white text-white font-semibold rounded-lg md:rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 text-sm md:text-base">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isModalOpen && (
          <ProjectModal
            project={filteredProjects[currentProject]}
            onClose={() => setIsModalOpen(false)}
            onNext={nextProject}
            onPrev={prevProject}
          />
        )}
      </div>
     
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

export default OurWork;