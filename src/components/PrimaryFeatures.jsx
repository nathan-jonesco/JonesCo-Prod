import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Unbeatable Quality.',
    description:
      'We take pride in providing the highest quality workmanship, using only the best materials and equipment to ensure that every job is done correctly and to the highest standards.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Competitive Pricing.',
    description:
      'We offer competitive pricing to ensure that our customers receive the best value for their money. We believe in transparent pricing and will never surprise our customers with hidden fees or costs.',
    icon: LockClosedIcon,
  },
  {
    name: 'Reliable Power.',
    description:
      'Our team of skilled and experienced technicians are passionate about cars and dedicated to providing high-quality performance services. We use specialized equipment and techniques to ensure that every job is done to the best of our ability.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Personalized Services.',
    description:
      'We work closely with our clients to ensure that every project is tailored to their unique needs and preferences. Our goal is to bring our clients visions to life and create a one-of-a-kind vehicle that exceeds their expectations.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Specialized Equipment.',
    description:
      'We work closely with our clients to ensure that every project is tailored to their unique needs and preferences. Our goal is to bring our clients visions to life and create a one-of-a-kind vehicle that exceeds their expectations.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Premium Experience.',
    description:
      'We believe that every customer deserves a premium experience, and we strive to provide the highest level of customer service and satisfaction. From the initial consultation to the final product, we are committed to providing our customers with an exceptional experience.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-blue-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-xl font-semibold leading-7 text-green-400">
            What makes us different?
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            We Set the Bar.
          </p>
          <p className="mt-6 text-lg leading-8 text-blue-50">
            We spent two years laying out every detail of our performance shop
            before we even stepped foot in it. We wanted to know where shops in
            TN have been lacking, and how we could raise the bar.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
