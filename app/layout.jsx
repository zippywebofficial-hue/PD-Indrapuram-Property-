export const metadata = {
  title: 'PD Indrapuram Property',
  description: 'Luxury Real Estate Portal',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
