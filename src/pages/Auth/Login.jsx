import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../../store/userSlice";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";
import Alerts from "../../components/UI/Alerts";

export default function Login() {
  const dispatch = useDispatch();
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // Inline validation
  const validate = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email address";
    }
    if (name === "password") {
      if (!value || value.length < 6) error = "Password must be 6+ characters";
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validate(key, formData[key]);
    });
    setErrors(newErrors);

    if (Object.values(newErrors).every((e) => !e)) {
      // Valid, submit via fetch or axios
      // Handle success, token storage, navigation etc.
      dispatch(loginUser({ ...formData, rememberMe }));
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
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm/6 text-gray-500 dark:text-gray-400">
            Not a member?{" "}
            <Link
              to={"/auth/register"}
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Start a registeration
            </Link>
          </p>
        </div>

        <div className="mt-10">
          <div className="mb-4">
            <form action="#" method="POST" className="space-y-6">
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

              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        name="remember-me"
                        type="checkbox"
                        id="remember-me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-indigo-500 dark:checked:bg-indigo-500 dark:indeterminate:border-indigo-500 dark:indeterminate:bg-indigo-500 dark:focus-visible:outline-indigo-500 forced-colors:appearance-auto"
                      />
                      <svg
                        fill="none"
                        viewBox="0 0 14 14"
                        className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-checked:opacity-100"
                        />
                        <path
                          d="M3 7H11"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-0 group-has-indeterminate:opacity-100"
                        />
                      </svg>
                    </div>
                  </div>
                  <label
                    htmlFor="remember-me"
                    className="block text-sm/6 text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                {/* <div className="text-sm/6">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>

              <div>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  loading={loading}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                >
                  Login
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
