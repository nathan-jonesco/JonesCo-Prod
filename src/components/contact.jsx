/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="bg-gray-50 h-64 w-full object-cover sm:h-80 lg:absolute lg:h-full"
          src="/../Stock/NOS.jpg"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32 ">
        <div className="px-6 lg:px-8 ">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
            <h2 className=" text-gray-900 font-jc text-6xl ">Contact Us</h2>
            <p className="text-gold-900 text-md mt-2 leading-8">
              Our team of experts is always happy to help and will get back to
              you as soon as possible. Thank you for considering Jones Co.
              Performance Auto Shop for your high-performance vehicle needs!
            </p>
            <form action="#" method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="text-gray-900 block text-sm font-semibold leading-6"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="text-gray-900 block text-sm font-semibold leading-6"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="text-gray-900 block text-sm font-semibold leading-6"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="text-gray-900 block text-sm font-semibold leading-6"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="phone"
                      className="text-gray-900 block font-semibold"
                    >
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="text-gray-900 block text-sm font-semibold leading-6"
                    >
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-jc-gold-600 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="text-gray-900 block text-sm font-semibold leading-6">
                    Expected budget
                  </legend>
                  <div className="text-gold-900 mt-4 space-y-4 text-sm leading-6">
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-under-25k"
                        name="budget"
                        defaultValue="under_25k"
                        type="radio"
                        className="border-gray-300 text-jc-gold-600 focus:ring-jc-gold-600 mt-1 h-4 w-4 shadow-sm"
                      />
                      <label htmlFor="budget-under-25k">Less than $25K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-25k-50k"
                        name="budget"
                        defaultValue="25k-50k"
                        type="radio"
                        className="border-gray-300 text-jc-gold-600 focus:ring-jc-gold-600 mt-1 h-4 w-4 shadow-sm"
                      />
                      <label htmlFor="budget-25k-50k">$25K – $50K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-50k-100k"
                        name="budget"
                        defaultValue="50k-100k"
                        type="radio"
                        className="border-gray-300 text-jc-gold-600 focus:ring-jc-gold-600 mt-1 h-4 w-4 shadow-sm"
                      />
                      <label htmlFor="budget-50k-100k">$50K – $100K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        id="budget-over-100k"
                        name="budget"
                        defaultValue="over_100k"
                        type="radio"
                        className="border-gray-300 text-jc-gold-600 focus:ring-jc-gold-600 mt-1 h-4 w-4 shadow-sm"
                      />
                      <label htmlFor="budget-over-100k">$100K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="border-gray-900/10 mt-10 flex justify-end border-t pt-8">
                <button
                  type="submit"
                  className="bg-gold-600 hover:bg-gold-500 focus-visible:outline-gold-600 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
