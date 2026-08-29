'use client';

import React, { useState, useEffect } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('properties-tab');
  
  // Search Filter State
  const [searchType, setSearchType] = useState('All');
  const [searchBudget, setSearchBudget] = useState('All');
  
  // Property Multi-Page Detail State
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeGalleryImg, setActiveGalleryImg] = useState('');

  // Quick Viewing Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPropertyTitle, setModalPropertyTitle] = useState('');

  // ROI Calculator State
  const [investVal, setInvestVal] = useState(2.5);
  const [yieldRate, setYieldRate] = useState(7.5);
  const [calcResults, setCalcResults] = useState({ annual: '18.75', future: '3.63' });

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [emiResult, setEmiResult] = useState(0);

  useEffect(() => {
    let annual = (investVal * 10000000 * (yieldRate / 100)) / 100000;
    let future = investVal * Math.pow(1 + 0.08, 5);
    setCalcResults({ annual: annual.toFixed(2), future: future.toFixed(2) });
  }, [investVal, yieldRate]);

  useEffect(() => {
    let r = interestRate / 12 / 100;
    let n = tenureYears * 12;
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(Math.round(emi));
  }, [loanAmount, interestRate, tenureYears]);

  const switchTab = (tabId) => {
    setSelectedProperty(null);
    setActiveTab(tabId);
  };

  const openPropertyDetail = (property) => {
    setSelectedProperty(property);
    setActiveGalleryImg(property.gallery[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openVIPModal = (title) => {
    setModalPropertyTitle(title);
    setIsModalOpen(true);
  };

  const properties = [
    {
      id: 'p1',
      title: "Apex D'Rio Sky Duplex & Penthouse",
      category: 'Flat',
      budgetRange: '2-5Cr',
      loc: 'Ahinsa Khand 1 & Indirapuram, Ghaziabad',
      desc: 'Iconic triple-tower ultra-luxury sky villas featuring double-height ceiling living rooms, private glass balconies, floating spiral staircases, and temperature-controlled infinity pool access.',
      price: '₹2.5 Cr - ₹6.5 Cr',
      mainImg: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Infinity Pool', 'Duplex Sky Villa', 'Private Elevator', '24/7 Multi-tier Security'],
      broker: { name: 'Vikram Malhotra', role: 'Senior Luxury Specialist', phone: '9990345444', photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' }
    },
    {
      id: 'p2',
      title: 'Saya Gold Avenue Luxury Towers',
      category: 'Flat',
      budgetRange: '1-2Cr',
      loc: 'Vaibhav Khand, Indirapuram, Ghaziabad',
      desc: 'One of the tallest residential marvels in NCR with ultra-modern high-speed elevators, custom Italian marble finishes, grand clubhouse, modular kitchen setups, and immediate possession options.',
      price: '₹1.8 Cr - ₹4.2 Cr',
      mainImg: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Italian Marble', 'High-Speed Elevators', 'Clubhouse Access', 'Covered Stilt Parking'],
      broker: { name: 'Rajesh Sharma', role: 'Residential Portfolio Manager', phone: '9990345444', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' }
    },
    {
      id: 'p3',
      title: 'Arora Shoppers Park Commercial Plaza',
      category: 'Commercial',
      budgetRange: '5Cr+',
      loc: 'Shakti Khand 2, Indirapuram, Ghaziabad',
      desc: 'High-footfall commercial complex offering retail showrooms, anchor store spaces, corporate office suites, and high rental return assets in prime Indirapuram market hub.',
      price: '₹3.5 Cr - ₹15.0 Cr',
      mainImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Main Road Facing', 'High ROI Yield', 'Multi-Level Parking', '100% Power Backup'],
      broker: { name: 'Praveen Mittal', role: 'Commercial Real Estate Lead', phone: '9990345444', photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' }
    },
    {
      id: 'p4',
      title: 'Agricultural & Expressway Land Parcels',
      category: 'Land',
      budgetRange: 'Under1Cr',
      loc: 'NCR Outskirts & Delhi-Meerut Expressway Corridor',
      desc: 'Prime agricultural plots and commercial land banking opportunities with clear title deeds, GDA approvals, highway connectivity, and high long-term value appreciation potential.',
      price: '₹50 Lakhs per Acre onwards',
      mainImg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80'
      ],
      tags: ['Clear Title Deed', 'Expressway Frontage', 'GDA Corridor', 'Land Bank Asset'],
      broker: { name: 'Amit Tyagi', role: 'Land & Acquisition Head', phone: '9990345444', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' }
    }
  ];

  const filteredProperties = properties.filter((p) => {
    const matchType = searchType === 'All' || p.category === searchType;
    const matchBudget = searchBudget === 'All' || p.budgetRange === searchBudget;
    return matchType && matchBudget;
  });

  const servicesList = [
    { title: "Luxury Property Buying & Sales", desc: "End-to-end consulting for premium flats, penthouses, duplex sky villas, and builder floors in Ghaziabad." },
    { title: "Commercial Leasing & Investments", desc: "High yield retail shops, showroom setups, corporate office spaces in Arora Shoppers Park & prime centers." },
    { title: "Comparative Market Analysis (CMA)", desc: "Scientific property evaluation and true valuation assessment based on actual market registry transactions." },
    { title: "Mortgage & Home Lending Services", desc: "Instant home loan approvals and loan processing powered by top banking partners including HDFC, SBI & ICICI." },
    { title: "Appraisals & Legal Verification", desc: "Thorough title verification, land registry assistance, and GDA clearance authentication." },
    { title: "Home Staging & Property Marketing", desc: "Professional property photography, virtual walkthrough creation, and targeted ultra-HNI buyer marketing." },
    { title: "Property Management & Rental Assistance", desc: "Complete tenant screening, rent collection, and property maintenance services for NRI and investor owners." },
    { title: "Land Development Consulting", desc: "Strategic advisory for agricultural land, farmhouse plot acquisitions, and expressway land banking." }
  ];

  const reviewsList = [
    { name: "Rahul Verma", rating: "5.0", text: "PD Indirapuram is hands down the most transparent real estate consultant in Ghaziabad. Got my Saya Gold Avenue flat deal closed smoothly!", time: "2 weeks ago" },
    { name: "Sanjay Gupta", rating: "5.0", text: "Best commercial deal in Arora Shoppers Park. Their market pricing analysis is extremely precise and honest.", time: "1 month ago" },
    { name: "Anjali Sharma", rating: "5.0", text: "Very polite, highly professional, and open 24 hours. Helped us secure a dream 4BHK duplex with full home loan assistance.", time: "3 months ago" }
  ];

  return (
    <div className="bg-[#030604] min-h-screen text-white font-sans selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cinzel:wght@600;800&family=Syne:wght@600;800&display=swap');
        
        .script-headline {
          font-family: 'Great Vibes', cursive !important;
        }
        .cinzel-font {
          font-family: 'Cinzel', serif !important;
        }
        .gold-metallic-text {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .gold-metallic-bg {
          background: linear-gradient(135deg, #BF953F 0%, #FCF6BA 35%, #B38728 70%, #AA771C 100%);
        }
        .futuristic-card {
          background: rgba(15, 20, 16, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.8);
        }
        .tab-btn.active {
          background: linear-gradient(135deg, #BF953F 0%, #B38728 100%);
          color: #000;
          font-weight: 800;
          box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
        /* Custom scrollbar for mobile navigation tab list */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Top Bar Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#030604]/90 border-b border-[#D4AF37]/30 px-3 sm:px-6 md:px-8 py-3 sm:py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" onClick={() => switchTab('properties-tab')}>
          <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#D4AF37] animate-ping shadow-[0_0_20px_#D4AF37]"></div>
          <span className="cinzel-font text-base sm:text-xl md:text-2xl tracking-widest gold-metallic-text font-extrabold truncate">PD INDIRAPURAM</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => switchTab('properties-tab')} className="gold-metallic-bg text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-extrabold text-[10px] sm:text-xs uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)] transition hover:scale-105 whitespace-nowrap">
            Explore Assets 👑
          </button>
        </div>
      </nav>

      {/* DEDICATED MULTI-PAGE PROPERTY VIEW SECTION */}
      {selectedProperty ? (
        <main className="pt-20 sm:pt-24 pb-16 px-3 sm:px-6 max-w-7xl mx-auto">
          <button onClick={() => setSelectedProperty(null)} className="mb-6 flex items-center gap-2 text-xs font-bold gold-metallic-text border border-[#D4AF37]/40 px-4 py-2 rounded-xl backdrop-blur-md hover:bg-[#D4AF37]/10 transition">
            ➔ Back to All Properties
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/40 h-[280px] sm:h-[380px] md:h-[480px] shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <img src={activeGalleryImg} className="w-full h-full object-cover transition duration-500" alt={selectedProperty.title} />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase">{selectedProperty.category}</span>
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-3">
                {selectedProperty.gallery.map((img, i) => (
                  <div key={i} onClick={() => setActiveGalleryImg(img)} className={`rounded-lg sm:rounded-xl overflow-hidden border cursor-pointer h-16 sm:h-20 transition ${activeGalleryImg === img ? 'border-[#D4AF37] scale-95 shadow-[0_0_15px_#D4AF37]' : 'border-white/20 opacity-60 hover:opacity-100'}`}>
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="futuristic-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40">
                <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Verified Real Estate Asset</span>
                <h1 className="font-syne text-xl sm:text-2xl md:text-3xl text-white font-extrabold mt-1 leading-snug">{selectedProperty.title}</h1>
                <p className="text-gray-400 text-xs mt-1.5 flex items-center gap-1">📍 {selectedProperty.loc}</p>
                <div className="my-4 py-3 border-y border-white/10 flex justify-between items-center flex-wrap gap-2">
                  <span className="text-xs text-gray-400 uppercase font-bold">Asking Price</span>
                  <span className="gold-metallic-text font-extrabold text-lg sm:text-xl">{selectedProperty.price}</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-6">{selectedProperty.desc}</p>
                
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">Key Specifications:</span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProperty.tags.map((t, idx) => (
                      <span key={idx} className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] px-2.5 py-1 rounded-lg font-bold">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="bg-black/90 p-4 rounded-2xl border border-[#D4AF37]/50 mt-6">
                  <span className="text-[9px] gold-metallic-text uppercase font-mono tracking-widest font-bold">Assigned Property Advisor</span>
                  <div className="flex items-center gap-3 mt-3">
                    <img src={selectedProperty.broker.photo} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border border-[#D4AF37]" />
                    <div>
                      <h4 className="font-syne text-sm font-bold text-white">{selectedProperty.broker.name}</h4>
                      <p className="text-[10px] text-gray-400">{selectedProperty.broker.role}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <a href={`tel:${selectedProperty.broker.phone}`} className="gold-metallic-bg text-black font-extrabold text-[10px] sm:text-[11px] py-2.5 rounded-xl text-center uppercase shadow-[0_0_10px_rgba(212,175,55,0.3)]">Call Broker</a>
                    <button onClick={() => openVIPModal(selectedProperty.title)} className="bg-white/10 text-white font-extrabold text-[10px] sm:text-[11px] py-2.5 rounded-xl border border-white/20 uppercase hover:bg-white/20 transition">Book Viewing</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        <>
          {/* Hero Section with Local Video Background */}
          <section className="relative min-h-[70vh] sm:min-h-[75vh] flex items-center justify-center text-center px-4 pt-20 sm:pt-24 pb-12 overflow-hidden">
            <video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-full h-full object-cover"
>
  <source src="https://res.cloudinary.com/ln7kck12/video/upload/bg-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#030604] z-0"></div>
            
            <div className="max-w-4xl z-10 relative w-full">
              <div className="inline-block border border-[#D4AF37] backdrop-blur-xl bg-black/60 px-3.5 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)] max-w-full">
                <span className="gold-metallic-text text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest font-bold block truncate">🏆 Premier Real Estate Enterprise • Ghaziabad</span>
              </div>
              
              <h1 className="cinzel-font text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-wide leading-tight mb-3"> 
                PD INDIRAPURAM <br /> 
                <span className="script-headline gold-metallic-text text-3xl sm:text-5xl md:text-6xl font-normal block mt-1 sm:mt-2 capitalize"> 
                  Kingdom of Elite Estates 
                </span> 
              </h1>
              
              <p className="text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto mb-6 sm:mb-8 font-light leading-relaxed"> Buy, Sell, Lease & Invest in Luxury Flats, Sky Duplexes, Penthouses, Commercial Retail Plazas & Agricultural Lands. </p>

              <div className="futuristic-card rounded-2xl p-3 sm:p-4 max-w-3xl mx-auto border border-[#D4AF37]/50 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
                  <div>
                    <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="w-full bg-black/90 border border-[#D4AF37]/40 text-white text-xs rounded-xl p-2.5 outline-none">
                      <option value="All">All Property Categories</option>
                      <option value="Flat">Luxury Apartments & Duplex</option>
                      <option value="Commercial">Commercial Retail & Offices</option>
                      <option value="Land">Agricultural & Farm Land</option>
                    </select>
                  </div>
                  <div>
                    <select value={searchBudget} onChange={(e) => setSearchBudget(e.target.value)} className="w-full bg-black/90 border border-[#D4AF37]/40 text-white text-xs rounded-xl p-2.5 outline-none">
                      <option value="All">All Budget Ranges</option>
                      <option value="Under1Cr">Under ₹1 Cr</option>
                      <option value="1-2Cr">₹1 Cr - ₹2 Cr</option>
                      <option value="2-5Cr">₹2 Cr - ₹5 Cr</option>
                      <option value="5Cr+">₹5 Cr+</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 md:col-span-1">
                    <button onClick={() => switchTab('properties-tab')} className="w-full text-black gold-metallic-bg font-extrabold text-xs py-2.5 rounded-xl uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.4)]">Filter Properties ➔</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative -mt-4 sm:-mt-6 z-20 px-3 sm:px-4 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="bg-black/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/40 text-center shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <h4 className="cinzel-font text-xl sm:text-2xl gold-metallic-text font-extrabold">500+</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium mt-0.5">Happy Families Housed</p>
              </div>
              <div className="bg-black/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/40 text-center shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <h4 className="cinzel-font text-xl sm:text-2xl gold-metallic-text font-extrabold">4.7 ★</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium mt-0.5">129+ Google Reviews</p>
              </div>
              <div className="bg-black/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/40 text-center shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <h4 className="cinzel-font text-xl sm:text-2xl gold-metallic-text font-extrabold">₹250Cr+</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium mt-0.5">Transacted Assets</p>
              </div>
              <div className="bg-black/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-[#D4AF37]/40 text-center shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
                <h4 className="cinzel-font text-xl sm:text-2xl gold-metallic-text font-extrabold">24 Hours</h4>
                <p className="text-[10px] sm:text-[11px] text-gray-300 font-medium mt-0.5">Open Desk Assistance</p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-10 px-3 sm:px-4 max-w-7xl mx-auto">
            <div className="flex overflow-x-auto gap-2 pb-3 justify-start md:justify-center border-b border-[#D4AF37]/20 hide-scrollbar">
              <button onClick={() => switchTab('properties-tab')} className={`tab-btn ${activeTab === 'properties-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase font-extrabold whitespace-nowrap transition flex-shrink-0`}>🏢 Featured Properties</button>
              <button onClick={() => switchTab('services-tab')} className={`tab-btn ${activeTab === 'services-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase font-extrabold whitespace-nowrap transition flex-shrink-0`}>⚡ Comprehensive Services</button>
              <button onClick={() => switchTab('emi-tab')} className={`tab-btn ${activeTab === 'emi-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase font-extrabold whitespace-nowrap transition flex-shrink-0`}>🏦 Loan Calculator</button>
              <button onClick={() => switchTab('calculator-tab')} className={`tab-btn ${activeTab === 'calculator-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase font-extrabold whitespace-nowrap transition flex-shrink-0`}>📈 Yield Forecast</button>
              <button onClick={() => switchTab('location-tab')} className={`tab-btn ${activeTab === 'location-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-4 sm:px-5 py-2.5 rounded-xl sm:rounded-2xl text-[11px] sm:text-xs uppercase font-extrabold whitespace-nowrap transition flex-shrink-0`}>📍 Head Office Map</button>
            </div>

            {activeTab === 'properties-tab' && (
              <div className="py-6 sm:py-8">
                <h2 className="cinzel-font text-xl sm:text-3xl md:text-4xl gold-metallic-text text-center mb-1.5 uppercase font-extrabold">Exclusive Asset Portfolio</h2>
                <p className="text-center text-gray-400 text-xs mb-6 sm:mb-8">Click any property to open detailed multi-photo gallery & broker view</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {filteredProperties.map((p) => (
                    <div key={p.id} className="futuristic-card rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border border-[#D4AF37]/30 hover:border-[#D4AF37] transition flex flex-col justify-between" onClick={() => openPropertyDetail(p)}>
                      <div>
                        <div className="relative overflow-hidden h-48 sm:h-60">
                          <img src={p.mainImg} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                          <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">{p.category}</span>
                        </div>
                        <div className="p-4 sm:p-5">
                          <h3 className="font-syne text-lg sm:text-xl text-white font-bold">{p.title}</h3>
                          <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">{p.desc.substring(0,85)}...</p>
                        </div>
                      </div>
                      <div className="p-4 sm:p-5 pt-0">
                        <div className="mt-2 flex justify-between items-center border-t border-white/10 pt-3">
                          <div>
                            <span className="text-[9px] text-gray-400 uppercase block font-bold">Valuation</span>
                            <span className="gold-metallic-text font-extrabold text-xs sm:text-sm">{p.price}</span>
                          </div>
                          <span className="gold-metallic-bg text-black text-[9px] sm:text-[10px] px-3 sm:px-4 py-2 rounded-xl font-extrabold uppercase shadow-[0_0_10px_rgba(212,175,55,0.3)]">View Detailed Page ➔</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services-tab' && (
              <div className="py-6 sm:py-8 max-w-5xl mx-auto">
                <h2 className="cinzel-font text-xl sm:text-3xl md:text-4xl gold-metallic-text text-center mb-1.5 uppercase font-extrabold">Our Real Estate Capabilities</h2>
                <p className="text-center text-gray-400 text-xs mb-6 sm:mb-8">Official Service Options provided at PD Indirapuram Property Dealer</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  {servicesList.map((s, idx) => (
                    <div key={idx} className="futuristic-card p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/30">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                        <h3 className="font-syne text-sm sm:text-base text-white font-bold">{s.title}</h3>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'emi-tab' && (
              <div className="py-6 sm:py-8">
                <div className="futuristic-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 max-w-3xl mx-auto border border-[#D4AF37]/40">
                  <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Mortgage Desk Engine</span>
                  <h3 className="font-syne text-xl sm:text-2xl md:text-3xl text-white mt-1 mb-5 font-bold">Smart Home Loan EMI Calculator</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-400 text-[11px] mb-1 font-bold">Loan Amount: ₹ {loanAmount.toLocaleString('en-IN')}</label>
                        <input type="range" min="1000000" max="50000000" step="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-[11px] mb-1 font-bold">Interest Rate: {interestRate}%</label>
                        <input type="range" min="6.5" max="12.5" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-[11px] mb-1 font-bold">Tenure: {tenureYears} Years</label>
                        <input type="range" min="5" max="30" step="1" value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                      </div>
                    </div>
                    <div className="bg-black/90 p-5 rounded-2xl border border-[#D4AF37]/50 flex flex-col justify-center text-center">
                      <span className="text-gray-400 text-xs uppercase font-bold">Estimated Monthly Payment</span>
                      <h4 className="cinzel-font text-xl sm:text-2xl md:text-3xl gold-metallic-text font-extrabold mt-2 mb-3">₹ {emiResult.toLocaleString('en-IN')} / mo</h4>
                      <p className="text-[10px] text-gray-400">Direct mortgage assistance available through HDFC, SBI & ICICI Bank.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calculator-tab' && (
              <div className="py-6 sm:py-8">
                <div className="futuristic-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 max-w-xl mx-auto border border-[#D4AF37]/40">
                  <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Financial Advisory</span>
                  <h3 className="font-syne text-xl sm:text-2xl md:text-3xl text-white mt-1 mb-5 font-bold">Yield & ROI Forecast Calculator</h3>
                  <div className="space-y-4">
                    <div><label className="block text-gray-400 text-[11px] mb-1 font-bold">Investment Capital (₹ Cr)</label><input type="number" value={investVal} onChange={(e) => setInvestVal(e.target.value)} className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#D4AF37]" /></div>
                    <div><label className="block text-gray-400 text-[11px] mb-1 font-bold">Expected Annual Yield Rate (%)</label><input type="number" value={yieldRate} onChange={(e) => setYieldRate(e.target.value)} className="w-full bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#D4AF37]" /></div>
                    <div className="border-t border-white/10 pt-4 mt-4 grid grid-cols-2 gap-3 text-center">
                      <div className="bg-black/90 p-3.5 sm:p-4 rounded-xl border border-[#D4AF37]/30"><span className="text-gray-400 text-[9px] uppercase font-bold block">Annual Income</span><h4 className="cinzel-font text-lg sm:text-xl gold-metallic-text font-bold mt-1">₹ {calcResults.annual} Lakhs</h4></div>
                      <div className="bg-black/90 p-3.5 sm:p-4 rounded-xl border border-[#D4AF37]/30"><span className="text-gray-400 text-[9px] uppercase font-bold block">5-Yr Asset Value</span><h4 className="cinzel-font text-lg sm:text-xl gold-metallic-text font-bold mt-1">₹ {calcResults.future} Cr</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'location-tab' && (
              <div className="py-6 sm:py-8">
                <div className="futuristic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 max-w-4xl mx-auto border border-[#D4AF37]/40">
                  <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Physical Desk Location</span>
                  <h3 className="font-syne text-xl sm:text-2xl text-white font-bold mt-1 mb-2">Visit PD Indirapuram Office</h3>
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed">G10, Arora Shoppers Park, Shakti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014</p>
                  <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-[#D4AF37]/40 h-64 sm:h-80">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996129591039!2d77.371903!3d28.630018!2m3!1f0!2f0!3f0!3m2!1i1024!1i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b71bf87f8e8f801!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section className="py-8 sm:py-12 px-3 sm:px-4 max-w-6xl mx-auto">
            <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold block text-center">Leadership & Experts</span>
            <h2 className="cinzel-font text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mt-1 mb-6 sm:mb-8">Meet Our Senior Consultants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="futuristic-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-center border border-[#D4AF37]/30">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 object-cover border-2 border-[#D4AF37]" />
                <h3 className="font-syne text-base sm:text-lg text-white font-bold">Pankaj Sharma</h3>
                <p className="gold-metallic-text text-xs font-medium">Founder & Managing Director</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">15+ Years expertise in luxury developments & commercial land acquisitions.</p>
              </div>
              <div className="futuristic-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-center border border-[#D4AF37]/30">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 object-cover border-2 border-[#D4AF37]" />
                <h3 className="font-syne text-base sm:text-lg text-white font-bold">Neha Sharma</h3>
                <p className="gold-metallic-text text-xs font-medium">Head of Residential Sales</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">Specialist in high-end penthouses, duplexes, and Saya Gold Avenue listings.</p>
              </div>
              <div className="futuristic-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl text-center border border-[#D4AF37]/30 sm:col-span-2 md:col-span-1">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80" className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 object-cover border-2 border-[#D4AF37]" />
                <h3 className="font-syne text-base sm:text-lg text-white font-bold">Suresh Tyagi</h3>
                <p className="gold-metallic-text text-xs font-medium">Legal & Land Valuation Lead</p>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">Expert in title verification, GDA clearances, and commercial lease deeds.</p>
              </div>
            </div>
          </section>

          <section className="py-8 sm:py-12 px-3 sm:px-4 max-w-6xl mx-auto">
            <div className="futuristic-card p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 gap-4">
                <div>
                  <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Verified Google Reviews</span>
                  <h2 className="cinzel-font text-xl sm:text-2xl md:text-3xl text-white font-bold mt-1">Trusted By 500+ Property Owners</h2>
                </div>
                <div className="flex items-center gap-3 bg-black/80 px-4 py-2.5 rounded-2xl border border-[#D4AF37]">
                  <span className="cinzel-font text-2xl font-extrabold gold-metallic-text">4.7</span>
                  <div className="text-left">
                    <div className="text-amber-400 text-xs">★★★★★</div>
                    <span className="text-[10px] text-gray-400">129+ Verified Google Ratings</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {reviewsList.map((r, idx) => (
                  <div key={idx} className="bg-black/90 p-4 sm:p-5 rounded-2xl border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-syne text-sm font-bold text-white">{r.name}</h4>
                        <span className="text-amber-400 text-xs font-bold">★ {r.rating}</span>
                      </div>
                      <p className="text-gray-300 text-xs italic leading-relaxed">"{r.text}"</p>
                    </div>
                    <span className="text-[9px] text-gray-500 block mt-3 font-mono">{r.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Form Booking Section */}
          <section className="py-8 sm:py-12 px-3 sm:px-4 max-w-4xl mx-auto text-center">
            <div className="futuristic-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-[#D4AF37]">
              <span className="gold-metallic-text text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">Connect Directly</span>
              <h2 className="cinzel-font text-xl sm:text-2xl md:text-3xl text-white font-bold mt-1 mb-2">Book Private Site Visit</h2>
              <p className="text-gray-400 text-xs mb-6 leading-relaxed">Address: G10 Arora Shoppers Park, Shakti Khand 2, Indirapuram, Ghaziabad</p>

              <form onSubmit={(e) => { e.preventDefault(); alert('Request Received! PD Indirapuram team will contact you shortly.'); }} className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                <input type="text" placeholder="Your Full Name" required className="bg-black/90 border border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#D4AF37]" />
                <input type="tel" placeholder="Phone Number" required className="bg-black/90 border border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none focus:border-[#D4AF37]" />
                <select className="bg-black/90 border border-white/20 rounded-xl px-4 py-3 text-xs text-white outline-none md:col-span-2 focus:border-[#D4AF37]">
                  <option value="">Interested Service / Property Category</option>
                  <option value="Luxury Flat">Luxury Apartment / Penthouse</option>
                  <option value="Commercial">Commercial Shop / Office</option>
                  <option value="Land">Agricultural Land / Plot</option>
                  <option value="Home Loan">Mortgage & Home Loan Assistance</option>
                </select>
                <button type="submit" className="md:col-span-2 gold-metallic-bg text-black font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-widest mt-1 shadow-[0_0_20px_rgba(212,175,55,0.4)]">Request VIP Priority Callback 👑</button>
              </form>
            </div>
          </section>

          {/* CONTACT & SOCIAL MEDIA HUB SECTION */}
          <section className="py-12 sm:py-16 px-3 sm:px-4 max-w-6xl mx-auto border-t border-[#D4AF37]/20 mt-8 sm:mt-12">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-block border border-[#D4AF37]/50 bg-[#D4AF37]/10 px-4 py-1 rounded-full mb-3">
                <span className="gold-metallic-text text-[10px] uppercase font-mono tracking-widest font-bold">Official Connect Hub</span>
              </div>
              <h2 className="cinzel-font text-2xl sm:text-3xl md:text-5xl text-white font-extrabold">GET IN TOUCH</h2>
              <p className="text-gray-400 text-xs mt-2">Direct desk access, real-time messaging & social media channels</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {/* Phone Channel */}
              <a href="tel:09990345444" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-[#D4AF37] hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Official Phone Desk</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D4AF37] transition truncate block">+91 99903 45444</span>
                </div>
              </a>

              {/* WhatsApp Channel */}
              <a href="https://wa.me/919990345444?text=Greetings!%20I%20am%20interested%20in%20a%20VIP%20Property%20Consultation." target="_blank" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-[#25D366] hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">WhatsApp VIP Chat</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#25D366] transition truncate block">Chat On WhatsApp</span>
                </div>
              </a>

              {/* Email Channel */}
              <a href="mailto:contact@pdindirapuram.com" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-blue-400 hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Official Email</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-400 transition truncate block">contact@pdindirapuram.com</span>
                </div>
              </a>

              {/* Instagram Channel */}
              <a href="https://instagram.com/pd_indirapuram_property_dealer" target="_blank" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-pink-500 hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-500/20 border border-pink-500 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">Instagram</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-pink-500 transition truncate block">@pd_indirapuram...</span>
                </div>
              </a>

              {/* LinkedIn Channel */}
              <a href="https://linkedin.com" target="_blank" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-sky-500 hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-500/20 border border-sky-500 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">LinkedIn Business</span>
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-500 transition truncate block">PD Indirapuram</span>
                </div>
              </a>

              {/* X / Twitter Icon Channel */}
              <a href="https://x.com" target="_blank" className="futuristic-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 hover:border-white hover:scale-105 transition group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </div>
                <div className="overflow-hidden">
                  <span className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-bold tracking-wider block">X Platform (Twitter)</span>
                  <span className="text-xs sm:text-sm font-bold text-white transition truncate block">@PD_Indirapuram</span>
                </div>
              </a>
            </div>
          </section>
        </>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-[#0b100d] border border-[#D4AF37] p-5 sm:p-6 rounded-2xl sm:rounded-3xl max-w-md w-full relative shadow-[0_0_40px_rgba(212,175,55,0.3)]">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white font-bold text-sm p-1">✕</button>
            <span className="gold-metallic-text text-[10px] font-mono uppercase tracking-widest block mb-1">VIP Consultation Request</span>
            <h3 className="cinzel-font text-base sm:text-lg font-bold text-white mb-4 pr-6">Book Viewing for: <span className="text-[#D4AF37]">{modalPropertyTitle}</span></h3>
            
            <form onSubmit={(e) => { e.preventDefault(); alert('VIP Viewing Request Sent! Assigned Advisor will call you within 15 minutes.'); setIsModalOpen(false); }} className="space-y-3">
              <input type="text" placeholder="Full Name" required className="w-full bg-black/80 border border-white/20 rounded-xl p-3 text-xs text-white outline-none focus:border-[#D4AF37]" />
              <input type="tel" placeholder="Mobile Number" required className="w-full bg-black/80 border border-white/20 rounded-xl p-3 text-xs text-white outline-none focus:border-[#D4AF37]" />
              <input type="date" required className="w-full bg-black/80 border border-white/20 rounded-xl p-3 text-xs text-white outline-none focus:border-[#D4AF37]" />
              <button type="submit" className="w-full gold-metallic-bg text-black font-extrabold text-xs py-3 rounded-xl uppercase tracking-wider mt-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]">Confirm Site Visit Booking 👑</button>
            </form>
          </div>
        </div>
      )}

      <footer className="border-t border-white/10 py-6 px-4 text-center text-xs text-gray-400">
        <p>© 2026 PD Indirapuram Property Dealer • All Rights Reserved.</p>
        <p className="text-[10px] text-gray-400 mt-1">Servicing Ahinsa Khand 1, Vaibhav Khand, Shakti Khand & NCR Expressway Zones</p>
      </footer>
    </div>
  );
}
