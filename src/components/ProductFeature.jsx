import Frame from "../assets/Frame 694.svg";
export default function ProductFeature() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 py-16 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="overflow-hidden bg-black py-8 sm:py-12 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg pl-6">
                  <div className="flex items-center gap-x-4">
                    <h2 className="text-green-500 font-semibold text-lg">
                      Categories
                    </h2>
                  </div>
                  <h2 className="mt-4 text-white text-4xl md:text-5xl font-bold mb-2 leading-tight">
                    Enhance Your
                    <br />
                    Music Experience{" "}
                  </h2>
                  <div className="flex gap-5 my-6">
                    {/* Timer circles */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl font-bold">
                        23
                      </div>
                      <div className="text-white text-xs mt-1">Hours</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl font-bold">
                        05
                      </div>
                      <div className="text-white text-xs mt-1">Days</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl font-bold">
                        59
                      </div>
                      <div className="text-white text-xs mt-1">Minutes</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-black text-2xl font-bold">
                        35
                      </div>
                      <div className="text-white text-xs mt-1">Seconds</div>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-shadow shadow-lg">
                    Buy Now!
                  </button>
                </div>
              </div>
              <img
                alt="Product screenshot"
                src={Frame}
                width={600}
                height={420}
                className="sm:w-228 md:-ml-4 lg:-ml-0 object-contain drop-shadow-2xl drop-shadow-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
