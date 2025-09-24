import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Input from "../../components/UI/Input";
import { registerUser } from "../../store/userSlice";
export default function Register() {
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({});
  const [showErrorModal, setShowErrorModal] = useState(false);

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
      dispatch(registerUser(body));
    }
  };

  useEffect(() => {
    if (userInfo) {
      console.log("Logged in user:", userInfo);
      navigate("/");
    }
  }, [userInfo, navigate]);

  // Show alert modal if error and general error exists
  useEffect(() => {
    if (error?.errors?.general) {
      setShowErrorModal(true);
    }
  }, [error]);

  const closeModal = () => {
    setShowErrorModal(false);
  };

  return (
    <>
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="h-10 w-auto dark:hidden"
          />
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="h-10 w-auto not-dark:hidden"
          /> */}
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
                  <Input
                    id="first_name"
                    label="First name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    error={errors.first_name}
                    placeholder="First name"
                  />
                  {/* <label
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
                  </div> */}
                </div>

                <div className="sm:col-span-3">
                  <Input
                    id="last_name"
                    label="Last name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    error={errors.last_name}
                    placeholder="Last name"
                  />
                </div>
                <div className="col-span-full">
                  <Input
                    id="email"
                    label="Email address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="col-span-full">
                  <Input
                    id="mobile"
                    label="Phone number"
                    type="number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="123-456-7890"
                    error={errors.mobile}
                    phoneNumber={true}
                  />
                </div>
                <div className="col-span-full">
                  <Input
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    error={errors.password}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="col-span-full">
                  <Input
                    id="confirm_password"
                    label="Confirm Password"
                    type="password"
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    error={errors.confirm_password}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  loading={loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
          {showErrorModal && (
            <Alerts message={error.errors.general} onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
}
