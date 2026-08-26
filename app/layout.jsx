export const metadata = {
  title: 'PD INDIRAPURAM | Next-Gen Luxury Real Estate Portal',
  description: 'Kingdom of Elite Estates - Buy, Sell & Rent Luxury Apartments, Penthouses, Commercial Buildings & Lands in Ghaziabad.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          body { font-family: 'Outfit', sans-serif; background-color: #030604; color: #F5F5F7; }
          .font-syne { font-family: 'Syne', sans-serif; }
          .gold-gradient { background: linear-gradient(135deg, #FFE885 0%, #D4AF37 40%, #AA7C11 80%, #F5D061 100%); }
          .gold-text { background: linear-gradient(135deg, #FFE885 0%, #D4AF37 50%, #F5D061 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .futuristic-card { background: rgba(10, 20, 15, 0.75); backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px); border: 1px solid rgba(212, 175, 55, 0.25); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255, 232, 133, 0.2); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
          .btn-futuristic-3d { position: relative; background: linear-gradient(180deg, rgba(255,232,133,0.15) 0%, rgba(212,175,55,0.05) 100%); border: 1.5px solid #D4AF37; box-shadow: 0 6px 20px rgba(212, 175, 55, 0.25), inset 0 2px 4px rgba(255,255,255,0.3); backdrop-filter: blur(15px); transition: all 0.3s ease; }
          .btn-futuristic-3d:hover { transform: translateY(-4px) scale(1.03); border-color: #FFE885; box-shadow: 0 12px 35px rgba(212, 175, 55, 0.6), inset 0 2px 8px rgba(255,255,255,0.6); background: linear-gradient(180deg, rgba(255,232,133,0.3) 0%, rgba(212,175,55,0.2) 100%); }
          .tab-btn.active { background: linear-gradient(135deg, #FFE885 0%, #D4AF37 100%); color: #000; font-weight: 800; box-shadow: 0 0 25px rgba(212, 175, 55, 0.8); }
          /* Ensure modal doesn't collapse layout */
          #modal { transition: opacity 0.3s ease; }
          #modal.hidden { opacity: 0; pointer-events: none; visibility: hidden; display: flex !important;}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
