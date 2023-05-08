const steps = [
  {
    id: 1,
    short: 'Step 1: The Consultation 🗣️',
    long: 'Our experienced technicians will chat with you about your needs and provide recommendations for services that will make your ride sing. Once you have picked the services you want, we will give you a breakdown of the costs and an estimate for completion time.',
  },
  {
    id: 2,
    short: 'Step 2: The Deal 🤝',
    long: 'Once you have picked your services, it is time to make it official. You will sign a service agreement that outlines the work, costs, and timeline. Then, our techs will get to work, and we will keep you updated along the way.',
  },
  {
    id: 3,
    short: 'Step 3: The Action 💪',
    long: 'It is go time. Our techs will get to work on your vehicle, and we will keep you in the loop with regular updates on progress.',
  },
  {
    id: 4,
    short: 'Step 4: The Reveal 😍',
    long: 'Once we are done, we will give you the grand tour. You can inspect your ride and make sure everything is up to snuff.',
  },
  {
    id: 5,
    short: 'Step 5: The Payoff ✌️',
    long: 'If everything looks good, it is time to pay up (ask about financing). We will follow up with you to make sure you are happy with the work and answer any questions.',
  },
  // More shorts...
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="divide-black/30 mx-auto max-w-7xl divide-y px-6 py-10 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-black text-5xl sm:text-8xl leading-10 tracking-tight  font-jc">
          Fast in 5-Steps.
        </h2>
        <dl className="divide-black/20 mt-10 space-y-8 divide-y">
          {steps.map((step) => (
            <div
              key={step.id}
              className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-black text-lg sm:text-xl font-bold leading-7 lg:col-span-4">
                {step.short}
              </dt>
              <dd className="mt-4 lg:col-span-8 lg:mt-0">
                <p className="text-JC-gold-900 text-base leading-7">{step.long}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
