import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weights: ["400", "600", "700"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Hormone Therapy & Weight Loss Conway AR | Rooted Health",
  description:
    "Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.",
  metadataBase: new URL("https://rootedhealthmember.com"),
  openGraph: {
    title: "Hormone Therapy & Weight Loss Conway AR | Rooted Health",
    description:
      "Cash-pay hormone therapy, GLP-1 weight loss, Botox, and primary care in Conway, AR. Memberships from $99/mo. No insurance required.",
    url: "https://rootedhealthmember.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-cream text-ink font-dm-sans">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="/"
                className="font-cormorant text-2xl font-bold text-primary hover:text-dark transition-colors"
              >
                Rooted Health
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="/memberships"
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                Memberships
              </a>
              <a
                href="/glp-1"
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                GLP-1
              </a>
              <a
                href="/medspa"
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                MedSpa
              </a>
              <a
                href="/about"
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-ink hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <a
                href="/contact"
                className="inline-block bg-primary text-white px-4 py-2 rounded text-sm font-medium hover:bg-dark transition-colors"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="bg-dark text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-cormorant text-xl font-bold text-primary mb-4">
                  Rooted Health
                </h3>
                <p className="text-gray-300 text-sm">
                  Hormone therapy, weight loss, and aesthetic services in Conway, AR.
                </p>
              </div>
              <div>
                <h4 className="font-cormorant text-lg font-semibold mb-4">
                  Provider
                </h4>
                <p className="text-gray-300 text-sm">LaDonna Walker, NP</p>
                <p className="text-gray-300 text-sm">Conway, AR</p>
              </div>
              <div>
                <h4 className="font-cormorant text-lg font-semibold mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="/memberships"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Memberships
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-xs text-gray-400 text-center mb-4">
                HIPAA Disclaimer: This website and communications are confidential
                and intended solely for use by authorized individuals. If you are
                not the intended recipient, do not access, use, or disclose any
                information. All health information is protected under HIPAA and
                applicable state laws.
              </p>
              <p className="text-xs text-gray-500 text-center">
                &copy; {new Date().getFullYear()} Rooted Health. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}