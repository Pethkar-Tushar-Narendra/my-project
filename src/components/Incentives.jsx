import moduleName1 from "../assets/Services.png";
import moduleName2 from "../assets/Services (1).png";
import moduleName3 from "../assets/Services (2).png";

const incentives = [
  {
    name: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    imageSrc: moduleName1,
  },
  {
    name: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    imageSrc: moduleName2,
  },
  {
    name: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
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
                <h3 className="text-md font-bold text-gray-900">
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
