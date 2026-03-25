const AREA_FEATURES = [
  { text: 'Ultra-fast browsing', check: true },
  { text: 'Advanced AI insights', check: true },
  { text: 'Seamless integration', check: true },
  { text: 'Advanced AI insights', check: true },
  { text: 'Ultra-fast browsing', check: true },
  { text: 'Full UTF-8 support', check: true },
]

const WEBSURGE_FEATURES = [
  { text: 'Fast browsing', check: true },
  { text: 'Basic AI recommendations', check: true },
  { text: 'Restricts customization', check: true },
  { text: 'Basic AI insights', check: false },
  { text: 'Fast browsing', check: true },
  { text: 'Potential display errors', check: false },
]

const HYPERVIEW_FEATURES = [
  { text: 'Moderate speeds', check: false },
  { text: 'No AI assistance', check: false },
  { text: 'Steep learning curve', check: false },
  { text: 'No AI assistance', check: false },
  { text: 'Moderate speeds', check: false },
  { text: 'Partial UTF-8 support', check: false },
]

function TableColumn({ name, features, highlighted }) {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <div
      className={`flex-1 min-w-[240px] flex flex-col ${
        highlighted ? 'bg-white border border-divider rounded-2.5xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]' : ''
      }`}
    >
      <div className="px-[30px] py-10 border-b border-accent-6">
        <span
          className={`font-medium text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.08em] ${
            highlighted ? 'font-sans text-black' : 'text-accent-5'
          }`}
          style={{ fontFamily: highlighted ? undefined : name === 'WebSurge' ? '"Rethink Sans"' : '"Reddit Mono"' }}
        >
          {name}
        </span>
      </div>
      {features.map((feat, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-[30px] py-8 border-b border-divider last:border-b-0"
        >
          {feat.check ? (
            <img src={`${imageBase}icon-check.svg`} alt="Yes" className="w-3.5 h-3.5 shrink-0" />
          ) : (
            <img src={`${imageBase}icon-close.svg`} alt="No" className="w-3.5 h-3.5 shrink-0" />
          )}
          <span className="font-mono text-cap text-headline">{feat.text}</span>
        </div>
      ))}
    </div>
  )
}

export default function Specs() {
  return (
    <section id="specs" className="px-6 md:px-10 pb-[120px]">
      {/* Content header */}
      <div className="border-t border-accent-6 pt-20 pb-10">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="font-mono text-cap text-caption mb-10">Specs</p>
          <h2 className="font-display font-normal text-h1-mobile md:text-h1 text-headline">
            Why Choose Area?
          </h2>
          <p className="font-sans text-para text-paragraph mt-10">
            You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
          </p>
          <a
            href="#contact"
            className="inline-flex mt-10 bg-accent-2 text-black font-sans font-bold text-link rounded-pill px-[22px] py-[14px] hover:opacity-80 transition-opacity"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Table */}
      <div className="flex overflow-x-auto rounded-2.5xl">
        <TableColumn name="Area" features={AREA_FEATURES} highlighted />
        <TableColumn name="WebSurge" features={WEBSURGE_FEATURES} />
        <TableColumn name="HyperView" features={HYPERVIEW_FEATURES} />
      </div>
    </section>
  )
}
