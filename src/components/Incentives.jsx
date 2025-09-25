import moduleName1 from "../assets/Services.png";
import moduleName2 from "../assets/Services (1).png";
import moduleName3 from "../assets/Services (2).png";

const incentives = [
  {
    name: "Free Shipping",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc: moduleName1,
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc: moduleName2,
  },
  {
    name: "Fast Shopping Cart",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc: moduleName3,
  },
];

export default function Incentives() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 lg:max-w-none lg:grid-cols-3">
          {incentives.map((incentive) => (
            <div
              key={incentive.name}
              className="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:shrink-0">
                <div className="flow-root">
                  <img
                    alt=""
                    src={incentive.imageSrc}
                    className="mx-auto h-16 w-16"
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
                <h3 className="text-sm font-medium text-gray-900">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
