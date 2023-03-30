import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

const buildtype = [
  {
    name: '🏁 Race Build',
    description:
      'Need power adders, better reliability, performance suspension, or a whole rebuild? We can do it all.',
    icon: PhoneIcon,
    href: '/race-build',
    color: 'bg-racing-red-600 rounded-xl hover:animate-pulse',
  },
  {
    name: '🏕️ Off-Road Build',
    description:
      'Need mud tires, lift kits, lights, or a whole build? We can make your vehicle ride like a dream, on and off road.',
    icon: LifebuoyIcon,
    href: '/offroad-build',
    color: 'bg-offroad-yellow-700 rounded-xl hover:animate-pulse',
  },
  {
    name: '🤩 Show Truck Build',
    description:
      'Want bigger rims, louder exhaust, color matched parts, or a whole build? We can turn your truck into show quality.',
    icon: NewspaperIcon,
    href: '/truck-build',
    color: 'bg-trucks-blue-600 rounded-xl hover:animate-pulse',
  },
]

const navigation = [
  { name: '🏡 Home', href: '/', icon: HomeIcon, current: true },
  { name: '👋 About Us', href: '/about', icon: UsersIcon, current: false },
  {
    name: '🪄 Services',
    href: '/services',
    icon: FolderIcon,
    current: false,
  },
  {
    name: '🎁 Products',
    href: '/products',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: '📷 Gallery',
    href: '/gallery',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: '🤯 Blog',
    href: 'https://blog.jonesco.autos/',
    icon: CalendarIcon,
    current: false,
  },
  {
    name: '💬 Contact Us',
    href: '/contact',
    icon: CalendarIcon,
    current: false,
  },
]
const social = [
  { id: 1, name: 'Instagram', href: '#', initial: 'I', current: false },
  { id: 2, name: 'Facebook', href: '#', initial: 'F', current: false },
  { id: 3, name: 'Twitter', href: '#', initial: 'T', current: false },
  { id: 4, name: 'TikTok', href: '#', initial: 'T', current: false },
  { id: 5, name: 'YouTube', href: '#', initial: 'Y', current: false },
  { id: 6, name: 'LinkedIn', href: '#', initial: 'L', current: false },
  { id: 7, name: 'Reddit', href: '#', initial: 'R', current: false },
  { id: 8, name: 'Pinterest', href: '#', initial: 'P', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-gray-50"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-6 pb-2">
                    <div className="flex h-24 shrink-0 items-center">
                      <img
                        className="h-12 w-auto"
                        src="/../images/logos/Official.png"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <div className="text-md pb-4 font-fugaz leading-6 text-gray-900">
                        Web Pages
                      </div>

                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-700 text-gray-50'
                                      : 'text-gray-900 hover:bg-gray-700 hover:text-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-lg font-semibold leading-6'
                                  )}
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-md font-fugaz leading-6 text-gray-900">
                            Social Media
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {social.map((socialitem) => (
                              <li key={socialitem.name}>
                                <a
                                  href={socialitem.href}
                                  className={classNames(
                                    socialitem.current
                                      ? 'bg-gray-400 text-gray-900'
                                      : 'text-gray-900 hover:bg-gray-700 hover:text-gray-50',
                                    'group flex gap-x-3 rounded-md pl-2 text-sm font-semibold leading-6'
                                  )}
                                >
                                  <span className="truncate">
                                    {socialitem.name}
                                  </span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-200 px-6">
            <div className="flex h-24 shrink-0 items-center">
              <img
                className="h-16 w-auto"
                src="/../images/logos/Official.png"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <div className="pb-5 font-fugaz text-lg leading-6 text-gray-900">
                    Web Pages
                  </div>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-300 text-gray-50'
                              : 'text-gray-900 hover:bg-gray-300 hover:text-gray-50',
                            'group flex gap-x-3 rounded-md p-0.5 text-md font-semibold leading-6'
                          )}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="font-fugaz text-lg leading-6 text-gray-900">
                    Social Media
                  </div>
                  <ul role="list" className="-mx-2 mt-4 space-y-1">
                    {social.map((socialitem) => (
                      <li key={socialitem.name}>
                        <a
                          href={socialitem.href}
                          className={classNames(
                            socialitem.current
                              ? 'bg-gray-300 text-gray-900'
                              : 'text-gray-900 hover:bg-gray-300 hover:text-gray-50',
                            'group flex gap-x-3 rounded-md pl-2 text-sm leading-6'
                          )}
                        >
                          <span className="truncate">{socialitem.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-gray-50"></div>
          <a href="#">
            <span className="sr-only">Your profile</span>
          </a>
        </div>

        <main className=" lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>

          <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-16">
            <img
              src="/../images/stock/turbo.jpg"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-50 md:object-center"
            />

            <div className="mx-auto h-full max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-5xl  px-3">
                <h2 className="text-center font-fugaz text-5xl tracking-tight text-gray-50 sm:text-7xl">
                  JONES CO.
                </h2>
                <h2 className="pb-2 text-center text-xl font-bold tracking-widest text-gray-200 sm:text-3xl md:pb-10">
                  AUTOMOTIVE
                </h2>
                <p className="text-md justify mt-6 leading-8 text-gray-100">
                  Whether you want to boost the power of your muscle
                  car, toughen up your pickup truck, or create a one-of-a-kind
                  ride, our expert technicians have the experience and parts to
                  make it happen.
                </p>
                <p className="text-md mt-6 font-bold leading-8 text-gray-100">
                  Select your modification category below to start your new one
                  of a kind build.
                </p>
                <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:grid-cols-3 lg:gap-8">
                  {buildtype.map((card) => (
                    <div className={card.color} key={card.name}>
                      <div className=" flex gap-x-4  p-6 ring-1 ring-inset ring-gray-50/10">
                        <a href={card.href}>
                          <div className="text-base leading-7">
                            <h3 className="font-fugaz text-xl text-gray-50">
                              {card.name}
                            </h3>
                            <p className="mt-2 text-gray-50">
                              {card.description}
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
