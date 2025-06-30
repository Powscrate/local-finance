import React from 'react';
import './globals.css';  // Les styles globaux

// Ce composant gère la structure HTML globale
const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>LocalFinance</title>
      </head>
      <body className="bg-white">
        {children} {/* Le contenu spécifique à chaque page sera ici */}
      </body>
    </html>
  );
};

export default RootLayout;
