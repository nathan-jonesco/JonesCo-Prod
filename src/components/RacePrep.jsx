import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Fluid Changes and Refills',
    description:
      'We will perform fluid changes and refills to ensure that your vehicle is running smoothly and efficiently. This includes changing the oil, coolant, transmission fluid, and brake fluid as needed.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Full Inspection Reports',
    description: 'We will conduct a comprehensive inspection of your vehicle to identify any issues or areas of concern. Our team of experts will inspect everything from the engine and transmission to the suspension and brakes, and will provide you with a detailed report of our findings.',
    icon: LockClosedIcon,
  },
  {
    name: 'Detailing and Polishing',
    description: 'We will clean and polish your vehicle to ensure that it looks its best on race day. This includes washing and waxing the exterior, cleaning the interior, and polishing the wheels and tires.',
    icon: ServerIcon,
  },
  {
    name: 'Tire Cleaning',
    description: 'We will thoroughly clean and inspect your tires to ensure that they are in optimal condition for racing. This includes removing any debris or buildup from the treads, checking for any signs of wear or damage, and inflating the tires to the appropriate pressure.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-xl sm:text-2xl font-semibold leading-7 text-JC-gold-600">What Else?</h2>
              <p className="font-jc mt-2 text-4xl text-black sm:text-6xl">We Prep for You.</p>
              <p className="mt-6 text-lg leading-8 text-JC-gold-900">
                Short on time, but need to have your car prepped for this weekends race? We offer race prep services, to make sure you show up prepared to every race.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7  lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-jc text-JC-gold-600 text-3xl pb-2">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-JC-gold-900">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src='/../Stock/NOS.jpg'
            alt="Product screenshot"
            className="h-0 sm:h-full invisible sm:visible w-[48rem] max-w-none rounded-xl shadow-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
