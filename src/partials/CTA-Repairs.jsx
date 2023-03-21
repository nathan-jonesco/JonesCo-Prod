export default function Example() {
  return (
    <div className="bg-gradient-to-br from-lime-200 to-lime-500 relative">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="pb-4 sm:pb-8 text-3xl font-extrabold tracking-tight text-lime-900 sm:text-7xl">
            Need Repairs?
          </h2>
          <h2 className="text-2xl tracking-tight text-lime-900 sm:text-2xl">
            Booking an appointment is crazy fast! 🚀
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-lime-900 px-3.5 py-2.5 text-sm font-semibold text-lime-100 shadow-sm hover:bg-lime-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule Now
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-lime-900">
              Service Process <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
