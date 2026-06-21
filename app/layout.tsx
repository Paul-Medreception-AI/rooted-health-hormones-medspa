import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import MobileNav from './components/MobileNav'

import { GoogleAnalytics } from '@next/third-parties/google'
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


const GA_ID = process.env.NEXT_PUBLIC_GA_ID

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
    title: 'Hormone Therapy & Weight Loss Conway AR | Rooted Health',
    description: 'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.',
    url: 'https://rootedhealthmember.janeapp.com',
    siteName: 'Rooted Health Hormones & MedSpa',
    locale: 'en_US',
    type: 'website',
  }
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'Rooted Health Hormones & MedSpa',
  description: 'Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.',
  url: 'https://www.therootedhealth.net',
  telephone: '+14798806148',
  email: 'rootedhealthormones@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1120 Hogan Lane, Suite 2B',
    addressLocality: 'Conway',
    addressRegion: 'AR',
    postalCode: '72032',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.0887,
    longitude: -92.4421,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$99–$349/mo',
  medicalSpecialty: ['Hormone Therapy', 'Weight Loss Medicine', 'Primary Care', 'MedSpa'],
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, HSA, FSA',
  sameAs: [
    'https://www.instagram.com/rootedhealthllc',
    'https://www.facebook.com/rootedhealthllc',
    'https://www.therootedhealth.com',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-dm-sans)] bg-[#F7F4EE] antialiased">
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E2DDD4]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <a href="/" className="flex items-center flex-shrink-0"><img src="/Rooted Logo.png" alt="Rooted Health Hormones & MedSpa, Conway AR" className="h-11 w-auto" /></a>
              <MobileNav />
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
                <a href="/signin" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  Sign In
                </a>
                <a href="/portal" className="text-[#1E1D1A] hover:text-[#1D9E75] font-medium transition-colors">
                  Member Portal
                </a>
                <a
                  href="https://rootedhealth.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1D9E75] hover:bg-[#0F6E56] text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                >
                  Book Now
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
                    <a href="/results" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      Results
                    </a>
                  </li>
                  <li>
                    <a href="/nad" className="text-gray-300 hover:text-[#1D9E75] transition-colors">
                      NAD+
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
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li><a href="/privacy" className="text-gray-300 hover:text-[#1D9E75] transition-colors">Privacy Policy</a></li>
                  <li><a href="/hipaa" className="text-gray-300 hover:text-[#1D9E75] transition-colors">HIPAA Notice</a></li>
                  <li><a href="/terms" className="text-gray-300 hover:text-[#1D9E75] transition-colors">Terms of Service</a></li>
                  <li><a href="/sms-terms" className="text-gray-300 hover:text-[#1D9E75] transition-colors">SMS Terms</a></li>
                  <li><a href="/good-faith-estimate" className="text-gray-300 hover:text-[#1D9E75] transition-colors">Good Faith Estimate</a></li>
                  <li><a href="/telehealth-consent" className="text-gray-300 hover:text-[#1D9E75] transition-colors">Telehealth Consent</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8 space-y-4">
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-gray-400">Not insurance.</strong> Rooted Health membership is a direct primary care arrangement and does not constitute health insurance, a health plan, or a qualified health benefit under Arkansas or federal law (Ark. Code § 23-99-103). Membership does not replace catastrophic or major-medical coverage.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-gray-400">Scope of practice.</strong> Outpatient services only. We do not provide emergency, inpatient, surgical, imaging, or specialist care. Telehealth services are available only to patients physically located in Arkansas at the time of the visit. Controlled substances require an in-person evaluation consistent with the federal Ryan Haight Act and Arkansas controlled substances rules.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-gray-400">No guaranteed outcomes.</strong> Hormone therapy, weight-management medications, peptides, IV therapy, and aesthetic treatments carry individual risks discussed during informed consent. Results vary and are not guaranteed. This website is for general information and does not constitute medical advice or establish a provider-patient relationship.
              </p>
              <p className="text-gray-500 text-xs leading-relaxed">
                This website does not collect protected health information. All clinical intake is handled through a secure patient portal.
              </p>
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 pt-2 text-gray-500 text-xs">
                <div>
                  <p>&copy; {new Date().getFullYear()} Rooted Health Hormones & MedSpa, LLC. All rights reserved.</p>
                  <p className="mt-1">LaDonna Walker, MSN, APRN, FNP-BC &bull; Collaborating physician: Abrar Ashraf Khan, MD (Ark. Code § 17-87-310)</p>
                </div>
                <p className="shrink-0">Conway, AR &bull; (479) 880-6148</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}

    </html>
  )
}