import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  variable: '--font-cormorant' 
})

const dmSans = DM_Sans({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600'], 
  variable: '--font-dm-sans' 
})

export const metadata: Metadata = {
  icons: {
    icon: [{ url: '/Rooted-Logo-favicon.png', type: 'image/png' }],
    apple: '/Rooted-Logo-favicon.png',
    shortcut: '/Rooted-Logo-favicon.png',
  },
  title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
  description: 'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.',
  metadataBase: new URL('https://rootedhealthmember.janeapp.com'),
  openGraph: {
    icons: {
    icon: [{ url: '/Rooted-Logo-favicon.png', type: 'image/png' }],
    apple: '/Rooted-Logo-favicon.png',
    shortcut: '/Rooted-Logo-favicon.png',
  },
  title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
    description: 'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.',
    url: 'https://rootedhealthmember.janeapp.com',
    siteName: 'Rooted Health Hormones & MedSpa',
    locale: 'en_US',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[#F7F4EE] antialiased">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2DDD4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <a href="/" className="flex items-center flex-shrink-0"><img src="/Rooted Logo.png" alt="Rooted Health" className="h-11 w-auto" /></a>
              <nav className="hidden md:flex items-center gap-8">
                <a href="/memberships" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  Memberships
                </a>
                <a href="/services" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  Services
                </a>
                <a href="/quiz" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  Quiz
                </a>
                <a href="/about" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  About
                </a>
                <a href="/contact" className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-[#1E1D1A] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold mb-4 text-[#1D9E75]">
                  Rooted Health
                </h3>
                <p className="text-gray-300 mb-4">
                  Hormone & Metabolic Medicine, GLP-1 Weight Loss, MedSpa, and Primary Care DPC
                </p>
                <p className="text-gray-400 text-sm">
                  LaDonna Walker, NP<br />
                  Conway, Arkansas
                </p>
              </div>
              
              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a href="/memberships" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      Memberships
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/quiz" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      Take Our Quiz
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-[family-name:var(--font-cormorant)] text-lg font-semibold mb-4">
                  Memberships
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Virtual DPC - $99/mo</li>
                  <li>Hormone Optimization - $149-199/mo</li>
                  <li>Elite GLP-1 - $349/mo</li>
                </ul>
                <div className="mt-6">
                  <a href="/contact" className="text-[#1D9E75] hover:text-white font-semibold transition-colors">
                    Get Started Today
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400 text-sm mb-4">
                HIPAA Compliance Notice: Rooted Health Hormones & MedSpa is committed to protecting your health information. 
                All patient data is handled in accordance with HIPAA regulations. This website does not collect personal health 
                information without your explicit consent. For questions about our privacy practices, please contact our office.
              </p>
              <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
                <p>
                  &copy; {new Date().getFullYear()} Rooted Health Hormones & MedSpa. All rights reserved.
                </p>
                <p className="mt-2 md:mt-0">
                  rootedhealthmember.com
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}