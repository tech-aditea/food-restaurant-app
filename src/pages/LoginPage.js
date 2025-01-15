import React, { useState } from "react";

const LoginRegisterPage = () => {
  // State to toggle between Login and Register forms
  const [isLogin, setIsLogin] = useState(true);

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? "Login Submitted" : "Registration Submitted");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} // Add your background image URL here
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md opacity-90">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          {isLogin ? "Login to AdiTea" : "Register with AdiTea"}
        </h2>

        {/* Login or Register Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
              required
            />
          </div>

          {/* Login/Register Button */}
          <button
            type="submit"
            className="w-full py-2 bg-teal-800 text-white rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle between Login and Register */}
        <div className="mt-4 text-center">
          {isLogin ? (
            <p className="text-sm">
              New user?{" "}
              <button
                className="text-teal-800 font-semibold"
                onClick={() => setIsLogin(false)}
              >
                Register here
              </button>
            </p>
          ) : (
            <p className="text-sm">
              Already have an account?{" "}
              <button
                className="text-teal-800 font-semibold"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
