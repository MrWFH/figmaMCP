export default function HeroBottom() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <section className="px-6 md:px-10 pb-10">
      <div className="rounded-3.5xl overflow-hidden">
        <img
          src={`${imageBase}hero-bottom.png`}
          alt="Area platform overview"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  )
}
