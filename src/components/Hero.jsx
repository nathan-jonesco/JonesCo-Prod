import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white-z-50 overflow-hidden">
      <div className="flex min-h-full min-w-full flex-col overflow-hidden">
        <div className="-z-20">
          <div className="relative isolate z-30 bg-gray-900/80 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-28">
              <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight text-green-50 sm:text-6xl">
                  Where Your Dream Ride <b>Becomes Reality</b>.
                </h1>
                <p className="text-sm sm:text-md mt-6 leading-8 text-green-50">
                  {`If you're ready to turn your vehicle into a one-of-a-kind
                  masterpiece, look no further than our family-owned custom car
                  and truck shop. Contact us today to schedule a consultation
                  and let us help you bring your vision to life.`}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Build Estimator
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-green-50"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute -z-40 flex flex-col h-full w-full pb-24 xl:-mt-72">
          <div className='grow'>
            <video
              src="../videos/Drift.mp4"
              autoPlay
              loop
              muted
              className="object-cover h-full w-full " // Is supposed to shrink or expand the video the length of the parent div
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
