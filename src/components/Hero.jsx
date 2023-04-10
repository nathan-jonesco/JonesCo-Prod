export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-32 sm:py-48 lg:px-8">
      <img
        src="/../Stock/camaro_wheelie.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 sm:opacity-10"
      />
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="">
          <span className="text-3xl text-white sm:text-5xl font-semibold">Built to Perform,</span>
          <br></br>{' '}
          <span className="font-jc text-6xl uppercase text-JC-gold-400 sm:text-8xl">
            Designed to Win.
          </span>
        </h2>
        <p className="mt-8 text-sm leading-8 text-white sm:mt-12 sm:text-lg">
          With our high-quality workmanship and personalized service, we will help
          you achieve your dream upgrades and make your ride the envy of the
          track.
        </p>
      </div>
    </div>
  )
}
