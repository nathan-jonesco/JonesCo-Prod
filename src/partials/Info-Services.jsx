import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    service: "Oil Change",
    description:
      "Replacing the engine oil and oil filter, which helps to lubricate and cool the engine components and remove contaminants.",
  },
  {
    service: "Battery Replacement",
    description:
      "Replacing the car battery, which provides electrical power to start the engine and operate the car's electrical systems.",
  },
  {
    service: "AC Recharge",
    description:
      "Refilling the refrigerant in the air conditioning system to maintain its efficiency in cooling the car's interior.",
  },
  {
    service: "Rear Brake Pad Replacement",
    description:
      "Replacing the brake pads on the rear wheels, which are the components that press against the brake rotor to slow or stop the vehicle. They can become worn over time, leading to reduced braking performance or noise.",
  },
  {
    service: "Front Brake Pad Replacement",
    description:
      "Replacing the brake pads on the front wheels, which are the components that press against the brake rotor to slow or stop the vehicle. They can become worn over time, leading to reduced braking performance or noise.",
  },
  {
    service: "Rotor Replacement",
    description:
      "Replacing the brake rotor, which is the component that the brake pads press against to slow or stop the vehicle. They can become worn or warped over time, leading to reduced braking performance or vibration.",
  },
  {
    service: "Caliper Replacement",
    description:
      "Replacing the brake caliper, which is the component that applies pressure to the brake pads to slow or stop the vehicle. They can become worn or damaged, leading to reduced braking performance or brake fluid leaks..",
  },
  {
    service: "Tire Mounting and Balancing",
    description:
      "Mounting a new tire on the wheel, adding weights to ensure that the tire and wheel assembly is balanced, and installing the assembly on the car. This service is for customers who are purchasing new tires from the auto shop.",
  },
  {
    service: "Tire Alignment",
    description:
      "Adjusting the angles of the wheels to ensure that they are parallel to each other and perpendicular to the ground, which helps to improve handling and tire wear.",
  },
  {
    service: "Tire Disposal",
    description:
      "Properly disposing of old tires in an environmentally responsible manner.",
  },
  {
    service: "Engine Air Filter Replacement",
    description:
      "Replacing the engine air filter, which helps to prevent contaminants from entering the engine and affecting performance.",
  },
  {
    service: "Cabin Air Filter Replacement",
    description:
      "Replacing the cabin air filter, which helps to remove pollutants and allergens from the air that enters the car's interior through the HVAC system.",
  },
  {
    service: "Ignition Coil Replacement",
    description:
      "Replacing the ignition coil, which is responsible for providing the electrical spark necessary to ignite the fuel in the engine combustion chamber.",
  },
  {
    service: "Battery Charge",
    description:
      "Recharging the car's battery with an external charger.",
  },
  {
    service: "Spark Plug Wire Replacement",
    description:
      "Replacing the spark plug wires, which carry the electrical current from the ignition coil to the spark plugs to ignite the fuel in the engine combustion chamber.",
  },
  {
    service: "Spark Plug Replacement",
    description:
      "Replacing the spark plugs, which are responsible for igniting the fuel in the engine combustion chamber.",
  },
  {
    service: "Valve Stem Install",
    description:
      "Replacing the valve stems, which are the components that allow air to be added or removed from the tires.",
  },
  {
    service: "Distributor Cap Replacement",
    description:
      "Replacing the distributor cap, which is responsible for distributing the electrical current from the ignition coil to the spark plugs to ignite the fuel in the engine combustion chamber.",
  },
  {
    service: "PCV Valve Replacement",
    description:
      "Replacing the PCV (positive crankcase ventilation) valve, which helps to remove harmful gases from the engine crankcase and prevent engine damage.",
  },
  {
    service: "Fuel Pump Replacement",
    description:
      "Replacing the fuel pump, which is responsible for delivering fuel from the gas tank to the engine.",
  },
  {
    service: "Fuel Pump Replacement",
    description:
      "Replacing the fuel filter, which helps to remove contaminants from the fuel before it reaches the engine.",
  },
  // More services...
];

export default function Example() {
  return (
    <div className="bg-lime-100">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-32 lg:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-3xl leading-10 tracking-tight text-gray-900 font-fugaz-one">
           Service Catalog 
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.service} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.service}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.description}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
