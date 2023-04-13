import Link from "next/link";

export default function Example() {
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="tracking-tight">
            <span className="text-lg sm:text-2xl font-bold"> Premium Cars Deserve...{' '}</span>
              <span className="text-JC-gold-600 text-6xl sm:text-8xl font-jc "> <br></br>Premium Parts.</span>{' '}
            </h2>
            <p className="text-gray-600 mt-6 text-lg leading-8">
              We only stock high quality parts from high quality vendors, period. Our customers come to us
              knowing that they will always have Link premium experience and that
              includes trustworthy parts, every time.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-JC-gold-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-JC-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-JC-gold-600"
              >
                Contact Us
              </Link>
              <Link href="https://shop.jonesco.autos" className="text-gray-900 text-sm font-semibold">
                View Inventory <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:pl-8">
            <img
              className="max-h-10 sm:max-h-16 w-full object-contain object-center"
              src="/../Brands/MotionRaceworks.webp"
              alt="Tuple"
              width={105}
              height={48}
            />
            <img
              className="max-h-8 sm:max-h-16 w-full object-contain object-center"
              src="/../Brands/Holley.png"
              alt="Reform"
              width={104}
              height={48}
            />
            <img
              className="max-h-10 sm:max-h-20 w-full object-contain object-center"
              src="/../Brands/texasspeed.jpg"
              alt="SavvyCal"
              width={140}
              height={100}
            />
            <img
              className="max-h-12 sm:max-h-20 w-full object-contain object-center"
              src="/../Brands/wiseco.png"
              alt="Laravel"
              width={136}
              height={48}
            />
            <img
              className="max-h-8 sm:max-h-16 w-full object-contain object-center"
              src="/../Brands/weld.png"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="max-h-14 sm:max-h-20 w-full object-contain object-center"
              src="/../Brands/Nitrousoutlet.webp"
              alt="Statamic"
              width={147}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
