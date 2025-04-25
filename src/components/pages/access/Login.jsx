import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!email || !password) return;
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="w-[350px] max-w-md sm:max-w-sm text-center"
        style={{ transform: "translateY(clamp(5rem, 12vw, 8rem))" }}
      >
        <img
          src="http://localhost:5173/src/assets/ftc_svg_logo.svg"
          alt="Face the Children Logo"
          className="mx-auto h-[55px] mb-6"
        />

        <div className="text-left">
          <h2 className="text-lg sm:text-base font-semibold text-gray-800 mb-4">
            LOGIN
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-4 pt-1 pb-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary"
              />
              <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
                Email
              </label>
              {submitted && !email && (
                <p className="text-xs italic text-red-500 mt-1">
                  * Email is required
                </p>
              )}
            </div>

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-4 pt-1 pb-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary"
              />
              <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5 text-gray-400" />
                ) : (
                  <EyeIcon className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {submitted && !password && (
                <p className="text-xs italic text-red-500 mt-1">
                  * Password is required
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full !mt-10 text-xs bg-primary text-white font-semibold py-2 rounded-md hover:bg-blue-400 transition"
            >
              Login
            </button>
          </form>

          {/* Links */}
          <div className="mt-4 text-xs text-gray-700 space-y-1">
            <p>
              Need an Account?{" "}
              <Link to="/create-account" className="text-primary underline">
                Create an Account
              </Link>
            </p>
            <p className="pt-1">
              Did you forget your password?{" "}
              <Link to="/forgot-password" className="text-primary underline">
                Forgot password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
