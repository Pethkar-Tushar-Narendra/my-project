import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice"; // adjust path
import CategoriesSkeleton from "./skeletons/CategoriesSkeleton"; // loading skeleton
import Alerts from "./UI/Alerts"; // error alert

export default function ProductLists2() {
  const dispatch = useDispatch();
  const {
    items: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  const selectedCategoryId = useSelector(
    (state) => state.categories.selectedCategoryId
  );
  useEffect(() => {
    if (!selectedCategoryId) {
      dispatch(fetchProducts());
    }
  }, [dispatch, selectedCategoryId]);
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center text-red-500 font-bold px-4 sm:px-6 lg:px-0">
          <span className="inline-block w-5 h-10 bg-red-500 rounded mr-2"></span>
          This Month{" "}
        </div>
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0 mt-5">
          <div className="flex flex-col justify-center gap-5 lg:gap-10 lg:flex-row lg:items-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Best Selling Products{" "}
            </h2>
          </div>
          <div className="hidden text-sm font-semibold sm:block">
            <button
              type="button"
              className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              aria-label="See previous"
            >
              View All
            </button>
          </div>
        </div>

        {/* --- State-Driven Product List --- */}
        {loading ? (
          <CategoriesSkeleton />
        ) : error ? (
          <Alerts message={error} />
        ) : (
          <>
            <div className="relative mt-8">
              <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                <ul
                  role="list"
                  className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:gap-x-8 lg:space-x-0"
                  // style={{ minWidth: "max-content" }}
                >
                  {products?.map((product, idx) => (
                    <li
                      // ref={idx === products.length - 1 ? lastProductRef : null}
                      key={product.id}
                      className="inline-flex w-64 flex-col text-start lg:w-60"
                    >
                      <div className="group relative">
                        {/* Discount Badge */}
                        {/* {product.price && product.discounted_price && (
                          <span className="absolute left-2 top-2 bg-red-500 text-xs text-white font-semibold px-2 py-0.5 rounded">
                            -
                            {Math.round(
                              (1 -
                                parseFloat(product.discounted_price) /
                                  parseFloat(product.price)) *
                                100
                            )}
                            %
                          </span>
                        )} */}
                        <button className="absolute right-2 top-2 bg-white rounded-full p-1 transition hover:bg-gray-100">
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
                        <button className="absolute right-2 top-12 bg-white rounded-full p-1 transition hover:bg-gray-100">
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
                        <img
                          alt={product.name}
                          src={product.image}
                          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                        />
                        <div className="mt-6">
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
                            <span className="text-gray-400 line-through text-sm">
                              ${product.price}
                            </span>
                          </p>
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

                      {/* <h4 className="sr-only">Available colors</h4>
                             <ul
                               role="list"
                               className="mt-auto flex items-center justify-center space-x-3 pt-6"
                             >
                               {product.availableColors.map((color) => (
                                 <li
                                   key={color.name}
                                   style={{ backgroundColor: color.colorBg }}
                                   className="size-4 rounded-full border border-black/10"
                                 >
                                   <span className="sr-only">{color.name}</span>
                                 </li>
                               ))}
                             </ul> */}
                    </li>
                  ))}
                  {products.length === 0 && !loading && (
                    <Alerts className="p-4 text-gray-500">
                      No products found.
                    </Alerts>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
        <div className="mt-8 ml-5 text-sm sm:hidden">
          <button
            onClick={() => {
              dispatch(fetchProducts());
            }}
            type="button"
            className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
