import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  let saveEnquiry=(e)=>{
    e.preventDefault()
    let obj={
      studentName:e.target.studentName.value,
      studentEmail:e.target.studentEmail.value,
      studentPhone:e.target.studentPhone.value
    }
    axios.post("http://localhost:9000/student/create",obj)
    .then((res)=>res.data)
    .then((finalres)=>{
      console.log(finalres);
    })
    console.log(obj)
  }

  return (
    <>
      <div className="flex h-screen p-6 bg-gray-100">

        {/* Left side - Form (25%) */}
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
          <form className="space-y-4" onSubmit={saveEnquiry}>
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name='studentName'
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="studentEmail"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name='studentPhone'
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side - Table (75%) */}
        <div className="w-3/4 ml-6 bg-white p-6 rounded-lg shadow-md overflow-auto">
          <h2 className="text-xl font-semibold mb-4">Contacts Table</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 border">John Doe</td>
                <td className="py-2 px-4 border">john@example.com</td>
                <td className="py-2 px-4 border">1234567890</td>
                <td className="py-2 px-4 border space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 border">Jane Smith</td>
                <td className="py-2 px-4 border">jane@example.com</td>
                <td className="py-2 px-4 border">0987654321</td>
                <td className="py-2 px-4 border space-x-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows dynamically later */}
            </tbody>
          </table>
        </div>

      </div>



    </>
  )
}

export default App
