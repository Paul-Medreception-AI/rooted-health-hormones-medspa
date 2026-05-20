export const metadata = {
  title: 'Sign In | Rooted Health Patient Portal',
  description: 'Sign in to your Rooted Health patient portal.',
}

export default function SignInPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-[45%] bg-gradient-to-br from-[#0F6E56] to-[#2aab7e] flex-col justify-end p-16">
        <div className="mb-auto pt-12">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            <path d="M16 4C16 4 8 10 8 18C8 22.4 11.6 26 16 26C20.4 26 24 22.4 24 18C24 10 16 4 16 4Z" fill="white" fillOpacity="0.9"/>
            <path d="M16 26C16 26 10 22 10 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl text-white font-light mb-4 leading-tight">
            Care that grows<br />with you.
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-xs">
            Your membership lives in your portal. Your member ID, plan, visits, and add-on discounts are scanned automatically at checkout — no paperwork.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center px-8 bg-[#F7F3EE]">
        <div className="w-full max-w-sm">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl text-[#1E1D1A] mb-2">
            Welcome back
          </h1>
          <p className="text-[#7A7870] text-sm mb-8">Sign in to your patient portal.</p>

          <div className="bg-[#E8F5EF] border border-[#C5EBD9] rounded-xl p-4 mb-6 text-sm text-[#0F6E56]">
            Your patient portal is managed through Jane App. Click below to sign in securely.
          </div>

          <a
            href="https://rootedhealth.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#1D9E75] hover:bg-[#0F6E56] text-white py-3.5 rounded-lg font-semibold transition-colors text-center block mb-4"
          >
            Sign in via Patient Portal
          </a>

          <p className="text-center text-[#7A7870] text-sm">
            Need an account?{' '}
            <a href="/signup" className="text-[#1D9E75] font-semibold hover:underline">
              Get started
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
