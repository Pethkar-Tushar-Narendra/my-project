"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";

const currencies = ["English", "Hindi", "Marathi"];
const navigation = {
  categories: [
    // {
    //   name: "Women",
    //   featured: [
    //     {
    //       name: "New Arrivals",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg",
    //       imageAlt:
    //         "Models sitting back to back, wearing Basic Tee in black and bone.",
    //     },
    //     {
    //       name: "Basic Tees",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg",
    //       imageAlt:
    //         "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
    //     },
    //     {
    //       name: "Accessories",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg",
    //       imageAlt:
    //         "Model wearing minimalist watch with black wristband and white watch face.",
    //     },
    //     {
    //       name: "Carry",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg",
    //       imageAlt:
    //         "Model opening tan leather long wallet with credit card pockets and cash pouch.",
    //     },
    //   ],
    // },
    // {
    //   name: "Men",
    //   featured: [
    //     {
    //       name: "New Arrivals",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
    //       imageAlt:
    //         "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
    //     },
    //     {
    //       name: "Basic Tees",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
    //       imageAlt: "Model wearing light heather gray t-shirt.",
    //     },
    //     {
    //       name: "Accessories",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
    //       imageAlt:
    //         "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
    //     },
    //     {
    //       name: "Carry",
    //       href: "#",
    //       imageSrc:
    //         "https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
    //       imageAlt:
    //         "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
    //     },
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

export default function StoreNaviagtion({ openCart }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 py-6"
                  >
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a
                            href={item.href}
                            className="mt-6 block text-sm font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p
                            aria-hidden="true"
                            className="mt-1 text-sm text-gray-500"
                          >
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <Link
                  to={"/auth"}
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </Link>
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pr-7 pl-2 text-base font-medium text-gray-700 group-hover:text-gray-800 focus:outline-2 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top ">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-12 lg:h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <div className="hidden lg:block lg:flex-1">
                {/* <div className="-ml-2 inline-grid grid-cols-1">
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
                </div> */}
              </div>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!{" "}
                <Link to={"/"} className="ml-2 underline underline-offset-4">
                  ShopNow
                </Link>
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
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
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white mt-3">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="">
                <div className="flex h-16 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <Link to="#">
                      <span className="sr-only">Your Company</span>
                      <h1 className="font-inter font-bold text-2xl leading-[24px] tracking-[0.03em]">
                        Exclusive
                      </h1>
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 px-4 z-40">
                      <div className="flex h-full justify-center space-x-8">
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
                              className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 top-1/2 bg-white shadow-sm"
                              />
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative"
                                      >
                                        <img
                                          alt={item.imageAlt}
                                          src={item.imageSrc}
                                          className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-75"
                                        />
                                        <a
                                          href={item.href}
                                          className="mt-4 block font-medium text-gray-900"
                                        >
                                          <span
                                            aria-hidden="true"
                                            className="absolute inset-0 z-10"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}
                        {navigation.pages.map((page) => (
                          <NavLink
                            key={page.name}
                            to={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </NavLink>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>

                    {/* Search */}
                    <a
                      href="#"
                      className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <h1 className="font-inter font-bold text-2xl leading-[24px] tracking-[0.03em]">
                      Exclusive
                    </h1>
                  </Link>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="grid-cols-1 hidden md:grid">
                      <input
                        id="account-number"
                        name="account-number"
                        type="text"
                        disabled
                        placeholder="What are you looking for?"
                        className="disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200 col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pr-9 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                      />
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 mr-3 size-5 self-center justify-self-end text-gray-400 sm:size-5 dark:text-gray-500"
                      />
                    </div>

                    <div className="flex items-center lg:ml-4">
                      {/* Help */}
                      <HeartIcon aria-hidden="true" className="size-6" />

                      {/* Cart */}
                      <div className="ml-4 flow-root lg:ml-4">
                        <button
                          className="group -m-2 flex items-center p-2"
                          onClick={openCart}
                        >
                          <ShoppingCartIcon
                            aria-hidden="true"
                            className="size-6 shrink-0"
                          />
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
