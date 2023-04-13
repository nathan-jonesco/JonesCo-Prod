import Link from "next/link";


import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'LS Engine Swaps  🫀',
    description:
      'We specialize in LS engine swaps, which involve replacing the factory engine in a vehicle with a high-performance LS engine. We use high-quality parts and equipment to ensure that your LS engine swap is done right the first time.',
    href: '/services',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Power Adders 🦾',
    description:
      'We also specialize in power adders, which are aftermarket components that increase the power output of an engine. Some examples of power adders include superchargers, turbochargers, and nitrous oxide systems.',
    href: '/services',
    icon: LockClosedIcon,
  },
  {
    name: 'Supporting Mods 🌱',
    description:
      'Some examples of supporting mods include suspension upgrades, brake upgrades, and exhaust upgrades. Our team of skilled technicians can help you choose the right supporting mods for your vehicle and goals.',
    href: '/services',
    icon: ArrowPathIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-JC-gold-600">
            What is Our Specialty?
          </h2>
          <p className="mt-2 font-jc text-5xl text-black sm:text-7xl">
            Building Race Cars.
          </p>
          <p className="text-gray-600 mt-6 text-lg leading-8">
            Our team of skilled technicians have years of experience in building
            and modifying race cars. We have a proven track record of
            delivering high-quality workmanship that exceeds our customers
            expectations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-gray-900 flex items-center gap-x-3 text-3xl leading-7 font-jc tracking-wide">
                  {feature.name}
                </dt>
                <dd className="text-gray-600 mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-JC-gold-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
