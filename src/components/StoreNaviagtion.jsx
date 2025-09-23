"use client";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import InputGroups from "./InputGroups";
const currencies = ["English", "Hindi", "Marathi"];
const navigation = {
  categories: [
    // {
    //   name: "Women",
    //   clothing: [
    //     [
    //       { name: "Tops", href: "#" },
    //       { name: "Dresses", href: "#" },
    //       { name: "Pants", href: "#" },
    //       { name: "Denim", href: "#" },
    //       { name: "Sweaters", href: "#" },
    //       { name: "T-Shirts", href: "#" },
    //     ],
    //     [
    //       { name: "Jackets", href: "#" },
    //       { name: "Activewear", href: "#" },
    //       { name: "Shorts", href: "#" },
    //       { name: "Swimwear", href: "#" },
    //       { name: "Browse All", href: "#" },
    //     ],
    //   ],
    //   accessories: [
    //     { name: "Shoes", href: "#" },
    //     { name: "Jewelry", href: "#" },
    //     { name: "Handbags", href: "#" },
    //     { name: "Socks", href: "#" },
    //     { name: "Hats", href: "#" },
    //     { name: "Browse All", href: "#" },
    //   ],
    //   categories: [
    //     { name: "New Arrivals", href: "#" },
    //     { name: "Sale", href: "#" },
    //     { name: "Basic Tees", href: "#" },
    //     { name: "Artwork Tees", href: "#" },
    //   ],
    // },
    // {
    //   name: "Men",
    //   clothing: [
    //     [
    //       { name: "Dress Shirts", href: "#" },
    //       { name: "Pants", href: "#" },
    //       { name: "Jackets", href: "#" },
    //       { name: "T-Shirts", href: "#" },
    //       { name: "Jeans", href: "#" },
    //       { name: "Hoodies", href: "#" },
    //     ],
    //     [
    //       { name: "Vests", href: "#" },
    //       { name: "Kilts", href: "#" },
    //       { name: "Outdoors", href: "#" },
    //       { name: "Capes", href: "#" },
    //       { name: "Browse All", href: "#" },
    //     ],
    //   ],
    //   accessories: [
    //     { name: "Watches", href: "#" },
    //     { name: "Boots", href: "#" },
    //     { name: "Fanny Packs", href: "#" },
    //     { name: "Sunglasses", href: "#" },
    //     { name: "Browse All", href: "#" },
    //   ],
    //   categories: [
    //     { name: "Just Added", href: "#" },
    //     { name: "Clearance", href: "#" },
    //     { name: "Graphic Tees", href: "#" },
    //   ],
    // },
  ],
  pages: [
    { name: "Home", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About", href: "#" },
    { name: "Sign Up", href: "#" },
  ],
};

export default function StoreNavigation() {
  return (
    <div className="bg-white">
      <header className="relative border-b border-gray-200">
        <nav aria-label="Top ">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <div className="hidden lg:block lg:flex-1"></div>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!{" "}
                <a href="#" className="ps-2 underline text-sm">
                  ShopNow
                </a>
              </p>

              <form className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="desktop-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pr-7 pl-2 text-left text-base font-medium text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className=" px-4 pb-14 sm:pb-0 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-3">
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex flex-1 pr-2">
                <a href="#">
                  <span className="sr-only">Exclusive</span>
                  {/* <img alt="" src={logo} className="h-5 w-auto" /> */}
                  <h1 className="text-black text-2xl font-semibold">
                    Exclusive
                  </h1>
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="absolute inset-x-0 bottom-0 sm:static sm:flex-1 sm:self-stretch">
                <div className="flex h-14 space-x-8 overflow-x-auto border-t border-gray-200 px-4 pb-px sm:h-full sm:justify-center sm:overflow-visible sm:border-t-0 sm:pb-0">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-indigo-600">
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-indigo-600"
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in sm:text-sm"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 top-1/2 bg-white shadow-sm"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10 pt-10 pb-12 md:grid-cols-2 lg:gap-x-8">
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:gap-x-8">
                                <div>
                                  <p
                                    id="clothing-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Clothing
                                  </p>
                                  <div className="mt-4 border-t border-gray-200 pt-6 sm:grid sm:grid-cols-2 sm:gap-x-6">
                                    <ul
                                      role="list"
                                      aria-labelledby="clothing-heading"
                                      className="space-y-6 sm:space-y-4"
                                    >
                                      {category.clothing[0].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                    <ul
                                      role="list"
                                      aria-label="More clothing"
                                      className="mt-6 space-y-6 sm:mt-0 sm:space-y-4"
                                    >
                                      {category.clothing[1].map((item) => (
                                        <li key={item.name} className="flex">
                                          <a
                                            href={item.href}
                                            className="hover:text-gray-800"
                                          >
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:gap-x-8">
                                <div>
                                  <p
                                    id="accessories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Accessories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="accessories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.accessories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <p
                                    id="categories-heading"
                                    className="font-medium text-gray-900"
                                  >
                                    Categories
                                  </p>
                                  <ul
                                    role="list"
                                    aria-labelledby="categories-heading"
                                    className="mt-4 space-y-6 border-t border-gray-200 pt-6 sm:space-y-4"
                                  >
                                    {category.categories.map((item) => (
                                      <li key={item.name} className="flex">
                                        <a
                                          href={item.href}
                                          className="hover:text-gray-800"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 whitespace-nowrap"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="flex flex-1 items-center justify-end">
                {/* Search */}
                {/* <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                </a> */}
                <InputGroups />

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <HeartIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingCartIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
