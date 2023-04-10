export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      <img
        src='/../Stock/camaro_wheelie.jpg'
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20 sm:opacity-10"
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-5xl text-white sm:text-8xl font-jc uppercase">Built to Perform,<br></br> <span className=" text-JC-gold-400">Designed to Win.</span></h2>
        <p className="mt-4 sm:mt-12 text-sm sm:text-lg leading-8 text-white">
        With our high-quality workmanship and personalized service, we'll help you achieve your dream upgrades and make your ride the envy of the track.
        </p>
      </div>
    </div>
  )
}
