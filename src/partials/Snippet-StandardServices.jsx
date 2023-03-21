const features = [
  {
    name: "Shuttle Transportation",
    description:
      "Need work on your vehicle but can't find time to get it done? If your destination is within 20 miles we will drop you off and pick you up at no charge!",
  },
  {
    name: "Repair and Maintenance",
    description:
      "Our legendary mechanics build cars from the ground up, repair and maintenance is a walk in the park for our team!",
  },
  {
    name: "Customization and Upgrades",
    description:
      "Car mods are our favorite hobby. Both at work and at home, our team is the best at going fast and looking good doing it.",
  },
  {
    name: "Wheel and Tire Services",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
  {
    name: "Vehicle Inspections",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Fleet Management",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export default function Example() {
  return (
    <div className="bg-white py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl tracking-tight text-gray-900 sm:text-5xl font-fugaz-one">
            One Stop Shop 🔧
          </h2>
          <p className="font-bold mt-2 sm:mt-6 text-md leading-6 sm:leading-8 text-lime-900">
            We take your feedback to heart and improve our services with every
            customer.
          </p>
        </div>
        <dl className="mx-auto mt-8 sm:mt-16 grid max-w-2xl grid-cols-1 gap-x-8 sm:gap-x-14 gap-y-8 sm:gap-y-12 text-base leading-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt className="font-semibold text-gray-900 sm:text-xl sm:pb-4">{feature.name}</dt>
              <dd className="mt-1 text-lime-900">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
