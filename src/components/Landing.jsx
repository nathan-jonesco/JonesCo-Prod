const contact = [
  {
    name: 'Text',
    link: 'https://racing.jonesco.autos',
    imageUrl: '/../images/logos/text.svg',
    imageClass:
      'rounded-xl border border-green-600 bg-gradient-to-br from-gray-300 to-green-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2',
  },
  {
    name: 'Email',
    link: 'https://offroad.jonesco.autos',
    imageUrl: '/../images/logos/offroad.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-offroad-yellow-600 bg-gradient-to-br from-gray-300 to-offroad-yellow-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-offroad-yellow-500 focus-within:ring-offset-2',
  },
  {
    name: 'Call',
    link: 'https://trucks.jonesco.autos',
    imageUrl: '/../images/logos/trucks.png',
    imageClass:
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-trucks-blue-600 bg-gradient-to-br from-gray-300 to-trucks-blue-800 p-2 shadow-sm focus-within:ring-2 focus-within:ring-trucks-blue-500 focus-within:ring-offset-2',
  },
]

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
      'relative flex place-content-center items-center space-x-3 rounded-3xl border border-trucks-blue-300 bg-gradient-to-br from-gray-300 to-trucks-blue-500 p-2 shadow-sm focus-within:ring-2 focus-within:ring-trucks-blue-500 focus-within:ring-offset-2',
  },
]

const navigation = [
  { name: '🏁 Racing', href: 'https://racing.jonesco.autos', current: false },
  { name: '🏔️ Off-Road', href: 'https://offroad.jonesco.autos', current: false },
  { name: '🛻 Trucks', href: 'https://trucks.jonesco.autos', current: false },
  { name: '💬 Contact', href: 'https://contact.jonesco.autos', current: false },
  { name: '🤯 Blog', href: 'https://blog.jonesco.autos', current: false },
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="">
      <div className="">
        <video
          autoPlay
          loop
          muted
          src="/../videos/drift2.mp4"
          className="absolute -z-10 h-full w-auto min-w-full object-cover opacity-50 sm:opacity-100"
        ></video>
      </div>
      <div className="max-w-none place-content-center items-center">
        <div className="z-auto grid grid-cols-1 place-content-center gap-4 sm:h-screen md:gap-6  ">
          <div className="absolute -z-10 min-h-full  min-w-full max-w-none bg-gradient-to-br from-racing-red-50 via-trucks-blue-50 to-offroad-yellow-50 sm:bg-gray-900 opacity-70"></div>
          <div className="">
            <h1 className="pt-32 text-center font-fugaz text-5xl sm:text-gray-50 sm:pt-0 sm:text-7xl">
              JONES CO.
            </h1>
            <h2 className="-mt-1 text-center font-fugaz text-xl text-gray-300 sm:text-3xl md:text-5xl"></h2>
            <p className="text-md mb-4 mt-1 text-center font-semibold sm:text-gray-300 sm:text-2xl">
              Your performance specialists.
            </p>
          </div>
          <div className="visible m-5 rounded-lg p-5 sm:hidden">
            <nav className="justify-center space-y-6" aria-label="Sidebar">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'justify-center bg-trucks-blue-200 text-gray-900 text-lg'
                      : 'font-bold justify-center text-3xl text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                    'group flex rounded-xl px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="invisible grid grid-cols-3 gap-2 px-4 sm:visible sm:px-16  md:gap-4">
            {category.map((category) => (
              <div key={category.link} className={category.imageClass}>
                <a href={category.link}>
                  <div className="flex-shrink-0">
                    <img className="" src={category.imageUrl} alt="" />
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="invisible grid grid-cols-8 place-content-center items-center gap-2 px-6 sm:visible sm:px-16  md:gap-4">
            {social.map((social) => (
              <div
                key={social.link}
                className="focus-within:ring-offset-6 relative flex place-content-center items-center space-x-3 rounded-lg border border-gray-200 bg-gradient-to-bl from-gray-100 to-gray-400 opacity-90 shadow-lg focus-within:ring-2 lg:h-20"
              >
                <a href={social.link}>
                  <div className="flex-shrink-0">
                    <img
                      className="w-6 py-2 md:w-12"
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
