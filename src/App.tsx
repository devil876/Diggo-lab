import { motion, AnimatePresence } from "motion/react";
import { 
  ShoppingBag, 
  Layers, 
  Video, 
  Layout, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Menu, 
  X,
  Zap,
  Sparkles,
  Camera,
  Play,
  ExternalLink,
  Globe,
  Smartphone,
  Monitor,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import React, { useState, useEffect } from "react";

// 👉 ADD THIS JUST AFTER IMPORTS
const WHATSAPP_PHONE = "916230593092";
const WHATSAPP_MESSAGE = "I want to build ecommerce store";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// --- Local Assets Example ---
// To use local images, place them in src/assets/ and import them like this:
// import heroImage from "./assets/hero.png";
// Then use it in your component: <img src={heroImage} ... />

// --- Types ---

interface PortfolioItem {
  id: string;
  seed?: string;
  thumbnail?: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  stats: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  password?: string;
}

// --- Logo Component ---

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <img 
    src="https://res.cloudinary.com/dovrgyjvi/image/upload/v1775131136/Desktop_-_3_8_aubts4.png" 
    alt="Diggolab Logo" 
    className={`${className} object-contain`}
    referrerPolicy="no-referrer"
  />
);

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // To use local images, import them at the top and use them here:
  // images: [localImage1, localImage2]
  { 
    id: "1",
    thumbnail: "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775126025/Vastrikaaa_sm50xo.jpg",
    title: "Vastrika women’s clothing", 
    category: "Shopify + AI Video",
    description: "A premium ethnic wear brand for women. We built a high-converting Shopify store and generated stunning AI product visuals to showcase their unique collection.",
    images: [
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775126025/Vastrikaaa_sm50xo.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775126832/Vastrikaaa_1_vjzlbj.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775126829/Vastrikaaa_2_ajb1he.jpg"
    ],
    stats: [
      { label: "Load Speed", value: "< 2s" },
      { label: "Mobile Optimized", value: "100%" }
    ],
    tags: ["Shopify Plus", "AI Video Gen", "Custom Liquid", "SEO"],
    liveUrl: "https://vastrikaaa.myshopify.com/",
    password: "1"
  },
  { 
    id: "2",
    thumbnail: "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775194334/Voltixyz_3_ze5fos.jpg",
    title: "Voltixyz electronic store", 
    category: "AI Mockups + Shopify",
    description: "A high-performance electronics store featuring the latest gadgets. We provided a full Shopify build along with photorealistic AI mockups that showcase products in premium tech settings.",
    images: [
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775194334/Voltixyz_3_ze5fos.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775127814/Voltixyz_1_zaqiea.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775127813/Voltixyz_2_ceogyb.jpg"
    ],
    stats: [
      { label: "Load Speed", value: "< 2s" },
      { label: "Mobile Optimized", value: "100%" }
    ],
    tags: ["AI Mockups", "Product Design", "UI/UX", "Shopify"],
    liveUrl: "https://voltixyz.myshopify.com/",
    password: "1"
  },
  { 
    id: "3",
    thumbnail: "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775183561/Soham_dwudzg.jpg",
    title: "Soham Jewelry store", 
    category: "Banners + Shopify",
    description: "A luxury jewelry brand that needed a sophisticated online presence. We designed custom banners and a bespoke Shopify theme that highlights the elegance and detail of their fine jewelry collection.",
    images: [
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775183561/Soham_dwudzg.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775183554/Soham_1_x8en2o.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775183568/Soham_2_lm7txq.jpg"
    ],
    stats: [
      { label: "Load Speed", value: "< 2s" },
      { label: "Mobile Optimized", value: "100%" }
    ],
    tags: ["Jewelry Design", "Mobile Optimization", "Shopify", "Branding"],
    liveUrl: "https://sohamjwells.myshopify.com",
    password: "1"
  },
  { 
    id: "4",
    thumbnail: "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775184746/Dhauladhar_gxfl3e.jpg",
    title: "Incense store", 
    category: "Full Brand Identity",
    description: "A serene e-commerce experience for a premium incense brand. We provided a full Shopify build along with AI-generated lifestyle imagery that captures the calming essence of their products.",
    images: [
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775184746/Dhauladhar_gxfl3e.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775184745/Dhauladhar_1_ggrmws.jpg",
      "https://res.cloudinary.com/dovrgyjvi/image/upload/v1775184741/Dhauladhar_2_ag6blr.jpg"
    ],
    stats: [
      { label: "Launch Time", value: "2-3 Days" },
      { label: "Customer Trust", value: "99%" }
    ],
    tags: ["Full Stack", "AI Imagery", "Branding", "E-commerce"],
    liveUrl: "https://dhauladharorganics.myshopify.com",
    password: "1"
  }
];

