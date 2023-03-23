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
      <video autoPlay loop muted
        src='/../videos/drift.mp4'
        className="absolute -z-10 min-h-full w-auto min-w-full max-w-none"
      ></video>
             <div className="absolute -z-10 min-h-full w-auto min-w-full max-w-none bg-gray-900 opacity-80"></div>

      <div className="grid grid-cols-1 place-content-center gap-6 sm:h-screen z-auto">
        <div className="">
          <h1 className="text-white text-center font-fugaz text-3xl sm:text-6xl">
            JONES CO.
          </h1>
          <h2 className="text-gray-300 -mt-1 text-center font-fugaz text-xl sm:text-3xl">
            AUTOMOTIVE
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:px-48">
          {category.map((category) => (
            <div
              key={category.link}
              className="relative flex place-content-center items-center space-x-3 rounded-lg border border-gray-300 bg-gray-100 p-2 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2 hover:border-gray-400"
            >
              <a href={category.link}>
                <div className="flex-shrink-0">
                  <img className="h-auto w-48" src={category.imageUrl} alt="" />
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 place-content-center items-center gap-4 sm:grid-cols-7 sm:px-48">
          {social.map((social) => (
            <div
              key={social.link}
              className="relative flex place-content-center items-center space-x-3 rounded-lg border border-gray-300 bg-gray-300 p-4 shadow-sm focus-within:ring-2 focus-within:ring-lime-500 focus-within:ring-offset-2 hover:border-gray-400 sm:px-6 sm:py-5"
            >
              <a href={social.link}>
                <div className="flex-shrink-0">
                  <img className="h-auto w-full" src={social.imageUrl} alt="" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
