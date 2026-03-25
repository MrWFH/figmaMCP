const BENEFITS = [
  {
    icon: '/images/icon-cable.svg',
    title: 'Amplify Insights',
    description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
  },
  {
    icon: '/images/icon-earth.svg',
    title: 'Control Your Global Presence',
    description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
  },
  {
    icon: '/images/icon-account.svg',
    title: 'Remove Language Barriers',
    description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
  },
  {
    icon: '/images/icon-chart.svg',
    title: 'Visualize Growth',
    description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="px-6 md:px-10 pb-[120px]">
      {/* Header */}
      <div className="border-t border-divider pt-20 pb-[60px]">
        <div className="max-w-[800px]">
          <p className="font-mono text-cap text-caption text-center mb-[50px]">Benefits</p>
          <h2 className="font-display font-normal text-h1-mobile md:text-h1 text-headline">
            We've cracked the code.
          </h2>
          <p className="font-sans text-para text-paragraph mt-[50px]">
            Area provides real insights, without the data overload.
          </p>
        </div>

        {/* Icon lockups */}
        <div className="grid sm:grid-cols-2 gap-x-5 mt-10">
          {BENEFITS.map((b) => (
            <div key={b.title} className="border-t border-divider py-10 pr-5">
              <div className="flex items-start gap-6">
                <img src={b.icon} alt="" className="w-6 h-6 shrink-0 mt-1" />
                <div className="space-y-5">
                  <h3 className="font-display font-normal text-h3 text-headline">{b.title}</h3>
                  <p className="font-sans text-para text-paragraph">{b.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div className="rounded-3.5xl overflow-hidden" style={{ height: 620 }}>
        <img
          src="/images/hero-benefits.png"
          alt="Area dashboard visualization"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  )
}
