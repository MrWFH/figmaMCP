export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 border-t border-divider">
      <div className="py-[120px] px-0 md:px-[200px] lg:px-[300px]">
        <h2 className="font-display font-normal text-h1-mobile md:text-h1 text-headline">
          Connect with us
        </h2>
        <p className="font-sans text-para text-paragraph mt-10">
          Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
        </p>
        <a
          href="mailto:hello@area.app"
          className="inline-flex items-center gap-0.5 mt-10 bg-accent-1 text-white font-sans font-bold text-link rounded-pill px-[22px] py-[14px] hover:opacity-90 transition-opacity w-full justify-center"
        >
          Learn More
          <svg width="7" height="12" viewBox="0 0 7 12" fill="none" className="ml-1">
            <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  )
}
