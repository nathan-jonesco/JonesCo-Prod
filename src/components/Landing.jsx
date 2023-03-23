import Image from 'next/image'
import { useState } from 'react'

const category = [
  {
    name: 'Racing',
    link: 'https://racing.jonesco.autos',
    role: 'Co-Founder / CEO',
    imageUrl: '/../images/logos/racing.png',
  },
  {
    name: 'Off-Road',
    link: 'https://offroad.jonesco.autos',
    role: 'Co-Founder / CEO',
    imageUrl: '/../images/logos/offroad.png',
  },
  {
    name: 'Trucks',
    link: 'https://trucks.jonesco.autos',
    role: 'Co-Founder / CEO',
    imageUrl: '/../images/logos/trucks.png',
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
    imageUrl: '/../images/logos/facebook.svg',
  },
]

export default function Example() {
  return (
    <div className="">
      <div className="max-w-none place-content-center items-center">
        <div className="z-auto grid grid-cols-1 place-content-center gap-6 sm:h-screen  ">
          <video
            autoPlay
            loop
            muted
            src="/../videos/drift.mp4"
            className="absolute -z-10 min-h-full w-auto min-w-full max-w-none"
          ></video>
          <div className="absolute -z-10 min-h-full  min-w-full max-w-none bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-50"></div>
          <div className="">
            <h1 className="pt-8 text-center font-fugaz text-3xl text-white sm:text-6xl">
              JONES CO.
            </h1>
            <h2 className="-mt-1 text-center font-fugaz text-xl text-gray-300 sm:text-3xl">
              AUTOMOTIVE
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:px-32">
            {category.map((category) => (
              <div
                key={category.link}
                className="relative flex place-content-center items-center space-x-3 rounded-xl border border-gray-300 bg-gray-100 p-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2 hover:border-lime-400"
              >
                <a href={category.link}>
                  <div className="flex-shrink-0">
                    <img className="h-auto w-40 md:py-5" src={category.imageUrl} alt="" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 place-content-center items-center gap-2 px-2 md:grid-cols-8 sm:px-32">
            {social.map((social) => (
              <div
                key={social.link}
                className="md:h-12 lg:h-24 relative flex place-content-center items-center space-x-3 rounded-2xl border border-gray-200 bg-gray-300 shadow-lg focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-6 hover:border-lime-400"
              >
                <a href={social.link}>
                  <div className="flex-shrink-0">
                    <img
                      className="md:h-12 lg:h-16 w-auto py-2"
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
