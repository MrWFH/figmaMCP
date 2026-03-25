export default function Testimonial() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <section className="px-6 md:px-10 pb-[120px]">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Image */}
        <div className="md:flex-1 rounded-3.5xl overflow-hidden min-h-[300px] md:min-h-[400px]">
          <img
            src={`${imageBase}testimonial.png`}
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Quote */}
        <div className="md:flex-1 border-t border-divider flex flex-col justify-center gap-[50px] pl-0 md:pl-[50px] pt-10 md:pt-0">
          <blockquote className="font-display font-normal text-h2-mobile md:text-h2 text-headline">
            "I was skeptical, but Area has completely transformed the way I manage my
            business. The data visualizations are so clear and intuitive, and the
            platform is so easy to use. I can't imagine running my company without it."
          </blockquote>
          <div className="space-y-2">
            <p className="font-sans text-para text-headline">John Smith</p>
            <p className="font-mono text-cap text-caption">Head of Data</p>
          </div>
        </div>
      </div>
    </section>
  )
}
