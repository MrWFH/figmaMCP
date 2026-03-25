const FEATURES = [
  { number: '01', text: 'Spot Trends in Seconds: No more digging through numbers.' },
  { number: '02', text: 'Get Everyone on the Same Page: Share easy-to-understand reports with your team.' },
  { number: '03', text: 'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.' },
  { number: '04', text: 'Your Global Snapshot: Get a quick, clear overview of your entire operation.' },
]

export default function Features() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <section className="px-6 md:px-10 pb-[120px]">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left: text + list */}
        <div className="flex-1 border-t border-divider pt-[60px] pb-20">
          <div className="pr-0 lg:pr-20">
            <h2 className="font-display font-normal text-h1-mobile md:text-h1 text-headline">
              See the Big Picture
            </h2>
            <p className="font-sans text-para text-paragraph mt-10">
              Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
            </p>
          </div>

          <div className="mt-10 space-y-0">
            {FEATURES.map((f) => (
              <div key={f.number} className="border-t border-divider flex items-center gap-[30px] py-5 pr-0 lg:pr-20">
                <span className="font-sans text-para text-paragraph shrink-0">{f.number}</span>
                <p className="font-sans text-para text-headline">{f.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex mt-10 bg-accent-2 text-black font-sans font-bold text-link rounded-pill px-[22px] py-[14px] hover:opacity-80 transition-opacity"
          >
            Discover More
          </a>
        </div>

        {/* Right: feature image */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="rounded-3.5xl overflow-hidden flex-1 min-h-[400px]">
            <img
              src={`${imageBase}feature-carousel.png`}
              alt="Feature visualization"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
