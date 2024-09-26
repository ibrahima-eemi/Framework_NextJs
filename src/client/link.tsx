// src/client/link.tsx

'use client'; // Indique que ce fichier est un Client Component

import Link, { LinkProps } from 'next/link';
import { FC, ReactNode } from 'react';

// Interface pour définir les props du lien personnalisé
interface CustomLinkProps extends LinkProps {
  className?: string;  // Classe CSS personnalisée
  children: ReactNode; // Enfant(s) du lien
}

// Composant personnalisé Link sans balise <a>
const CustomLink: FC<CustomLinkProps> = ({ href, className, children, ...props }) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;
