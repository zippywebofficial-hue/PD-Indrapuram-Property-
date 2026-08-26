'use client';

import React, { useState, useEffect } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('properties-tab');
  const [investVal, setInvestVal] = useState(2.5);
  const [yieldRate, setYieldRate] = useState(7.5);
  const [calcResults, setCalcResults] = useState({ annual: '18.75', future: '3.63' });
  const [modal, setModal] = useState({ show: false, data: { title: '', loc: '', desc: '', price: '', img: '', tags: [] } });

  // Handle ROI calculation on input change
  useEffect(() => {
    let annual = (investVal * 10000000 * (yieldRate / 100)) / 100000;
    let future = investVal * Math.pow(1 + 0.08, 5);
    setCalcResults({ annual: annual.toFixed(2), future: future.toFixed(2) });
  }, [investVal, yieldRate]);

  const switchTab = (tabId) => {
    setActiveTab(tabId);
  };

  const openModal = (data) => {
    setModal({ show: true, data });
  };

  const closeModal = () => {
    setModal({ ...modal, show: false });
  };

  const properties = [
    { title: "Apex D'Rio Luxury Duplex", loc: 'Indirapuram, Ghaziabad', desc: 'Private glass balconies, duplex penthouses, floating spiral staircases, double-height ceilings, and infinity pools.', price: '₹2.5 Cr - ₹6.5 Cr', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', tags: ['Infinity Pool', 'Duplex Sky Villa', 'Private Elevator', '24/7 High-Tech Security'] },
    { title: 'Saya Gold Avenue', loc: 'Vaibhav Khand, Indirapuram', desc: 'Premium residential towers featuring high-speed elevators, custom ceiling lights, Italian marble flooring, and 24/7 high-tech security.', price: '₹1.8 Cr - ₹4.2 Cr', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', tags: ['Italian Marble', 'High-Speed Elevators', 'Clubhouse Access', 'Covered Parking'] },
    { title: 'Commercial Retail Plaza', loc: 'Shakti Khand / Ahinsa Khand', desc: 'Multi-floor commercial building, prime road facing, ideal for corporate headquarters, showrooms, or high-yield rental returns.', price: '₹8.5 Cr - ₹25.0 Cr', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', tags: ['Main Road Facing', 'High Rental Yield', 'Multi-Level Parking', '100% Power Backup'] },
    { title: 'Agricultural Lands & Khet', loc: 'NCR Outskirts & Prime Expressway Zones', desc: 'Fertile agricultural land, highway connectivity, clear title deeds, ideal for farmhouses, future developments, or long-term land banking.', price: '₹50 Lakhs per Acre onwards', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', tags: ['Clear Title Deed', 'Highway Access', 'Water Connection', 'Fertile Soil'] },
    { title: '5BHK Rooftop Sky Villa', loc: 'Indirapuram Exclusive', desc: 'Private outdoor gazebos, rooftop lounge lighting, marble bathrooms with glass showers, and home theater walls.', price: '₹3.5 Cr - ₹8.0 Cr', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', tags: ['Private Rooftop Gazebo', 'Home Theater Wall', 'Smart Home Automation', 'Jacuzzi'] },
    { title: 'Freehold Residential Plots', loc: 'Ghaziabad Sector Zones', desc: 'GDA approved freehold residential plots, Gated community, ready for immediate construction.', price: '₹1.2 Cr onwards', img: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80', tags: ['GDA Approved', 'Freehold Title', 'Gated Community', 'Immediate Registry'] }
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#030604]/80 border-b border-[#D4AF37]/30 px-4 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] animate-ping shadow-[0_0_20px_#D4AF37]"></div>
          <span className="font-syne text-xl md:text-2xl tracking-widest gold-text font-extrabold">PD INDIRAPURAM</span>
        </div>
        <div className="flex gap-2.5">
          <a href="https://wa.me/919990345444?text=Greetings..." target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded-xl font-extrabold text-[11px] tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-105 transition"> WhatsApp VIP </a>
          <a href="tel:9990345444" className="gold-gradient text-black px-4 py-2 rounded-xl font-extrabold text-[11px] tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition"> 👑 Direct Desk </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 pt-16 overflow-hidden">
        <video autoplay loop muted playsinline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-real-estate-buildings-4246-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#030604] z-0"></div>
        <div className="max-w-4xl z-10 relative">
          <div className="inline-block border border-[#D4AF37] backdrop-blur-xl bg-black/60 px-6 py-2 rounded-full mb-5 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <span className="gold-text text-xs uppercase tracking-widest font-bold">🏆 Premier Real Estate Hub | Flats, Buildings & Lands</span>
          </div>
          <h1 className="font-syne text-4xl md:text-7xl font-extrabold text-white tracking-wide leading-tight mb-4"> PD INDIRAPURAM <br /> <span className="italic font-normal gold-text"> Kingdom of Elite Estates </span> </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-2xl mx-auto mb-8 font-light leading-relaxed"> Ghaziabad, UP | Buy, Sell & Rent Luxury Apartments, Penthouses, Commercial Buildings & Prime Agricultural Lands (Khet/Plots). </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => switchTab('properties-tab')} className="btn-futuristic-3d text-white px-8 py-4 rounded-2xl font-extrabold text-xs tracking-widest uppercase">🏢 Explore Estates</button>
            <button onClick={() => switchTab('calculator-tab')} className="btn-futuristic-3d text-[#D4AF37] px-8 py-4 rounded-2xl font-extrabold text-xs tracking-widest uppercase">📊 ROI Calculator</button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-3 pb-4 justify-start md:justify-center border-b border-[#D4AF37]/20">
          <button onClick={() => switchTab('properties-tab')} className={`tab-btn ${activeTab === 'properties-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>🏢 Expanded Property Portfolio</button>
          <button onClick={() => switchTab('calculator-tab')} className={`tab-btn ${activeTab === 'calculator-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>📈 Yield & ROI Calculator</button>
        </div>

        {/* Tab Content 1 */}
        {activeTab === 'properties-tab' && (
          <div className="py-8">
            <h2 className="font-syne text-3xl md:text-5xl gold-text text-center mb-2 uppercase font-extrabold">Complete Property Catalogue</h2>
            <p className="text-center text-gray-400 text-xs mb-10">Flats, Luxury Penthouses, Commercial Buildings, Agricultural Lands & Khet (Buy, Sell & Rent)</p>
            <div className="grid md:grid-cols-3 gap-8">
              {properties.map((p, idx) => (
                <div key={idx} className="futuristic-card rounded-3xl overflow-hidden cursor-pointer group" onClick={() => openModal(p)}>
                  <div className="relative overflow-hidden"><img src={p.img} className="w-full h-60 object-cover group-hover:scale-110 transition duration-500" /></div>
                  <div className="p-6">
                    <h3 className="font-syne text-2xl text-white font-bold">{p.title}</h3>
                    <p className="text-gray-400 text-xs mt-2">{p.desc.substring(0,60)}...</p>
                    <div className="mt-5 flex justify-between items-center border-t border-white/10 pt-4">
                      <span className="gold-text font-extrabold text-sm">{p.price.split('-')[0]} onwards</span>
                      <span className="btn-futuristic-3d text-[#D4AF37] text-[10px] px-4 py-1.5 rounded-full font-bold">View Specs ➔</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3 */}
        {activeTab === 'calculator-tab' && (
          <div className="py-8">
            <div className="futuristic-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
              <span className="gold-text text-xs font-mono uppercase tracking-widest font-bold">Financial Intelligence Engine</span>
              <h3 className="font-syne text-3xl md:text-4xl text-white mt-1 mb-6 font-bold">Yield & ROI Calculator</h3>
              <div className="space-y-5">
                <div><label className="block text-gray-400 text-xs mb-2 uppercase font-bold">Estimated Investment Value (₹ Cr)</label><input type="number" value={investVal} onChange={(e) => setInvestVal(e.target.value)} class="w-full bg-black/60 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#D4AF37] outline-none" /></div>
                <div><label className="block text-gray-400 text-xs mb-2 uppercase font-bold">Expected Annual Yield Rate (%)</label><input type="number" value={yieldRate} onChange={(e) => setYieldRate(e.target.value)} class="w-full bg-black/60 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#D4AF37] outline-none" /></div>
                <div className="border-t border-white/10 pt-6 mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/80 p-5 rounded-2xl border border-[#D4AF37]/40 shadow-inner"><span className="text-gray-400 text-[10px] uppercase font-bold">Est. Annual Income</span><h4 className="font-syne text-2xl md:text-3xl gold-text font-bold mt-1">₹ {calcResults.annual} Lakhs</h4></div>
                  <div className="bg-black/80 p-5 rounded-2xl border border-[#D4AF37]/40 shadow-inner"><span className="text-gray-400 text-[10px] uppercase font-bold">5-Year Capital Forecast</span><h4 className="font-syne text-2xl md:text-3xl gold-text font-bold mt-1">₹ {calcResults.future} Cr</h4></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Modal - Pure CSS transition logic */}
      <div id="modal" className={`fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4 transition-all duration-300 ${modal.show ? 'opacity-100' : 'hidden opacity-0 hidden_force'}`}>
        <div className="futuristic-card max-w-xl w-full rounded-3xl p-6 md:p-8 relative border border-[#D4AF37] max-h-[90vh] overflow-y-auto">
          <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10">✕</button>
          <div className="relative rounded-2xl overflow-hidden mb-5"><img src={modal.data.img} className="w-full h-56 object-cover" /></div>
          <span className="gold-text text-[10px] font-mono uppercase font-bold">Developer Specification Sheet</span>
          <h3 className="font-syne text-3xl text-white font-bold mt-1">{modal.data.title}</h3>
          <p className="text-xs gold-text mb-3 font-semibold">{modal.data.loc}</p>
          <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light">{modal.data.desc}</p>
          <div className="mb-6"><p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Key Amenities & Highlights:</p><div className="flex flex-wrap gap-2">{modal.data.tags.map(tag => <span key={tag} className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] px-3 py-1 rounded-lg font-medium">{tag}</span>)}</div></div>
          <div className="border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-4"><div><span className="text-[10px] text-gray-400 uppercase">Valuation</span><h4 className="font-syne text-xl text-white font-bold">{modal.data.price}</h4></div><div className="flex gap-2"><a href="https://wa.me/919990345444?text=Greetings..." target="_blank" className="btn-futuristic-3d text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5">WhatsApp Inquiry</a></div></div>
        </div>
      </div>
    </>
  );
}
