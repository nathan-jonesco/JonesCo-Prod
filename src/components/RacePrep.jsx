import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Fluid Changes and Refills',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Full Inspection Reports',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Detailing and Polishing',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
  {
    name: 'Tire Cleaning',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
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
              <p className="font-jc mt-2 text-4xl text-black sm:text-6xl">We Race Prep for You.</p>
              <p className="mt-6 text-lg leading-8 text-JC-gold-900">
                Short on time, but need to have your car prepped for this weekends race? That is why we offer race prep services, to make sure you show up prepared to every race.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-JC-gold-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt className="font-jc text-JC-gold-900 text-2xl pb-2">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
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
