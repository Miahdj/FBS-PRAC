import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { name, email, address, city, state, country, zip } = formData;
    if (!name || !email || !address || !city || !state || !country || !zip)
      return;
  };

  const fields = [
    { name: "name", label: "Name" },
    { name: "email", label: "Email", type: "email" },
    { name: "address", label: "Address", textarea: true },
    { name: "city", label: "City" },
    { name: "state", label: "State/Province" },
    { name: "country", label: "Country" },
    { name: "zip", label: "Zip Code" },
  ];

  return (
    <div className="min-h-screen flex items-start pt-[80px] justify-center bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-sm text-center">
        <img
          src="http://localhost:5173/src/assets/ftc_svg_logo.svg"
          alt="Face the Children Logo"
          className="mx-auto h-16 mb-6"
        />

        <div className="text-left">
          <h2 className="text-xl sm:text-base font-semibold text-gray-800 mb-4 mt-[45px]">
            Create a Donor Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            {fields.map(({ name, label, textarea, type = "text" }) => (
              <div key={name} className="relative w-full">
                {textarea ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer  w-full px-4 !py-6 pt-1 pb-2 border border-gray-300 rounded-md text-sm resize-none focus:outline-none focus:border-primary"
                    rows={3}
                  />
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="peer w-full px-4 pt-1 pb-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-primary"
                  />
                )}
                <label className="absolute left-3 -top-2 text-xs bg-white px-1 text-primary">
                  {label}
                </label>
                {submitted && !formData[name] && (
                  <p className="text-xs italic text-red-500 mt-1">
                    * {label} is required
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full !mt-9 bg-blue-300 hover:bg-blue-400 text-white text-sm font-semibold py-2 rounded-md transition"
            >
              Register
            </button>
          </form>

          <div className="mt-4 text-xs text-gray-700">
            Back to{" "}
            <Link to="/login" className="text-primary underline">
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
