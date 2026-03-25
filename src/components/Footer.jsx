const FOOTER_LINKS = [
  { label: 'Benefits', href: '#benefits' },
  { label: 'Specifications', href: '#specs' },
  { label: 'How-to', href: '#howto' },
]

export default function Footer() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <footer className="px-6 md:px-10 border-t border-divider pt-10 pb-5">
      {/* Top: links */}
      <div className="flex items-center justify-between mb-20">
        <div className="flex items-center gap-[27px]">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans font-bold text-link text-black hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom: credits */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div className="flex items-end gap-10">
          <img src={`${imageBase}logo.svg`} alt="Area" className="h-[70px]" />
          <div className="flex items-center gap-4 font-mono text-cap text-caption">
            <span>© Area.</span>
            <span>2025</span>
          </div>
        </div>
        <p className="font-mono text-cap text-caption">All Rights Reserved</p>
      </div>
    </footer>
  )
}
