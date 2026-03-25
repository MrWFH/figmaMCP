const STEPS = [
  {
    number: '01',
    title: 'Get Started',
    description: "With our intuitive setup, you're up and running in minutes.",
  },
  {
    number: '02',
    title: 'Customize and Configure',
    description: 'Adapt Area to your specific requirements and preferences.',
  },
  {
    number: '03',
    title: 'Grow Your Business',
    description: 'Make informed decisions to exceed your goals.',
  },
]

export default function HowTo() {
  return (
    <section id="howto" className="px-6 md:px-10 border-t border-divider pt-20 pb-[120px]">
      {/* Title row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-20">
        <h2 className="font-display font-normal text-h1-mobile md:text-h1 text-headline">
          Map Your Success
        </h2>
        <a
          href="#contact"
          className="inline-flex self-start bg-accent-2 text-black font-sans font-bold text-link rounded-pill px-[22px] py-[14px] hover:opacity-80 transition-opacity"
        >
          Discover More
        </a>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-5">
        {STEPS.map((step) => (
          <div key={step.number} className="border-t border-divider pt-[60px] pr-[30px] pb-5">
            <span className="font-sans font-normal text-stat-mobile md:text-stat text-accent-6 block mb-[60px]">
              {step.number}
            </span>
            <h3 className="font-display font-normal text-h3 text-headline mb-5">{step.title}</h3>
            <p className="font-sans text-para text-paragraph">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
