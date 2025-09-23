"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import PromoWithCorousal from "./PromowithImage";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, current: true, href: "#" },
  {
    name: "Team",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Calendar",
    icon: CalendarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Documents",
    icon: InboxIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
  {
    name: "Reports",
    icon: ChartBarIcon,
    current: false,
    children: [
      { name: "Overview", href: "#" },
      { name: "Members", href: "#" },
      { name: "Calendar", href: "#" },
      { name: "Settings", href: "#" },
    ],
  },
];

const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
      <div>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>

              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
                <div className="flex shrink-0 items-center px-4">
                  <img
                    alt="Your Company"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <div className="mt-5 flex grow flex-col">
                  <nav
                    aria-label="Sidebar"
                    className="flex-1 space-y-1 bg-white px-2"
                  >
                    {navigation.map((item) =>
                      !item.children ? (
                        <div key={item.name}>
                          <a
                            href="#"
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className={classNames(
                                item.current
                                  ? "text-gray-500"
                                  : "text-gray-400 group-hover:text-gray-500",
                                "mr-3 size-6 shrink-0"
                              )}
                            />
                            {item.name}
                          </a>
                        </div>
                      ) : (
                        <Disclosure
                          key={item.name}
                          as="div"
                          className="space-y-1"
                        >
                          <DisclosureButton
                            className={classNames(
                              item.current
                                ? "bg-gray-100 text-gray-900"
                                : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                              "group flex w-full items-center rounded-md py-2 pr-1 pl-2 text-left text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                            )}
                          >
                            <item.icon
                              aria-hidden="true"
                              className="mr-3 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                            />
                            <span className="flex-1">{item.name}</span>
                            <svg
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              className="ml-3 size-5 shrink-0 transform text-gray-300 transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-400"
                            >
                              <path
                                d="M6 6L14 10L6 14V6Z"
                                fill="currentColor"
                              />
                            </svg>
                          </DisclosureButton>
                          <DisclosurePanel className="space-y-1">
                            {item.children.map((subItem) => (
                              <DisclosureButton
                                key={subItem.name}
                                as="a"
                                href={subItem.href}
                                className="group flex w-full items-center rounded-md py-2 pr-2 pl-11 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              >
                                {subItem.name}
                              </DisclosureButton>
                            ))}
                          </DisclosurePanel>
                        </Disclosure>
                      )
                    )}
                  </nav>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden bg-gray-900 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4">
            <div className="flex shrink-0 items-center px-4">
              <img
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <div className="mt-5 flex grow flex-col">
              <nav
                aria-label="Sidebar"
                className="flex-1 space-y-1 bg-white px-2"
              >
                {navigation.map((item) =>
                  !item.children ? (
                    <div key={item.name}>
                      <a
                        href="#"
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex w-full items-center rounded-md py-2 pl-2 text-sm font-medium"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 size-6 shrink-0"
                          )}
                        />
                        {item.name}
                      </a>
                    </div>
                  ) : (
                    <Disclosure key={item.name} as="div" className="space-y-1">
                      <DisclosureButton
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                          "group flex w-full items-center rounded-md py-2 pr-1 pl-2 text-left text-sm font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="mr-3 size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                        />
                        <span className="flex-1">{item.name}</span>
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="ml-3 size-5 shrink-0 transform text-gray-300 transition-colors duration-150 ease-in-out group-hover:text-gray-400 group-data-open:rotate-90 group-data-open:text-gray-400"
                        >
                          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                        </svg>
                      </DisclosureButton>
                      <DisclosurePanel className="space-y-1">
                        {item.children.map((subItem) => (
                          <DisclosureButton
                            key={subItem.name}
                            as="a"
                            href={subItem.href}
                            className="group flex w-full items-center rounded-md py-2 pr-2 pl-11 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          >
                            {subItem.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-gray-900 dark:shadow-none">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden dark:text-gray-400 dark:hover:text-white"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-200 lg:hidden dark:bg-white/10"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Separator */}
                <div
                  aria-hidden="true"
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-white/10"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="relative flex items-center">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        aria-hidden="true"
                        className="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-white"
                      >
                        Tom Cook
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="ml-2 size-5 text-gray-400 dark:text-gray-500"
                      />
                    </span>
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden dark:text-white dark:data-focus:bg-white/5"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">
              <PromoWithCorousal />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
