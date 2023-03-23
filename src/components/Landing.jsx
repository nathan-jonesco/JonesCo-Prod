import Image from 'next/image'
import { useState } from 'react'

const category = [
  {
    name: 'Racing',
    link: 'https://racing.jonesco.autos',
    imageUrl: '/../images/logos/racing.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-red-600 bg-gradient-to-br from-gray-300 to-red-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2',
  },
  {
    name: 'Off-Road',
    link: 'https://offroad.jonesco.autos',
    imageUrl: '/../images/logos/offroad.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-lime-600 bg-gradient-to-br from-gray-300 to-lime-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2',
  },
  {
    name: 'Trucks',
    link: 'https://trucks.jonesco.autos',
    imageUrl: '/../images/logos/trucks.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-blue-600 bg-gradient-to-br from-gray-300 to-blue-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2',
  },
  {
    name: 'Email',
    link: 'mailto:hey@jonesco.autos',
    imageUrl: '/../images/logos/at-sign.svg',
    imageClass:
      'sm:invisible visible relative flex place-content-center items-center space-x-3 rounded-3xl border border-yellow-600 bg-gradient-to-br from-gray-300 to-yellow-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2',
  },
]

const social = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/jonesco.autos',
    imageUrl: '/../images/logos/facebook.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/@JonesCoAutos',
    imageUrl: '/../images/logos/youtube.svg',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/JonesCoAutos',
    imageUrl: '/../images/logos/twitter.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://trucks.jonesco.autos',
    imageUrl: '/../images/logos/linkedin.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/jonesco.autos/',
    imageUrl: '/../images/logos/instagram.svg',
  },
  {
    name: 'Pinterest',
    link: 'https://www.pinterest.com/jonescoautos/',
    imageUrl: '/../images/logos/pinterest.svg',
  },
  {
    name: 'TikTok',
    link: 'https://www.tiktok.com/@jonescoautos',
    imageUrl: '/../images/logos/tiktok.svg',
  },
  {
    name: 'Reddit',
    link: 'https://www.reddit.com/user/Jones-Co',
    imageUrl: '/../images/logos/reddit.svg',
  },
]

export default function Example() {
  return (
    <div className="">
      <div className="">
        <video
          autoPlay
          loop
          muted
          src="/../videos/drift.mp4"
          className="absolute -z-10 h-full w-auto min-w-full object-cover"
        ></video>
      </div>
      <div className="max-w-none place-content-center items-center">
        <div className="z-auto grid grid-cols-1 place-content-center gap-6 sm:h-screen  ">
          <div className="absolute -z-10 min-h-full  min-w-full max-w-none bg-gradient-to-t from-gray-500 to-gray-900 opacity-90"></div>
          <div className="">
            <h1 className="pt-8 text-center font-fugaz text-3xl text-white sm:text-6xl md:text-8xl">
              JONES CO.
            </h1>
            <h2 className="-mt-1 text-center font-fugaz text-xl text-gray-300 sm:text-3xl">
              AUTOMOTIVE
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3  sm:px-16 md:px-32 lg:px-52 xl:px-64">
            {category.map((category) => (
              <div key={category.link} className={category.imageClass}>
                <a href={category.link}>
                  <div className="flex-shrink-0">
                    <img
                      className="h-auto w-40 md:py-5"
                      src={category.imageUrl}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 place-content-center items-center gap-2 px-4 md:grid-cols-8  sm:px-16 md:px-32 lg:px-52 xl:px-64">
            {social.map((social) => (
              <div
                key={social.link}
                className="md:h-18 focus-within:ring-offset-6 relative flex h-16 place-content-center items-center space-x-3 rounded-2xl border border-gray-200 bg-gray-200 shadow-lg focus-within:ring-2 lg:h-18"
              >
                <a href={social.link}>
                  <div className="flex-shrink-0">
                    <img
                      className="w-auto py-2 md:h-14 lg:h-16"
                      src={social.imageUrl}
                      alt=""
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
