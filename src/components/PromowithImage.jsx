import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-black py-8 sm:py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-400">
                Deploy faster
              </h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-3xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={iphone}
            width={496}
            height={352}
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 dark:hidden dark:ring-white/10"
          />
        </div>
      </div>
    </div>
  );
}
