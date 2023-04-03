import Head from 'next/head'

import  Contact  from '@/components/Contact'
import Faqs  from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import  PrimaryFeatures  from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'



import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid'

const services = [
  {
    name: 'Engine Rebuilds and Swaps',
    description: 'Swap a new engine into your old ride, or have us upgrade the original one. Your call!',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Power Adders',
    description: 'Nitrous, huge turbos, loud super chargers, you are in the right place. Power is what gets us out of bed.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Suspension and Lifts',
    description: 'Need your ride lowered or lifted, we have you covegreen!',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Wheels and Tires',
    description: 'Whether you have a Dragster or a Jeep, we will help you find the perfect wheels and tires for your build.',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Full Auto Builds',
    description: 'Our team will work with you to build a new car from the ground up. This is the ultimate experience.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Use Build Estimator', href: '#' },
  { name: 'Contact the Team', href: '#' },
]
const company = [
  { name: 'About us', href: '#' },
  { name: 'Careers', href: '#' },
  { name: 'Support', href: '#' },
  { name: 'Press', href: '#' },
  { name: 'Blog', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="bg-gradient-to-r from-green-500 to-blue-800">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-10 w-auto"
                src='../images/logos/Official.png'
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-green-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-50">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-green-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-green-600 outline-green-300 outline shadow-lg ring-1 ring-green-900/5">
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg px-4 py-3 text-sm leading-6 hover:bg-green-700"
                      >
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-green-50"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-green-200">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-green-900/5 bg-green-700">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-green-50 hover:bg-green-800 "
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-green-50"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-green-50"
            >
              Build Estimator
            </a>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-green-50">
                Company
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-green-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-50 mt-3 w-56 rounded-xl bg-green-600 p-2 shadow-lg ring-1 ring-green-900/5 outline outline-green-300">
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-green-50 hover:bg-green-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-green-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-green-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-14 w-auto"
                  src='../images/logos/Official.png'
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-green-500">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-green-700">
                          Services
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...services, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-green-50 hover:bg-green-700"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-50 hover:bg-green-700"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-green-50 hover:bg-green-700"
                  >
                    Marketplace
                  </a>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-green-700 ">
                          Company
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 flex-none'
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {company.map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-green-50 hover:bg-green-700 "
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-green-50 hover:bg-green-700"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main className="">
        <div className="">
          <Head>
            <title>Jones Co.</title>
            <meta
              name="description"
              content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
            />
          </Head>
          <main>
            <Hero />
            <PrimaryFeatures />
            <SecondaryFeatures />
            <Contact />
            <Faqs />
          </main>
          <Footer />
        </div>
      </main>
    </div>
  )
}
