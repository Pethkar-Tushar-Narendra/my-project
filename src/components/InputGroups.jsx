import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const InputGroups = () => {
  return (
    <div>
      {/* <label
        htmlFor="search"
        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
      >
        Quick search
      </label> */}
      <div className="mt-2">
        <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-1 dark:-outline-offset-1 dark:outline-white/10 dark:focus-within:outline-indigo-500">
          <input
            id="search"
            name="search"
            type="text"
            placeholder="What are you looking for?"
            className="block min-w-0 grow px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
          />
          <div className="flex py-1.5 pr-1.5">
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGroups;
