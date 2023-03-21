import jf from "../images/People/John_Force.jpg";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-lime-900">
            Secret Sauce 🧪
          </p>
          <h1 className="mt-2 text-3xl tracking-tight text-gray-900 sm:text-4xl font-fugaz-one">
            Secret to Drag Racing?
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Drag racing is not just a hobby, but a science. The difference
            between winning and losing can come down to milliseconds. To be the
            fastest drag racer, you need a combination of skill, strategy, and a
            few secrets. Here are some scientific and factual tips that can help
            you gain an edge on the competition.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-lime-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “The tune-up was good, the track is good, and the air is good,
                  that's what it takes. If you want to win a bunch of
                  championships you have to stay ahead of the curve.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  src={jf}
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">John Force</div>
                  <div className="text-gray-600">@JohnForce_FC</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              To be fast, you need to know your car inside and out. Understand
              the horsepower, torque, and weight of your vehicle. This knowledge
              will help you determine the best gear ratio, tire pressure, and
              suspension set up for your car. Knowing your car's weight
              distribution is also important for launch and handling.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4">Tires? 💨</p>{" "}
                  Tires are the only point of contact between the car and the
                  track. It is important to choose the right tires for the track
                  conditions. Soft compound tires are ideal for tracks with good
                  traction. Conversely, hard compound tires are better suited
                  for tracks with low traction. Drag slicks are best for maximum
                  traction on a prepped surface. Tire pressure is also crucial
                  for traction and handling. Higher tire pressures provide
                  better straight-line stability, while lower pressures offer
                  better traction.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4 pt-4">
                    Launch? 🚀
                  </p>{" "}
                  The launch is the most critical part of a drag race. A good
                  launch sets the tone for the entire race. To get a good
                  launch, you need to have the right RPM, tire pressure, and
                  weight transfer. The perfect launch RPM is dependent on your
                  car's engine and gearing. The goal is to get the engine to the
                  peak of its power curve and then release the clutch quickly.
                  This technique is called slipping the clutch. A good launch
                  also requires proper weight transfer. The weight of your car
                  shifts during acceleration. The more weight that transfers to
                  the rear of the car, the better the traction. You can achieve
                  better weight transfer by installing a rear sway bar or a set
                  of traction bars.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4 pt-4">
                    Aerodynamics? ✈️
                  </p>{" "}
                  Aerodynamics plays a significant role in drag racing. You can
                  improve your car's aerodynamics by installing a rear wing or
                  front splitter. These modifications help reduce drag and
                  increase downforce, which results in better traction and
                  stability. However, aerodynamic modifications should be done
                  in combination with other modifications to maximize their
                  effectiveness.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4 pt-4">
                    Suspension? 🦿
                  </p>{" "}
                  Suspension tuning is essential for drag racing. A well-tuned
                  suspension can improve traction, handling, and weight
                  transfer. Stiffer springs, shocks, and sway bars can help
                  reduce body roll and improve weight transfer. Adjustable
                  coilovers offer more flexibility in suspension tuning. Camber
                  and toe adjustments can also help improve handling and
                  traction.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4 pt-4">
                    Engine Tuning? 💻
                  </p>{" "}
                  Engine tuning is the process of optimizing your car's engine
                  for better performance. A well-tuned engine can provide more
                  horsepower and torque. Upgrading the air intake, exhaust, and
                  fuel system can increase engine performance. Tuning the
                  engine's computer (ECU) can also increase performance.
                  However, engine tuning should be done by an experienced
                  professional to avoid damaging the engine.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <p className="text-lime-800 font-fugaz-one text-2xl pb-4 pt-4">
                    Practice?🚦
                  </p>{" "}
                  Practice makes perfect. The more you practice, the better you
                  will become. It is essential to have a consistent driving
                  style and to make small adjustments to your car. Keep a
                  logbook of your car's performance to keep track of your
                  progress. Analyze your data and make changes based on your
                  findings. Consistency is key to winning races.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              In conclusion, to be the fastest drag racer, you need to have a
              combination of skill, strategy, and secrets. By knowing your car,
              choosing the right tires, getting a good launch, improving weight
              transfer, optimizing aerodynamics, tuning your suspension, and
              engine, and practicing regularly, you can gain an edge on the
              competition. Remember to make small adjustments and analyze your
              data to improve your performance. With these tips, you will be on
              your way to becoming the fastest drag racer.
            </p>
            <h2 className="mt-16 text-2xl tracking-tight text-gray-900 font-fugaz-one">
              Need Help? No problem! 💯
            </h2>
            <p className="mt-6">
              If you're looking to take your drag racing to the next level,
              Jones Co. Automotive can help you achieve your goals. Our team of
              experienced professionals can work with you to optimize your car's
              performance and help you gain an edge on the competition. From
              engine tuning to suspension and aerodynamics, we offer a wide
              range of services to meet your needs. Contact us today to learn
              more about how we can help you become the fastest drag racer on
              the track.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
