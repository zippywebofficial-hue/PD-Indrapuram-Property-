'use client';
import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook, 
  Twitter, 
  MessageSquare, 
  Search, 
  ShieldCheck, 
  Award, 
  Headphones, 
  ChevronRight, 
  Menu, 
  X,
  Play,
  Send
} from 'lucide-react';

export default function ZippyRealEstatePortal() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [filterType, setFilterType] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: 'Flats / Apartments',
    budget: '₹1 Cr - ₹5 Cr'
  });

  // Sample Property Data
  const properties = [
    {
      id: 1,
      title: "Skyline Luxury Penthouse",
      type: "flats",
      location: "Mumbai",
      budget: "high",
      price: "₹12.5 Cr",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      specs: "4 BHK | 4,500 Sq.Ft | Sea View",
      mapQuery: "Skyline+Luxury+Penthouse+Mumbai"
    },
    {
      id: 2,
      title: "Greenfield Prime Commercial Plot",
      type: "land",
      location: "Delhi NCR",
      budget: "medium",
      price: "₹4.8 Cr",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      specs: "2 Acres | Clear Title | Highway Frontage",
      mapQuery: "Indirapuram+Ghaziabad+Delhi+NCR"
    },
    {
      id: 3,
      title: "Corporate Tech Park Tower",
      type: "commercial",
      location: "Bangalore",
      budget: "high",
      price: "₹25.0 Cr",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      specs: "15,000 Sq.Ft | Fully Furnished | High ROI",
      mapQuery: "Tech+Park+Bangalore"
    }
  ];

  // Map Redirect
  const openGoogleMaps = (query) => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  // WhatsApp Submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "919999999999"; 
    const textMessage = `Hello Zippy Real Estate!%0A%0A*New Property Enquiry*%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Looking For:* ${encodeURIComponent(formData.propertyType)}%0A*Budget:* ${encodeURIComponent(formData.budget)}`;
    window.open(`https://wa.me/${phoneNumber}?text=${textMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <Building2 className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <span className="text-xl font-black tracking-wider uppercase bg-gradient-to-r from-white via-slate-200 to-amber-400 bg-clip-text text-transparent">
                Zippy Real Estate
              </span>
              <span className="block text-[10px] tracking-widest text-amber-500/90 font-semibold uppercase">Luxury & Commercial</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#properties" className="hover:text-amber-400 transition-colors">Properties</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#stats" className="hover:text-amber-400 transition-colors">Portfolio</a>
            <a href="#contact-form" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#contact-form" className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95 inline-block">
              Book Consultation
            </a>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#properties" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Properties</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">About Us</a>
            <a href="#stats" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Portfolio</a>
            <a href="#contact-form" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-amber-400">Contact</a>
            <a href="#contact-form" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center mt-2 px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-semibold text-sm">
              Book Consultation
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-30"
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-city-skyscrapers-and-buildings-41553-large.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Play className="w-3.5 h-3.5 fill-amber-400" /> Premium Real Estate Solutions
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Discover Exclusive <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">Land, Flats & Commercial</span> Assets
          </h1>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Direct verified deal flows, prime commercial locations, and ultra-luxury residential assets tailored for elite investors.
          </p>

          {/* SEARCH BAR */}
          <div className="w-full max-w-4xl mx-auto mt-8 p-3 sm:p-4 rounded-2xl bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              
              <div className="flex flex-col text-left px-3 py-2 rounded-xl bg-slate-800/50 border border-slate-700/40">
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Category</label>
                <select 
                  value={filterType} 
                  onChange={(e) => setFilterType(e.target.value)}
                  className="bg-transparent text-slate-200 text-sm font-medium focus:outline-none cursor-pointer mt-1"
                >
                  <option value="all" className="bg-slate-900">All Categories</option>
                  <option value="flats" className="bg-slate-900">Flats / Apartments</option>
                  <option value="land" className="bg-slate-900">Plots & Land</option>
                  <option value="commercial" className="bg-slate-900">Commercial Spaces</option>
                </select>
              </div>

              <div className="flex flex-col text-left px-3 py-2 rounded-xl bg-slate-800/50 border border-slate-700/40">
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Location</label>
                <select 
                  value={filterLocation} 
                  onChange={(e) => setFilterLocation(e.target.value)}
                  className="bg-transparent text-slate-200 text-sm font-medium focus:outline-none cursor-pointer mt-1"
                >
                  <option value="all" className="bg-slate-900">All Locations</option>
                  <option value="Mumbai" className="bg-slate-900">Mumbai</option>
                  <option value="Delhi NCR" className="bg-slate-900">Delhi NCR</option>
                  <option value="Bangalore" className="bg-slate-900">Bangalore</option>
                </select>
              </div>

              <div className="flex flex-col text-left px-3 py-2 rounded-xl bg-slate-800/50 border border-slate-700/40">
                <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Budget Range</label>
                <select 
                  value={filterBudget} 
                  onChange={(e) => setFilterBudget(e.target.value)}
                  className="bg-transparent text-slate-200 text-sm font-medium focus:outline-none cursor-pointer mt-1"
                >
                  <option value="all" className="bg-slate-900">Any Budget</option>
                  <option value="medium" className="bg-slate-900">₹1 Cr - ₹5 Cr</option>
                  <option value="high" className="bg-slate-900">₹5 Cr+</option>
                </select>
              </div>

              <button className="h-full py-3 sm:py-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95">
                <Search className="w-4 h-4 stroke-[3]" /> Search Now
              </button>

            </div>
          </div>

          {/* STATS */}
          <div id="stats" className="w-full max-w-5xl mx-auto pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex items-center gap-4 hover:border-amber-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Award className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">₹500Cr+</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Portfolio Delivered</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex items-center gap-4 hover:border-amber-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Verified Legal Land</div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex items-center gap-4 hover:border-amber-500/30 transition-all">
                <div className="p-3.5 rounded-xl bg-amber-500/10 text-amber-400">
                  <Headphones className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-black text-white">24/7 VIP</div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-0.5">Concierge Support</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PROPERTIES SECTION */}
      <section id="properties" className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Featured Inventory</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Prime Real Estate Assets</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md mt-2 md:mt-0">
              Handpicked properties verified for clean documentation, highest ROI, and prime locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-amber-500/40 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-semibold uppercase">
                    {property.type}
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-black text-sm">
                    {property.price}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {property.title}
                  </h3>
                  
                  <button 
                    onClick={() => openGoogleMaps(property.mapQuery)} 
                    className="flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm font-medium transition-colors cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>{property.location}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-amber-400 border border-slate-700 ml-1">View Map</span>
                  </button>

                  <div className="text-xs text-slate-500 pt-2 border-t border-slate-800">
                    {property.specs}
                  </div>
                  <a 
                    href="#contact-form" 
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                  >
                    Enquire Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-20 bg-slate-900/50 border-t border-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">Request VIP Callback</h3>
            <p className="text-slate-400 text-sm text-center mt-2 mb-8">
              Fill in your requirement to instantly message our senior investment advisor via WhatsApp.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Property Interest</label>
                  <select 
                    value={formData.propertyType}
                    onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Flats & Apartments">Flats & Apartments</option>
                    <option value="Plots & Commercial Land">Plots & Commercial Land</option>
                    <option value="Corporate Office Space">Corporate Office Space</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Estimated Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="₹1 Cr - ₹5 Cr">₹1 Cr - ₹5 Cr</option>
                    <option value="₹5 Cr - ₹15 Cr">₹5 Cr - ₹15 Cr</option>
                    <option value="₹15 Cr+">₹15 Cr+</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 mt-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Enquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
            
            <div className="space-y-4 md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-amber-500 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-slate-950" />
                </div>
                <span className="text-lg font-bold text-white">Zippy Real Estate</span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                Empowering investors with high-yield commercial hubs, clear-title land banks, and luxury lifestyle residences.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <a href="#" className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"><Facebook className="w-4 h-4" /></a>
                <a href="#" className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="p-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all"><MessageSquare className="w-4 h-4" /></a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#properties" className="hover:text-amber-400 transition-colors">Commercial Hubs</a></li>
                <li><a href="#properties" className="hover:text-amber-400 transition-colors">Agricultural Plots</a></li>
                <li><a href="#properties" className="hover:text-amber-400 transition-colors">Luxury Apartments</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">Legal Verification</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Direct Contact</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" /> +91 (VIP Direct Line)
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" /> luxury@zippyrealestate.com
                </div>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Zippy Real Estate. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Designed for VIP Real Estate Deals</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
