import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "🚦Drag Racing",
    description:
      "The Jones family grew up drag racing, it's in our blood. The thought of helping you get faster is what fuels us every day.",
    href: "/DragRacing",
    icon: InboxIcon,
  },
  {
    name: "🏕️ Off Roading",
    description:
      "We have the equipment and experience to get you the perfect setup for your specific vehicle, every time.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "💨 Drifting",
    description:
      "Who doesn't love drifting? At Jones Co. we love helping you make more power, and build better control.",
    href: "#",
    icon: TrashIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className=" py-10 sm:py-24 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-2xl tracking-tight text-gray-900 sm:text-5xl font-fugaz-one">
            Our Secret Sauce 🧪
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you Drag Race, Off Road, Drift, Auto-Cross, or all of the above, we have the ingredients to get you and keep you in the lead.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-14 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="pb-4 text-xl font-bold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-lg leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-md font-semibold leading-6 text-lime-900"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