// --- Components ---

const PortfolioPopup = ({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) => {
  if (!item) return null;

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur shadow-lg p-2 rounded-full hover:bg-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6 text-gray-900" />
        </button>

        {/* Image Gallery Side */}
        <div className="lg:w-3/5 h-64 lg:h-auto overflow-y-auto bg-gray-50 p-6 space-y-6 scrollbar-hide">
          {item.images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <img 
                src={img} 
                alt={`${item.title} Screenshot ${idx + 1}`}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>

        {/* Content Side */}
        <div className="lg:w-2/5 p-8 lg:p-12 overflow-y-auto flex flex-col">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
              {item.category}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {item.description}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {item.stats.map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Tech & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-3">
            <a 
              href={item.liveUrl || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 cursor-pointer"
            >
              Visit Live Store {item.password && `(password- ${item.password})`} <ExternalLink className="w-4 h-4" />
            </a>
            <div className="flex justify-center gap-6 text-gray-400">
              <Globe className="w-5 h-5" />
              <Smartphone className="w-5 h-5" />
              <Monitor className="w-5 h-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: 'home' | 'portfolio') => void; currentView: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button onClick={() => onNavigate('home')} className="flex items-center gap-2 cursor-pointer">
            <Logo />
            <span className="text-xl font-bold tracking-tight text-gray-900">Diggolab</span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            {currentView === 'home' ? (
              <>
                <a 
                  href="#services" 
                  onClick={(e) => handleScroll(e, 'services')}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Services
                </a>
                <button onClick={() => onNavigate('portfolio')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Portfolio</button>
                <a 
                  href="#process" 
                  onClick={(e) => handleScroll(e, 'process')}
                  className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Process
                </a>
              </>
            ) : (
              <button onClick={() => onNavigate('home')} className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Back to Home</button>
            )}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 cursor-pointer inline-block"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 cursor-pointer">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
        >
          {currentView === 'home' ? (
            <>
              <a 
                href="#services" 
                className="block text-base font-medium text-gray-900" 
                onClick={(e) => handleScroll(e, 'services')}
              >
                Services
              </a>
              <button className="block text-base font-medium text-gray-900 text-left w-full" onClick={() => { onNavigate('portfolio'); setIsOpen(false); }}>Portfolio</button>
              <a 
                href="#process" 
                className="block text-base font-medium text-gray-900" 
                onClick={(e) => handleScroll(e, 'process')}
              >
                Process
              </a>
            </>
          ) : (
            <button className="block text-base font-medium text-gray-900 text-left w-full" onClick={() => { onNavigate('home'); setIsOpen(false); }}>Back to Home</button>
          )}
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-indigo-600 text-white px-5 py-3 rounded-xl text-base font-semibold cursor-pointer block text-center"
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative px-4">
          {/* Floating Elements near Heading - Moved further out to avoid overlap */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-16 -left-20 lg:-left-32 hidden xl:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-0 opacity-80"
          >
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <ShoppingBag className="text-green-600 w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Platform</p>
              <p className="text-sm font-bold text-gray-900">Shopify Expert</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-24 -right-20 lg:-right-32 hidden xl:flex items-center gap-3 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-0 opacity-80"
          >
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Zap className="text-indigo-600 w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Performance</p>
              <p className="text-sm font-bold text-gray-900">High Converting</p>
            </div>
          </motion.div>

          {/* Smaller floating icons - Pushed further out */}
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 -left-10 lg:-left-20 text-indigo-400 opacity-20 hidden lg:block"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-10 -right-10 lg:-right-20 text-amber-400 opacity-20 hidden lg:block"
          >
            <Star className="w-8 h-8" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl -z-10"
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3 h-3" />
              Next-Gen E-Commerce
            </div>
            <h1 className="text-5xl lg:text-8xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-8">
              We Build Stores That <span className="text-indigo-600">Sell.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl">
              High-converting Shopify stores meets AI-powered visual storytelling. We create your store, your mockups, and your product videos using cutting-edge AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-200 group cursor-pointer"
              >
                Build My Store
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-indigo-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View Our Work
              </button>
            </div>
            
            <div className="flex items-center gap-4 mb-20">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                <span className="font-bold text-gray-900">10+</span> stores launched this year
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative w-full max-w-3xl mx-auto"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              {/* Using your custom hero image from Cloudinary */}
              <img 
                src="https://res.cloudinary.com/dovrgyjvi/image/upload/v1775125400/Macbook_Pro_-_Light_Background_tylitk.png" 
                alt="Shopify Store Preview" 
                className="w-full aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white text-left">
                  <p className="text-sm font-medium opacity-80 mb-1">Featured Project</p>
                  <h3 className="text-2xl font-bold">Vastrika women’s clothing</h3>
                </div>
              </div>
            </div>
            
            {/* Floating AI Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Camera className="text-purple-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Mockup</p>
                <p className="text-sm font-bold text-gray-900">Pro Quality</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                <Play className="text-amber-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">AI Video</p>
                <p className="text-sm font-bold text-gray-900">High Engagement</p>
              </div>
            </motion.div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-100/50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Shopify Development",
      description: "Custom, high-converting stores designed to turn visitors into loyal customers.",
      icon: <ShoppingBag className="w-6 h-6" />,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "AI Product Mockups",
      description: "Photorealistic product shots in any environment without expensive photoshoots.",
      icon: <Layers className="w-6 h-6" />,
      color: "bg-purple-50 text-purple-600",
    },
    {
      title: "AI Generated Video",
      description: "Dynamic product videos and ads that grab attention on social media.",
      icon: <Video className="w-6 h-6" />,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Custom Banners",
      description: "Stunning website banners and social media graphics that define your brand.",
      icon: <Layout className="w-6 h-6" />,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Everything You Need to <span className="text-indigo-600">Scale</span>
          </h2>
          <p className="text-lg text-gray-600">
            We combine expert e-commerce strategy with the power of Artificial Intelligence to give your brand an unfair advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = ({ onSelectItem, onSeeAll }: { onSelectItem: (item: PortfolioItem) => void; onSeeAll: () => void }) => {
  const items = PORTFOLIO_ITEMS.slice(0, 4);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Selected <span className="text-indigo-600">Works</span>
            </h2>
            <p className="text-lg text-gray-600">
              Take a look at some of the high-converting stores and AI-generated assets we've created for our clients.
            </p>
          </div>
          <button 
            onClick={onSeeAll}
            className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
          >
            View Full Portfolio <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => onSelectItem(item)}
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                <img 
                  src={item.thumbnail || `https://picsum.photos/seed/${item.seed}/1200/800`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 font-medium">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FullPortfolio = ({ onSelectItem, onBack }: { onSelectItem: (item: PortfolioItem) => void; onBack: () => void }) => {
  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <button 
            onClick={onBack}
            className="text-indigo-600 font-bold flex items-center gap-2 mb-8 hover:-translate-x-1 transition-transform cursor-pointer"
          >
            <ArrowRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
          <h1 className="text-4xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
            Our Full <span className="text-indigo-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A complete collection of high-converting stores, AI-powered mockups, and cinematic product videos we've delivered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => onSelectItem(item)}
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video shadow-md">
                <img 
                  src={item.thumbnail || `https://picsum.photos/seed/${item.seed}/1200/800`} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-indigo-600 px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2">
                    View Project <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{item.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Strategy & Design",
      description: "We analyze your niche and design a store optimized for conversions and brand identity."
    },
    {
      number: "02",
      title: "AI Content Creation",
      description: "Our AI engines generate photorealistic mockups and cinematic videos for your products."
    },
    {
      number: "03",
      title: "Launch & Scale",
      description: "We deploy your store and provide you with the assets needed to dominate your market."
    }
  ];

  return (
    <section id="process" className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-800/30 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Simple <span className="text-indigo-400">Process</span></h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            From concept to a fully operational, high-converting e-commerce empire in record time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <span className="text-8xl font-black text-white/10 absolute -top-10 -left-4">
                {step.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-indigo-100 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg lg:text-2xl font-medium text-gray-900 leading-relaxed mb-8 italic">
                "Working with Diggolab was one of the best decisions for my business. They didn’t just build a Shopify store - they created a complete sales-focused experience. From design to functionality, everything is top-class. The AI product mockups and videos made my store stand out instantly. The owner is extremely professional, humble, and easy to work with. Communication was seamless, and delivery was beyond expectations. If you’re serious about building a Shopify store that converts, Diggolab is the right choice. Highly recommended."
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src="https://res.cloudinary.com/dovrgyjvi/image/upload/v1775198002/Screenshot_2026-04-03_120138_ipfj0c.png" 
                  alt="Avijit Maity" 
                  className="w-14 h-14 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-gray-900">Avijit Maity</p>
                  <p className="text-gray-500">Penclub</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">3 Days</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Avg. Build Time</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">100%</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Mobile Optimized</p>
                  </div>
                </div>
                <div className="pt-12 space-y-4">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">2.4s</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Load Speed</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-3xl font-bold text-indigo-600 mb-1">4.8/5</p>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-indigo-600 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-indigo-200"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Launch Your <span className="text-indigo-200">Empire?</span>
            </h2>
            <p className="text-indigo-100 text-xl mb-12 leading-relaxed">
              Stop settling for average. Get a high-converting store and AI-powered visuals that make your brand impossible to ignore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-50 transition-all shadow-xl cursor-pointer flex items-center justify-center"
              >
                Start Your Project
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 text-white border border-indigo-400 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-400 transition-all cursor-pointer flex items-center justify-center"
              >
                Book a Free Call
              </a>
            </div>
            <p className="mt-8 text-indigo-200 text-sm font-medium flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> No hidden fees. 100% satisfaction guaranteed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo />
              <span className="text-xl font-bold tracking-tight text-gray-900">Diggolab</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              We help ambitious entrepreneurs build, launch, and scale high-converting e-commerce stores using the power of design and AI.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61586740741949" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-100 transition-colors cursor-pointer text-gray-400 hover:text-indigo-600">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/diggolab/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-100 transition-colors cursor-pointer text-gray-400 hover:text-indigo-600">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://x.com/DiggoLab" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-100 transition-colors cursor-pointer text-gray-400 hover:text-indigo-600">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full border border-gray-100 flex items-center justify-center hover:bg-indigo-50 hover:border-indigo-100 transition-colors cursor-pointer text-gray-400 hover:text-indigo-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Services</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-600 transition-colors">Shopify Stores</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-600 transition-colors">AI Mockups</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-600 transition-colors">AI Product Videos</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-indigo-600 transition-colors">Banner Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
              <li><a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-indigo-600 transition-colors">Our Process</a></li>
              <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="hover:text-indigo-600 transition-colors">Case Studies</a></li>
              <li><a href="#cta" onClick={(e) => scrollToSection(e, 'cta')} className="hover:text-indigo-600 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 Diggolab. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-600">Privacy Policy</a>
            <a href="#" className="hover:text-gray-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [view, setView] = useState<'home' | 'portfolio'>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={setView} currentView={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Services />
            <Portfolio onSelectItem={setSelectedItem} onSeeAll={() => setView('portfolio')} />
            <Process />
            <Testimonials />
            <CTA />
          </>
        ) : (
          <FullPortfolio onSelectItem={setSelectedItem} onBack={() => setView('home')} />
        )}
      </main>
      <Footer />

      <AnimatePresence>
        {selectedItem && (
          <PortfolioPopup 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}