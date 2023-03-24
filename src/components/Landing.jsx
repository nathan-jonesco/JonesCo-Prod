import Image from 'next/image'
import { useState } from 'react'

const category = [
  {
    name: 'Racing',
    link: 'https://racing.jonesco.autos',
    imageUrl: '/../images/logos/racing.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-racing-red-600 bg-gradient-to-br from-gray-300 to-racing-red-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-racing-red-500 focus-within:ring-offset-2',
  },
  {
    name: 'Off-Road',
    link: 'https://offroad.jonesco.autos',
    imageUrl: '/../images/logos/offroad.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-offroad-yellow-600 bg-gradient-to-br from-gray-300 to-offroad-yellow-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-offroad-yellow-500 focus-within:ring-offset-2',
  },
  {
    name: 'Trucks',
    link: 'https://trucks.jonesco.autos',
    imageUrl: '/../images/logos/trucks.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-trucks-blue-600 bg-gradient-to-br from-gray-300 to-trucks-blue-800 p-2 shadow-sm focus-within:ring-2 focus-within:ring-trucks-blue-500 focus-within:ring-offset-2',
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
          <div className="absolute -z-10 min-h-full  min-w-full max-w-none bg-gradient-to-t from-gray-700 to-gray-900 opacity-90"></div>
          <div className="">
            <h1 className="pt-14 text-center font-fugaz text-4xl text-gray-50 sm:pt-8 sm:text-6xl md:text-9xl">
              JONES CO.
            </h1>
            <h2 className="-mt-1 text-center font-fugaz text-xl text-gray-300 sm:text-3xl md:text-5xl"></h2>
            <p className="text-md mb-8 text-center text-gray-300 sm:text-2xl">
              Your vision, is our passion. 💯
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 px-2 sm:px-16  md:gap-4 md:px-32 lg:px-52 xl:px-80">
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
          <div className="grid grid-cols-4 place-content-center items-center gap-2 px-2 sm:px-16  md:grid-cols-8  md:gap-4 md:px-32 lg:px-52 xl:px-80">
            {social.map((social) => (
              <div
                key={social.link}
                className="md:h-18 focus-within:ring-offset-6 lg:h-18 relative flex h-16 place-content-center items-center space-x-3 rounded-2xl border border-gray-200 bg-gradient-to-bl from-gray-100 to-gray-400 opacity-90 shadow-lg focus-within:ring-2"
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
