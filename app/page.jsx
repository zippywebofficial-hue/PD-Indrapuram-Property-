'use client';

import React, { useState, useEffect } from 'react';

export default function Page() {
  const [activeTab, setActiveTab] = useState('properties-tab');
  
  // Search Filter State
  const [searchType, setSearchType] = useState('All');
  const [searchBudget, setSearchBudget] = useState('All');
  
  // ROI Calculator State
  const [investVal, setInvestVal] = useState(2.5);
  const [yieldRate, setYieldRate] = useState(7.5);
  const [calcResults, setCalcResults] = useState({ annual: '18.75', future: '3.63' });

  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);
  const [emiResult, setEmiResult] = useState(0);

  // Modal State
  const [modal, setModal] = useState({ show: false, data: { title: '', loc: '', desc: '', price: '', img: '', tags: [] } });

  // ROI Calculation
  useEffect(() => {
    let annual = (investVal * 10000000 * (yieldRate / 100)) / 100000;
    let future = investVal * Math.pow(1 + 0.08, 5);
    setCalcResults({ annual: annual.toFixed(2), future: future.toFixed(2) });
  }, [investVal, yieldRate]);

  // EMI Calculation
  useEffect(() => {
    let r = interestRate / 12 / 100;
    let n = tenureYears * 12;
    let emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setEmiResult(Math.round(emi));
  }, [loanAmount, interestRate, tenureYears]);

  const switchTab = (tabId) => setActiveTab(tabId);
  const openModal = (data) => setModal({ show: true, data });
  const closeModal = () => setModal({ ...modal, show: false });

  const properties = [
    { title: "Apex D'Rio Luxury Duplex", category: 'Flat', budgetRange: '2-5Cr', loc: 'Indirapuram, Ghaziabad', desc: 'Private glass balconies, duplex penthouses, floating spiral staircases, double-height ceilings, and infinity pools.', price: '₹2.5 Cr - ₹6.5 Cr', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', tags: ['Infinity Pool', 'Duplex Sky Villa', 'Private Elevator', '24/7 Security'] },
    { title: 'Saya Gold Avenue', category: 'Flat', budgetRange: '1-2Cr', loc: 'Vaibhav Khand, Indirapuram', desc: 'Premium residential towers featuring high-speed elevators, custom ceiling lights, Italian marble flooring, and 24/7 high-tech security.', price: '₹1.8 Cr - ₹4.2 Cr', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80', tags: ['Italian Marble', 'High-Speed Elevators', 'Clubhouse Access', 'Covered Parking'] },
    { title: 'Commercial Retail Plaza', category: 'Commercial', budgetRange: '5Cr+', loc: 'Shakti Khand / Ahinsa Khand', desc: 'Multi-floor commercial building, prime road facing, ideal for corporate headquarters, showrooms, or high-yield rental returns.', price: '₹8.5 Cr - ₹25.0 Cr', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', tags: ['Main Road Facing', 'High Rental Yield', 'Multi-Level Parking', '100% Power Backup'] },
    { title: 'Agricultural Lands & Khet', category: 'Land', budgetRange: 'Under1Cr', loc: 'NCR Outskirts & Prime Expressway Zones', desc: 'Fertile agricultural land, highway connectivity, clear title deeds, ideal for farmhouses, future developments, or long-term land banking.', price: '₹50 Lakhs per Acre onwards', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80', tags: ['Clear Title Deed', 'Highway Access', 'Water Connection', 'Fertile Soil'] },
    { title: '5BHK Rooftop Sky Villa', category: 'Flat', budgetRange: '2-5Cr', loc: 'Indirapuram Exclusive', desc: 'Private outdoor gazebos, rooftop lounge lighting, marble bathrooms with glass showers, and home theater walls.', price: '₹3.5 Cr - ₹8.0 Cr', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', tags: ['Private Rooftop Gazebo', 'Home Theater Wall', 'Smart Home Automation', 'Jacuzzi'] },
    { title: 'Freehold Residential Plots', category: 'Land', budgetRange: '1-2Cr', loc: 'Ghaziabad Sector Zones', desc: 'GDA approved freehold residential plots, Gated community, ready for immediate construction.', price: '₹1.2 Cr onwards', img: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80', tags: ['GDA Approved', 'Freehold Title', 'Gated Community', 'Immediate Registry'] }
  ];

  const filteredProperties = properties.filter((p) => {
    const matchType = searchType === 'All' || p.category === searchType;
    const matchBudget = searchBudget === 'All' || p.budgetRange === searchBudget;
    return matchType && matchBudget;
  });

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-[#030604]/85 border-b border-[#D4AF37]/30 px-4 py-3.5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#D4AF37] animate-ping shadow-[0_0_20px_#D4AF37]"></div>
          <span className="font-syne text-xl md:text-2xl tracking-widest gold-text font-extrabold">PD INDIRAPURAM</span>
        </div>
        <div className="flex gap-2.5">
          <a href="https://wa.me/919990345444?text=Greetings!%20I%20am%20interested%20in%20a%20VIP%20Property%20Consultation." target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded-xl font-extrabold text-[11px] tracking-wider uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:scale-105 transition"> WhatsApp VIP </a>
          <a href="tel:9990345444" className="gold-gradient text-black px-4 py-2 rounded-xl font-extrabold text-[11px] tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:scale-105 transition"> 👑 Direct Desk </a>
        </div>
      </nav>

      {/* Hero Section with Search Engine */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4 pt-24 pb-12 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-modern-real-estate-buildings-4246-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#030604] z-0"></div>
        <div className="max-w-5xl z-10 relative">
          <div className="inline-block border border-[#D4AF37] backdrop-blur-xl bg-black/60 px-6 py-2 rounded-full mb-5 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <span className="gold-text text-xs uppercase tracking-widest font-bold">🏆 Enterprise Real Estate Engine | Luxury Estates & Lands</span>
          </div>
          <h1 className="font-syne text-4xl md:text-7xl font-extrabold text-white tracking-wide leading-tight mb-4"> PD INDIRAPURAM <br /> <span className="italic font-normal gold-text"> Kingdom of Elite Estates </span> </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-2xl mx-auto mb-8 font-light leading-relaxed"> Ghaziabad, UP | Buy, Sell & Rent Luxury Apartments, Penthouses, Commercial Towers & Prime Agricultural Lands (Khet/Plots). </p>

          {/* Advanced Multi-Filter Search Bar */}
          <div className="futuristic-card rounded-2xl p-4 md:p-6 mb-8 max-w-4xl mx-auto border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-left text-[10px] text-gray-400 font-bold uppercase mb-1">Property Type</label>
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="w-full bg-black/80 border border-[#D4AF37]/40 text-white text-xs rounded-xl p-3 outline-none focus:border-[#D4AF37]">
                  <option value="All">All Categories</option>
                  <option value="Flat">Luxury Flats & Penthouses</option>
                  <option value="Commercial">Commercial Buildings</option>
                  <option value="Land">Agricultural Land / Khet / Plots</option>
                </select>
              </div>
              <div>
                <label className="block text-left text-[10px] text-gray-400 font-bold uppercase mb-1">Budget Range</label>
                <select value={searchBudget} onChange={(e) => setSearchBudget(e.target.value)} className="w-full bg-black/80 border border-[#D4AF37]/40 text-white text-xs rounded-xl p-3 outline-none focus:border-[#D4AF37]">
                  <option value="All">All Budgets</option>
                  <option value="Under1Cr">Under ₹1 Cr</option>
                  <option value="1-2Cr">₹1 Cr - ₹2 Cr</option>
                  <option value="2-5Cr">₹2 Cr - ₹5 Cr</option>
                  <option value="5Cr+">₹5 Cr+</option>
                </select>
              </div>
              <div className="flex items-end">
                <button onClick={() => switchTab('properties-tab')} className="w-full btn-futuristic-3d text-black gold-gradient font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wider">Search Estates ➔</button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => switchTab('properties-tab')} className="btn-futuristic-3d text-white px-8 py-4 rounded-2xl font-extrabold text-xs tracking-widest uppercase">🏢 Portfolio</button>
            <button onClick={() => switchTab('emi-tab')} className="btn-futuristic-3d text-[#D4AF37] px-8 py-4 rounded-2xl font-extrabold text-xs tracking-widest uppercase">🏦 Loan Calculator</button>
            <button onClick={() => switchTab('calculator-tab')} className="btn-futuristic-3d text-[#D4AF37] px-8 py-4 rounded-2xl font-extrabold text-xs tracking-widest uppercase">📊 Yield & ROI Engine</button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4 max-w-7xl mx-auto">
        <div className="flex overflow-x-auto gap-3 pb-4 justify-start md:justify-center border-b border-[#D4AF37]/20">
          <button onClick={() => switchTab('properties-tab')} className={`tab-btn ${activeTab === 'properties-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>🏢 Property Catalogue</button>
          <button onClick={() => switchTab('emi-tab')} className={`tab-btn ${activeTab === 'emi-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>🏦 Loan & EMI Engine</button>
          <button onClick={() => switchTab('calculator-tab')} className={`tab-btn ${activeTab === 'calculator-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>📈 Yield & ROI Calculator</button>
          <button onClick={() => switchTab('location-tab')} className={`tab-btn ${activeTab === 'location-tab' ? 'active' : 'text-gray-300'} border border-[#D4AF37]/40 px-6 py-3 rounded-2xl text-xs uppercase tracking-wider font-extrabold whitespace-nowrap transition`}>📍 Locality Map & Hub</button>
        </div>

        {/* Tab 1: Properties List */}
        {activeTab === 'properties-tab' && (
          <div className="py-8">
            <h2 className="font-syne text-3xl md:text-5xl gold-text text-center mb-2 uppercase font-extrabold">Exclusive Property Catalogue</h2>
            <p className="text-center text-gray-400 text-xs mb-10">Filtered View ({filteredProperties.length} Premier Listed Options)</p>
            <div className="grid md:grid-cols-3 gap-8">
              {filteredProperties.map((p, idx) => (
                <div key={idx} className="futuristic-card rounded-3xl overflow-hidden cursor-pointer group" onClick={() => openModal(p)}>
                  <div className="relative overflow-hidden">
                    <img src={p.img} className="w-full h-60 object-cover group-hover:scale-110 transition duration-500" />
                    <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-[#D4AF37] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">{p.category}</span>
                  </div>
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

        {/* Tab 2: Bank Loan EMI Engine */}
        {activeTab === 'emi-tab' && (
          <div className="py-8">
            <div className="futuristic-card rounded-3xl p-8 md:p-12 max-w-3xl mx-auto border border-[#D4AF37]/40">
              <span className="gold-text text-xs font-mono uppercase tracking-widest font-bold">Bank Integration Engine</span>
              <h3 className="font-syne text-3xl md:text-4xl text-white mt-1 mb-6 font-bold">Smart Home Loan & EMI Calculator</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 uppercase font-bold">Loan Amount (₹): {loanAmount.toLocaleString('en-IN')}</label>
                    <input type="range" min="1000000" max="50000000" step="500000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 uppercase font-bold">Interest Rate (%): {interestRate}%</label>
                    <input type="range" min="6.5" max="12.5" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1 uppercase font-bold">Tenure: {tenureYears} Years</label>
                    <input type="range" min="5" max="30" step="1" value={tenureYears} onChange={(e) => setTenureYears(Number(e.target.value))} className="w-full accent-[#D4AF37]" />
                  </div>
                </div>
                <div className="bg-black/90 p-6 rounded-2xl border border-[#D4AF37]/50 flex flex-col justify-center text-center shadow-[0_0_25px_rgba(212,175,55,0.2)]">
                  <span className="text-gray-400 text-xs uppercase font-bold">Estimated Monthly EMI</span>
                  <h4 className="font-syne text-3xl md:text-4xl gold-text font-extrabold mt-2 mb-4">₹ {emiResult.toLocaleString('en-IN')} / mo</h4>
                  <p className="text-[10px] text-gray-400">Pre-approved home loans available via HDFC, SBI & ICICI Bank partners.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Yield Calculator */}
        {activeTab === 'calculator-tab' && (
          <div className="py-8">
            <div className="futuristic-card rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
              <span className="gold-text text-xs font-mono uppercase tracking-widest font-bold">Financial Intelligence Engine</span>
              <h3 className="font-syne text-3xl md:text-4xl text-white mt-1 mb-6 font-bold">Yield & ROI Forecast Engine</h3>
              <div className="space-y-5">
                <div><label className="block text-gray-400 text-xs mb-2 uppercase font-bold">Estimated Investment Value (₹ Cr)</label><input type="number" value={investVal} onChange={(e) => setInvestVal(e.target.value)} className="w-full bg-black/60 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#D4AF37] outline-none" /></div>
                <div><label className="block text-gray-400 text-xs mb-2 uppercase font-bold">Expected Annual Yield Rate (%)</label><input type="number" value={yieldRate} onChange={(e) => setYieldRate(e.target.value)} className="w-full bg-black/60 border border-white/20 rounded-2xl px-5 py-4 text-sm text-white focus:border-[#D4AF37] outline-none" /></div>
                <div className="border-t border-white/10 pt-6 mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-black/80 p-5 rounded-2xl border border-[#D4AF37]/40 shadow-inner"><span className="text-gray-400 text-[10px] uppercase font-bold">Est. Annual Income</span><h4 className="font-syne text-2xl md:text-3xl gold-text font-bold mt-1">₹ {calcResults.annual} Lakhs</h4></div>
                  <div className="bg-black/80 p-5 rounded-2xl border border-[#D4AF37]/40 shadow-inner"><span className="text-gray-400 text-[10px] uppercase font-bold">5-Year Capital Forecast</span><h4 className="font-syne text-2xl md:text-3xl gold-text font-bold mt-1">₹ {calcResults.future} Cr</h4></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Location Map */}
        {activeTab === 'location-tab' && (
          <div className="py-8">
            <div className="futuristic-card rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
              <span className="gold-text text-xs font-mono uppercase tracking-widest font-bold">Geographic Intelligence</span>
              <h3 className="font-syne text-3xl text-white font-bold mt-1 mb-6">Prime Indirapuram & Ghaziabad Sector Map</h3>
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/40 h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.114751381285!2d77.36881765!3d28.6289291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456ef36d9f%3A0x3b71bf87f8e8f801!2sIndirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" className="w-full h-full border-0" allowFullScreen="" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* VIP Private Booking Form Section (Lead Engine) */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="futuristic-card rounded-3xl p-8 md:p-12 border border-[#D4AF37]">
          <span className="gold-text text-xs font-mono uppercase tracking-widest font-bold">Direct Desk Access</span>
          <h2 className="font-syne text-3xl md:text-4xl text-white font-bold mt-2 mb-4">Book Private Site Visit & Consultation</h2>
          <p className="text-gray-400 text-xs mb-8">Leave your details and our senior director desk will get in touch within 15 minutes.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Request Received! PD Indirapuram team will contact you shortly.'); }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Full Name" required className="bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
            <input type="tel" placeholder="Phone Number" required className="bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37]" />
            <select className="bg-black/80 border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#D4AF37] md:col-span-2">
              <option value="">Interested Property Category</option>
              <option value="Luxury Flat">Luxury Flat / Penthouse</option>
              <option value="Commercial">Commercial Building / Shop</option>
              <option value="Land">Agricultural Land / Khet / Plot</option>
            </select>
            <button type="submit" className="md:col-span-2 btn-futuristic-3d gold-gradient text-black font-extrabold text-xs py-4 rounded-xl uppercase tracking-widest mt-2">Request VIP Callback 👑</button>
          </form>
        </div>
      </section>

      {/* Modal Details View */}
      {modal.show && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-50 flex items-center justify-center p-4">
          <div className="futuristic-card max-w-xl w-full rounded-3xl p-6 md:p-8 relative border border-[#D4AF37] max-h-[90vh] overflow-y-auto">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10">✕</button>
            <div className="relative rounded-2xl overflow-hidden mb-5"><img src={modal.data.img} className="w-full h-56 object-cover" /></div>
            <span className="gold-text text-[10px] font-mono uppercase font-bold">Developer Specification Sheet</span>
            <h3 className="font-syne text-3xl text-white font-bold mt-1">{modal.data.title}</h3>
            <p className="text-xs gold-text mb-3 font-semibold">{modal.data.loc}</p>
            <p className="text-gray-300 text-xs leading-relaxed mb-4 font-light">{modal.data.desc}</p>
            <div className="mb-6"><p className="text-[10px] text-gray-400 uppercase font-bold mb-2">Key Amenities:</p><div className="flex flex-wrap gap-2">{modal.data.tags.map(tag => <span key={tag} className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] px-3 py-1 rounded-lg font-medium">{tag}</span>)}</div></div>
            <div className="border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-4"><div><span className="text-[10px] text-gray-400 uppercase font-bold">Valuation</span><h4 className="font-syne text-xl text-white font-bold">{modal.data.price}</h4></div><div><a href="https://wa.me/919990345444?text=Greetings..." target="_blank" className="btn-futuristic-3d text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase flex items-center gap-1.5">WhatsApp Inquiry</a></div></div>
          </div>
        </div>
      )}
    </>
  );
}
