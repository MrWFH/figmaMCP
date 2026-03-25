import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Specifications', href: '#specs' },
  { label: 'How-to', href: '#howto' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Top bar: Logo + Learn More */}
      <nav className="relative z-50 px-6 md:px-10">
        <div className="flex items-center justify-between py-5 pb-20">
          <a href="#" className="font-sans font-medium text-[30px] leading-[1.2] tracking-[-0.05em] text-black">
            Area
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-0.5 bg-accent-1 text-white font-sans font-bold text-link rounded-pill px-[22px] py-[14px] hover:opacity-90 transition-opacity"
          >
            Learn More
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="ml-1">
              <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-divider px-4 pb-6">
            <ul className="flex flex-col gap-4 pt-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-sans font-bold text-link text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1 bg-accent-1 text-white font-sans font-bold text-link rounded-pill px-[22px] py-[14px]"
                >
                  Learn More
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Floating pill nav (desktop) */}
      <div className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[60] items-center gap-[27px] bg-white/40 backdrop-blur-[30px] rounded-[100px] px-6 py-5">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans font-bold text-link text-black hover:opacity-70 transition-opacity"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}
