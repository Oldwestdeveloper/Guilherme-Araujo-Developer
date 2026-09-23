import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Guilherme Araujo | Desenvolvedor Full Stack Jr',
  description:
    'Professional portfolio of Guilherme Araujo, Junior Full Stack Developer with a degree in Systems Analysis and Development from UniDomBosco. Projects built with React, Next.js, Node.js, NestJS, and PostgreSQL/MySQL.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Guilherme Araujo | Desenvolvedor Full Stack Jr',
    description:
      'Professional portfolio of Guilherme Araujo, Junior Full Stack Developer with a degree in Systems Analysis and Development from UniDomBosco. Projects built with React, Next.js, Node.js, NestJS, and PostgreSQL/MySQL.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Araujo | Desenvolvedor Full Stack Jr',
    description:
      'Professional portfolio of Guilherme Araujo, Junior Full Stack Developer with a degree in Systems Analysis and Development from UniDomBosco. Projects built with React, Next.js, Node.js, NestJS, and PostgreSQL/MySQL.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}