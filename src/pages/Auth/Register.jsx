import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});

  // Inline validation
  const validate = (name, value) => {
    let error = "";
    if ((name === "first_name" || name === "last_name") && !value.trim()) {
      error = "Required";
    }
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email address";
    }
    if (name === "mobile") {
      if (!/^\d{10}$/.test(value)) error = "Must be 10 digits";
    }
    if (name === "password") {
      if (value.length < 6) error = "At least 6 characters";
    }
    if (name === "confirm_password") {
      if (value !== formData.password) error = "Passwords do not match";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));

    // Always re-validate "confirm_password" if "password" changes
    if (name === "password" && formData.confirm_password) {
      setErrors((prev) => ({
        ...prev,
        confirm_password:
          value === formData.confirm_password ? "" : "Passwords do not match",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((e) => !e)) {
      // Valid data, send to API (remove confirm_password)
      const { confirm_password, ...body } = formData;
      console.log(body); // Send this to your backend
    }
  };

  return (
    <>
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-10 w-auto dark:hidden"
          />
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-10 w-auto not-dark:hidden"
          />
          <h2 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
            Register your account
          </h2>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
            Already a{" "}
            <Link
              to={"/auth/login"}
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              member?
            </Link>
          </p>
        </div>

        <div className="mt-10">
          <div>
            <form action="#" method="POST" className="space-y-6">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Phone number
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:has-[input:focus-within]:outline-indigo-500">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-transparent dark:text-gray-400 dark:*:bg-gray-800 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
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
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:bg-transparent dark:text-white dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
