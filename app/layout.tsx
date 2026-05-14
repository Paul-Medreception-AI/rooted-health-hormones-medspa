import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
  description:
    'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo.',
  metadataBase: new URL('https://rootedhealthmember.com'),
  openGraph: {
    title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
    description:
      'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo.',
    url: 'https://rootedhealthmember.com',
    siteName: 'Rooted Health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
    description:
      'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} bg-[#F7F4EE] text-[#1E1D1A]`}
      >
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-[#1D9E75]" style={{ fontFamily: 'var(--font-cormorant)' }}>
              Rooted Health
            </div>
            <div className="flex gap-8" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              <a
                href="#memberships"
                className="text-[#1E1D1A] hover:text-[#1D9E75] transition-colors"
              >
                Memberships
              </a>
              <a
                href="#glp1"
                className="text-[#1E1D1A] hover:text-[#1D9E75] transition-colors"
              >
                GLP-1
              </a>
              <a
                href="#medspa"
                className="text-[#1E1D1A] hover:text-[#1D9E75] transition-colors"
              >
                MedSpa
              </a>
              <a
                href="#about"
                className="text-[#1E1D1A] hover:text-[#1D9E75] transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-[#1E1D1A] hover:text-[#1D9E75] transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}