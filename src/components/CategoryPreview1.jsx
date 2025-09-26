import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { fetchCategories } from "../store/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CategoriesSkeleton from "./skeletons/CategoriesSkeleton";
import Alerts from "./UI/Alerts";
import Camera from "../assets/Category-Camera.svg";
import CellPhone from "../assets/Category-CellPhone.svg";
import Computer from "../assets/Category-Computer.svg";
import Gamepad from "../assets/Category-Gamepad.svg";
import Headphone from "../assets/Category-Headphone.svg";
import SmartWatch from "../assets/Category-SmartWatch.svg";
import { setSelectedCategoryId } from "../store/categorySlice";
import { fetchProductsByCategory } from "../store/productsSlice";

const categoriesIcons = [
  // {
  //   name: "New Arrivals",
  //   href: "#",
  //   imageSrc: Camera,
  // },
  {
    name: "New Arrivals",
    href: "#",
    imageSrc: CellPhone,
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: Computer,
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: Gamepad,
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: Headphone,
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc: SmartWatch,
  },
];

export default function CategoryPreview1() {
  const dispatch = useDispatch();
  const {
    items: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);

  const selectedCategoryId = useSelector(
    (state) => state.category.selectedCategoryId
  );

  useEffect(() => {
    if (selectedCategoryId) {
      dispatch(fetchProductsByCategory());
    }
  }, [selectedCategoryId, dispatch]);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, [dispatch]);

  function handleCategoryChange(categoryId) {
    dispatch(setSelectedCategoryId(categoryId));
  }

  return (
    <div className="bg-white ">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8 border-t border-b border-gray-200">
        {/* --- Flash Sales Header, Timer, and Arrows --- */}
        <div className="flex items-center text-red-500 font-bold px-4 sm:px-6 lg:px-0">
          <span className="inline-block w-5 h-10 bg-red-500 rounded mr-2"></span>
          Categories
        </div>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 mt-5">
          <div className="flex flex-col justify-center gap-5 lg:gap-10 lg:flex-row lg:items-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Browse By Category
            </h2>
          </div>
          <div className="hidden text-sm font-semibold sm:block">
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2 mx-2"
              aria-label="See previous"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2"
              aria-label="See next"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* --- State-Driven Product List --- */}
        {loading ? (
          <CategoriesSkeleton />
        ) : error ? (
          <Alerts message={error} />
        ) : (
          <div className="mt-16 flow-root">
            <div className="-my-2">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <div className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:gap-x-8 lg:space-x-0">
                  {categories.map((category, idx) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`relative ${
                        selectedCategoryId === category.id && "bg-red-600"
                      } flex h-40 w-44 flex-col items-center overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-48 border border-gray-200`}
                    >
                      <span aria-hidden="true" className="absolute">
                        <img
                          alt=""
                          src={
                            selectedCategoryId === category.id
                              ? Camera
                              : categoriesIcons[idx % 5].imageSrc
                          }
                          className="size-full object-cover"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 "
                      />
                      <span
                        className={`relative mt-auto text-center ${
                          selectedCategoryId === category.id
                            ? "text-white font-bold"
                            : "text-black"
                        }`}
                      >
                        {category.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="mt-6 px-4 hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
