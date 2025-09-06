import React from "react";
import logo from "../../assets/4lCu2zih0ca.svg";
import { useGetValues } from "../../hooks/useGetValues";
import { months } from "../../static";

const formType = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  day: "",
  month: "",
  year: "",
  gender: "",
};

const SignUp = () => {
  const { formData, handleChange, setFormData } = useGetValues(formType);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(formType);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-[#f0f2f5] min-h-screen flex flex-col items-center justify-center">
      <div className="mb-6">
        <img width={240} src={logo} alt="Facebook Logo" />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">Create a new account</h1>
        <p className="text-center text-gray-600 mb-4">It’s quick and easy.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-1/2 border border-gray-300 rounded p-2 text-sm"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-1/2 border border-gray-300 rounded p-2 text-sm"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600">Birthday</label>
            <div className="flex gap-2 mt-1">
              <select
                name="day"
                value={formData.day}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded p-2 text-sm">
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                name="month"
                value={formData.month}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded p-2 text-sm">
                <option value="">Month</option>
                {months.map((m, i) => (
                  <option key={i} value={i + 1}>
                    {m}
                  </option>
                ))}
              </select>

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-1/3 border border-gray-300 rounded p-2 text-sm">
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => {
                  const year = new Date().getFullYear() - i;
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-gray-600">Gender</label>
            <div className="flex gap-4 mt-1">
              {["Female", "Male", "Custom"].map((g) => (
                <label
                  key={g}
                  className="flex items-center gap-1 border border-gray-300 rounded p-2 w-1/3 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Mobile number or email"
            className="w-full border border-gray-300 rounded p-2 text-sm"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="New password"
            className="w-full border border-gray-300 rounded p-2 text-sm"
          />

          <p className="text-xs text-gray-500">
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy.
          </p>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-green-700 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
