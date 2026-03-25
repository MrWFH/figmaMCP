const LOGOS = [
  { src: '/images/logo-1.png', alt: 'Partner 1' },
  { src: '/images/logo-2.png', alt: 'Partner 2' },
  { src: '/images/logo-3.png', alt: 'Partner 3' },
  { src: '/images/logo-4.png', alt: 'Partner 4' },
  { src: '/images/logo-5.png', alt: 'Partner 5' },
  { src: '/images/logo-6.png', alt: 'Partner 6' },
]

export default function TrustedBy() {
  return (
    <section className="px-6 md:px-10 py-[50px]">
      <p className="font-sans text-para text-paragraph mb-[30px]">Trusted by:</p>
      <div className="flex flex-wrap items-center justify-center gap-10">
        {LOGOS.map((logo) => (
          <div key={logo.src} className="w-[120px] md:w-[154px] h-[60px] md:h-[84px] flex items-center justify-center p-5">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-w-full max-h-full object-contain opacity-60"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
