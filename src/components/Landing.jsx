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


import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Sales',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]


const navigation = [
  { name: '🏡 Home', href: '/', icon: HomeIcon, current: true },
  { name: '🏁 Racing', href: '/racing', icon: UsersIcon, current: false },
  { name: '🏕️ Off-Roading', href: '/offroad', icon: FolderIcon, current: false },
  { name: '🛻 Show Trucks', href: '/trucks', icon: CalendarIcon, current: false },
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

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    author: {
      name: 'Michael Foster',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
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
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
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
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-gray-50" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-600 px-6 pb-2">
                    <div className="flex h-24 shrink-0 items-center">
                      <img
                        className="h-12 w-auto"
                        src='/../images/logos/Official.png'
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
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
                                      : 'text-gray-200 hover:text-gray-50 hover:bg-gray-700',
                                    'group flex gap-x-3 rounded-md p-2 text-lg leading-6 font-semibold'
                                  )}
                                >
                                  
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-200">Contact Us 👋</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {social.map((socialitem) => (
                              <li key={socialitem.name}>
                                <a
                                  href={socialitem.href}
                                  className={classNames(
                                    socialitem.current
                                      ? 'bg-gray-700 text-gray-50'
                                      : 'text-gray-200 hover:text-gray-50 hover:bg-gray-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-400 bg-gray-500 text-[0.625rem] font-medium text-gray-50">
                                    {socialitem.initial}
                                  </span>
                                  <span className="truncate">{socialitem.name}</span>
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
                src='/../images/logos/Official.png'
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-300 text-gray-900'
                              : 'text-gray-900 hover:text-gray-50 hover:bg-gray-300',
                            'group flex gap-x-3 rounded-md p-2 text-xl leading-6 font-semibold'
                          )}
                        >
                          
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-lg font-fugaz leading-6 text-gray-900">Contact Us 👋</div>
                  <ul role="list" className="-mx-2 mt-4 space-y-1">
                    {social.map((socialitem) => (
                      <li key={socialitem.name}>
                        <a
                          href={socialitem.href}
                          className={classNames(
                            socialitem.current
                              ? 'bg-gray-300 text-gray-900'
                              : 'text-gray-900 hover:text-gray-50 hover:bg-gray-300',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
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
          <button type="button" className="-m-2.5 p-2.5 text-gray-200 lg:hidden" onClick={() => setSidebarOpen(true)}>
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

    <div className="relative isolate overflow-hidden bg-gray-900 py-10 sm:py-32">
      <img
        src='/../images/stock/turbo.jpg'
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-50"
      />
    
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl  px-6">
          <h2 className="text-6xl text-center font-fugaz tracking-tight text-gray-50 sm:text-7xl">JONES CO.</h2>
          <p className="mt-6 text-lg leading-8 text-gray-100">
          We are TN's premier performance car and truck shop, offering high-quality modifications and customization at affordable prices.  Whether you want to boost the power of your muscle car, toughen up your pickup truck, or create a one-of-a-kind ride, our expert technicians have the experience and parts to make it happen.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-gray-50/5 p-6 ring-1 ring-inset ring-gray-50/10">
              <card.icon className="h-7 w-5 flex-none text-gray-400" aria-hidden="true" />
              <div className="text-base leading-7">
                <h3 className="font-semibold text-gray-50">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-gray-50 py-10 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-gray-50/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <img src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-50/10" />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-50">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
          
        </main>
      </div>
    </>
  )
}
