// 'use client'; en haut du fichier sans import
'use client'; 

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Appliquer le mode sombre par défaut
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <html lang="fr" className="dark">
      <body className="bg-gray-900 text-white font-sans min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
