import React from 'react'

export default function Login() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="flex w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex w-1/2 bg-indigo-600 text-white items-center justify-center flex-col p-10">
          <h1 className="text-4xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-center">
            Login to access your dashboard and manage your account.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>

          <form className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition">
              Login
            </button>
          </form>

          <p className="text-sm text-center mt-6">
            Don’t have an account?
            <span className="text-indigo-600 cursor-pointer ml-1">
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}


