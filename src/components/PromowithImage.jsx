import { Link } from "react-router-dom";
import iphone from "../assets/hero_endframe__cvklg0xk3w6e_large 2.png";
import iphoneIcon from "../assets/1200px-Apple_gray_logo 1.png";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function PromowithImage() {
  return (
    <div className="overflow-hidden bg-black py-8 sm:py-12 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg pl-6">
              <div className="flex items-center gap-x-4">
                <img src={iphoneIcon} />
                <h2 className="text-base/7 font-semibold text-gray-100">
                  iPhone 14 Series{" "}
                </h2>
              </div>
              <p className="mt-4 text-4xl font-semibold tracking-tight text-pretty text-gray-100 sm:text-6xl">
                Up to 10% off Voucher
              </p>
              <Link
                to={"#"}
                className="text-xl underline-offset-4 text-gray-100 flex underline mt-6 items-center gap-x-2 font-medium"
              >
                Shop Now
                <ArrowRightIcon className="h-6 w-6 text-gray-500" />
              </Link>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={iphone}
            width={496}
            height={352}
            className="sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
