export default function Header() {
  const imageBase = `${import.meta.env.BASE_URL}images/`

  return (
    <section className="px-6 md:px-10">
      <h1 className="font-display font-normal text-display-mobile md:text-display-tablet lg:text-display text-black">
        Browse everything.
      </h1>
      <div className="mt-16 md:mt-60 rounded-3.5xl overflow-hidden bg-mid-green relative">
        <img
          src={`${imageBase}hero-ipad.png`}
          alt="Area app on iPad"
          className="w-full h-auto block"
        />
      </div>
    </section>
  )
}
