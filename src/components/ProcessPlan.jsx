const steps = [
  {
    id: 1,
    short: '1. Describe Your Goals. 🤔',
    long: 'We want to understand your needs so we can deliver exactly what you want.',
  },
  {
    id: 2,
    short: '2. Accept Our Quote. 📃',
    long: 'Our quotes are competitive and transparent, so you know exactly what you are getting.',
  },
  {
    id: 3,
    short: '3. Drop Off Your Vehicle. 🚙',
    long: 'Our team of experts will ensure that your project is completed efficiently and effectively.',
  },
  {
    id: 4,
    short: '4. Pick Up Your New Ride. 🏁',
    long: 'We take pride in delivering high-quality work that exceeds your expectations.',
  },
  // More shorts...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="divide-black/50 mx-auto max-w-7xl divide-y px-6 py-10 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-JC-gold-900 text-4xl leading-10 tracking-tight  font-jc">
          How Do You Begin?
        </h2>
        <dl className="divide-black/30 mt-10 space-y-8 divide-y">
          {steps.map((step) => (
            <div
              key={step.id}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-black text-lg sm:text-xl font-bold leading-7 lg:col-span-5">
                {step.short}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-JC-gold-900 text-base leading-7">{step.long}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
