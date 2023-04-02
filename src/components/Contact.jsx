export default function Example() {
  return (
    <div className="bg-blue-900 py-16 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-blue-200">
            😎 Ready to Begin?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-50">

          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 lg:grid-cols-3 sm:gap-y-16 lg:mx-0 lg:max-w-none">
          <div>
            <h3 className="border-l border-blue-400 pl-6 text-xl font-bold text-white">
              📧 Email Me
            </h3>
            <address className="border-l border-blue-200 pl-6 pt-2 text-md not-italic text-blue-200">
            <a href="mailto:hey@jonesco.autos">
                <p>hey@jonesco.autos</p>
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-blue-400 pl-6 text-xl font-bold text-white">
              ☎️ Call Me
            </h3>
            <address className="border-l border-blue-200 pl-6 pt-2 text-lg not-italic text-blue-200">
            <a href="tel:">
                <p>1.555.555.5555</p>
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-blue-400 pl-6 text-xl font-bold text-white">
              💬 Text Me
            </h3>
            <address className="border-l border-blue-200 pl-6 pt-2 text-lg not-italic text-blue-200">
              <a href="sms:">
                <p>1.555.555.5555</p>
              </a>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}
