import pic from '../images/People/Family_2.jpg'

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-lime-800">
                About Us 😎
              </p>
              <h1 className="mt-2 text-3xl font-fugaz-one tracking-tight text-gray-900 sm:text-5xl">
                Our Story
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                We are thrilled to announce the opening of our new auto shop
                located in the heart of beautiful Tennessee. Our family-run
                business is dedicated to providing our customers with top-notch
                automotive services and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={pic}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Our team of experienced technicians is committed to providing
                you with the best service possible. They are certified, trained,
                and experienced in working with a wide range of vehicles. From
                routine maintenance like oil changes and tire rotations to more
                complex repairs, we have the expertise to get the job done right
                the first time.
              </p>
              <p className="mt-8">
                At our new shop, we believe in treating our customers like
                family. We understand that your vehicle is an essential part of
                your daily life, and we strive to keep it running smoothly and
                safely. We take the time to listen to your concerns and explain
                the repairs your vehicle needs. We know that auto repairs can be
                stressful, so we strive to make your experience with us as
                comfortable and stress-free as possible. Our friendly and
                knowledgeable staff is always ready to answer any questions you
                may have and provide you with honest advice and recommendations.
              </p>
              <p className="mt-8">
                We take pride in being a part of the Tennessee community and
                serving our valued customers. Our commitment to our customers
                and our community is why we are excited to start this new
                venture. We believe in giving back to the community that
                supports us, which is why we plan to sponsor local events and
                organizations.
              </p>
              <p className="mt-8">
                Our shop may be new, but our family has been in the auto
                industry for many years. We have built a reputation for honesty,
                reliability, and quality work. Our customers are not just
                clients; they are part of our family. We understand that trust
                is essential when it comes to choosing an auto shop, and we
                promise to provide you with the highest level of service and
                integrity.
              </p>
              <p className="mt-8">
                Thank you for choosing our new family-run auto shop for all of
                your automotive needs. We look forward to serving you and
                building a long-lasting relationship with you and the community.
                Please visit us soon, and let us show you why we are the best
                auto shop in Tennessee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
