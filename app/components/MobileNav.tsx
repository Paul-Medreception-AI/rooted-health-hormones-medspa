'use client'

import { useState, useEffect, useRef } from 'react'

const links = [
  { label: 'Memberships', href: '/memberships' },
  { label: 'Services', href: '/services' },
  { label: 'GLP-1 / Weight Loss', href: '/glp-1' },
  { label: 'MedSpa', href: '/medspa' },
  { label: 'NAD+', href: '/nad' },
  { label: 'About', href: '/about' },
  { label: 'Results', href: '/results' },
  { label: 'Quiz', href: '/quiz' },
  { label: 'Sign In', href: '/signin' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="md:hidden flex items-center" ref={menuRef}>
      {/* Hamburger / X button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        className="flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
      >
        <span
          className="block h-[2px] w-6 bg-[#1E1D1A] transition-all duration-300 origin-center"
          style={open ? { transform: 'translateY(7px) rotate(45deg)' } : {}}
        />
        <span
          className="block h-[2px] w-6 bg-[#1E1D1A] transition-all duration-300"
          style={open ? { opacity: 0 } : {}}
        />
        <span
          className="block h-[2px] w-6 bg-[#1E1D1A] transition-all duration-300 origin-center"
          style={open ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}}
        />
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: '#1E1D1A' }}
        >
          {/* Header row inside overlay */}
          <div className="flex justify-between items-center h-20 px-4 sm:px-6 border-b border-white/10">
            <a href="/" onClick={() => setOpen(false)}>
              <img
                src="/Rooted Logo.png"
                alt="Rooted Health"
                className="h-11 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </a>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            >
              <span
                className="block h-[2px] w-6 bg-white origin-center"
                style={{ transform: 'translateY(7px) rotate(45deg)' }}
              />
              <span className="block h-[2px] w-6 bg-white" style={{ opacity: 0 }} />
              <span
                className="block h-[2px] w-6 bg-white origin-center"
                style={{ transform: 'translateY(-7px) rotate(-45deg)' }}
              />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-start justify-center flex-1 px-8 gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-cormorant)] text-2xl text-white hover:text-[#1D9E75] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://rootedhealth.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-white px-8 py-3 rounded-lg transition-colors"
              style={{ backgroundColor: '#1D9E75' }}
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
