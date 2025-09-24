import {
  ChevronDownIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/16/solid";

export default function Input({
  id,
  label,
  defaultValue,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
  phoneNumber,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm/6 font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="mt-2 grid grid-cols-1">
        {phoneNumber ? (
          <div
            className={
              error
                ? " flex col-start-1 row-start-1 w-full rounded-md bg-white  text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6 dark:bg-white/5 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400"
                : "flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500"
            }
          >
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <select
                id="country"
                name="country"
                autoComplete="country"
                aria-label="Country"
                className={`${
                  error && "text-red-900 placeholder:text-red-300"
                } col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500`}
              >
                <option>IN</option>
                {/* <option>CA</option>
                          <option>EU</option> */}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
              />
            </div>
            <input
              defaultValue={defaultValue}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={error ? `${id}-error` : undefined}
              className={`${
                error && "text-red-900 placeholder:text-red-300"
              } block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500`}
            />
          </div>
        ) : (
          <input
            defaultValue={defaultValue}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${id}-error` : undefined}
            className={
              error
                ? "col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-10 pl-3 text-red-900 outline-1 -outline-offset-1 outline-red-300 placeholder:text-red-300 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 sm:pr-9 sm:text-sm/6 dark:bg-white/5 dark:text-red-400 dark:outline-red-500/50 dark:placeholder:text-red-400/70 dark:focus:outline-red-400"
                : "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
            }
          />
        )}

        {error && (
          <ExclamationCircleIcon
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-3 justify-self-end self-center text-red-500 sm:h-5 sm:w-5 h-4 w-4 dark:text-red-400"
          />
        )}
      </div>
      {error && (
        <p
          id="email-error"
          className="mt-2 text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}
