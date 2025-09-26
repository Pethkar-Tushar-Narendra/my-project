import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import { addToCart } from "../store/cartSlice";
import { fetchProducts } from "../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-01.jpg",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    options: "Black",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Kinda White Basic Tee",
    href: "#",
    price: "$32",
    description: "It's probably, like, 5000 Kelvin instead of 6000 K.",
    options: "White",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-03.jpg",
    imageAlt: "Front of plain white t-shirt.",
  },
  {
    id: 4,
    name: "Stone Basic Tee",
    href: "#",
    price: "$32",
    description:
      "White tees stain easily, and black tees fade. This is going to be gray for a while.",
    options: "Charcoal",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-04.jpg",
    imageAlt: "Front of plain dark gray t-shirt.",
  },
  {
    id: 5,
    name: "Fall Basic Tee 3-Pack",
    href: "#",
    price: "$96",
    description:
      "Who need stark minimalism when you could have earth tones? Embrace the season.",
    options: "Charcoal",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-05.jpg",
    imageAlt:
      "Three shirts arranged on table in mustard, dark gray, and olive.",
  },
  {
    id: 6,
    name: "Linework Artwork Tee 3-Pack",
    href: "#",
    price: "$108",
    description:
      "Get all 3 colors of our popular Linework design and some variety to your monotonous life.",
    options: "3 colors",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg",
    imageAlt:
      "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
  },
];

export default function ProductLists3() {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);
  const { loading: loadingCart, error: errorCart } = useSelector(
    (state) => state.cart
  );

  const selectedCategoryId = useSelector(
    (state) => state.categories.selectedCategoryId
  );
  const userId = useSelector((state) => state.user.userInfo.id);

  useEffect(() => {
    if (!selectedCategoryId) {
      dispatch(fetchProducts());
    }
  }, [dispatch, selectedCategoryId]);

  // This is for the timer; in a real app, implement countdown logic!
  const timer = {
    days: "03",
    hours: "23",
    minutes: "19",
    seconds: "56",
  };

  function handleAddToCart(productId) {
    dispatch(addToCart({ userId, productId }));
  }

  // Track starting index for pagination
  const [startIndex, setStartIndex] = useState(0);

  // Change this if you want a different page size
  const PAGE_SIZE = 8;

  // Show products in the current page
  const visibleProducts = products.slice(startIndex, startIndex + PAGE_SIZE);

  // Handler functions for navigation
  function handlePrev() {
    setStartIndex((prev) => Math.max(prev - PAGE_SIZE, 0));
  }

  function handleNext() {
    setStartIndex((prev) =>
      Math.min(prev + PAGE_SIZE, products.length - PAGE_SIZE)
    );
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="flex items-center text-red-500 font-bold px-4 sm:px-6 lg:px-0">
          <span className="inline-block w-5 h-10 bg-red-500 rounded mr-2"></span>
          Our Products{" "}
        </div>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 mt-5">
          <div className="flex flex-col justify-center gap-5 lg:gap-10 lg:flex-row lg:items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Explore Our Products{" "}
            </h2>
          </div>
          <div className="text-sm font-semibold sm:block">
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2 mx-2"
              aria-label="See previous"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="rounded-full bg-gray-100 p-2"
              aria-label="See next"
              onClick={handleNext}
              disabled={startIndex + PAGE_SIZE >= products.length}
            >
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 gap-y-16 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="inline-flex w-full md:w-64 flex-col text-start lg:w-60 pb-8 md:pb-0"
            >
              <div className="group relative">
                {/* Discount Badge */}
                {product.price && product.discounted_price && (
                  <span className="absolute left-2 top-2 bg-red-500 text-xs text-white font-semibold px-2 py-0.5 rounded z-10">
                    -
                    {Math.round(
                      (1 -
                        parseFloat(product.discounted_price) /
                          parseFloat(product.price)) *
                        100
                    )}
                    %
                  </span>
                )}
                <button className="absolute right-2 z-10 top-2 bg-white rounded-full p-1 transition hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
                <button className="absolute right-2 z-10 top-12 bg-white rounded-full p-1 transition hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-5 h-5 text-gray-900"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 4.5C7.305 4.5 3.115 7.118 1 12c2.115 4.882 6.305 7.5 11 7.5s8.885-2.618 11-7.5c-2.115-4.882-6.305-7.5-11-7.5zm0 13c-2.761 0-5-2.239-5-5s2.239-5 5-5 5 2.239 5 5-2.239 5-5 5z" />
                  </svg>
                </button>
                <div className="group relative">
                  {/* ... other elements ... */}
                  <img
                    alt={product.name}
                    src={product.image}
                    className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                  />
                  {/* Add to Cart button, revealed on hover */}
                  <button
                    disabled={loadingCart}
                    className="absolute bottom-0 cursor-pointer z-10 left-0 bg-black text-white py-2 font-semibold flex w-full justify-center rounded-md items-center gap-x-1.5 px-3 shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    {loadingCart && (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 me-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                    Add To Cart
                  </button>
                  {/* ... rest of card ... */}
                </div>

                <div className="mt-6 ">
                  {/* <p className="text-sm text-gray-500">
                            {product.color}
                          </p> */}
                  <h3 className="mt-1 font-semibold text-gray-900">
                    <p>
                      <span className="absolute inset-0" />
                      {product.name}
                    </p>
                  </h3>
                  <p className="mt-1">
                    <span className="text-red-500 font-semibold">
                      ${product.discounted_price}
                    </span>{" "}
                    <span className="text-gray-400 line-through text-sm ml-2">
                      ${product.price}
                    </span>
                  </p>
                  <button
                    disabled={loadingCart}
                    className="md:hidden absolute -bottom-12 bg-black text-white py-2 font-semibold flex w-full justify-center rounded-md items-center gap-x-1.5 px-3 shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 rounded-b-md mt-3 z-10"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    {loadingCart && (
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 me-3 text-white animate-spin"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span className="sr-only">Loading...</span>
                      </div>
                    )}
                    Add To Cart
                  </button>
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-start mt-2">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < product.average_rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <polygon points="9.9,1.1,12.3,6.6,18.2,7.3,13.6,11.3,15,17.1,9.9,14.1,4.8,17.1,6.2,11.3,1.6,7.3,7.5,6.6" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.votes_no})
                  </span>
                </div>
              </div>
            </div>
          ))}
          {products.length === 0 && !loading && (
            <Alerts className="p-4 text-gray-500">No products found.</Alerts>
          )}
        </div>
        <div className="mt-12 flex px-4 justify-center hidden">
          <button
            onClick={() => {
              dispatch(fetchProducts());
            }}
            type="button"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}
