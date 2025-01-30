import React from "react";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:5000/api/auth/signup", formData, {
        withCredentials: true,
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  return (
    <>
      <div className="h-screen">
        <div className="w-full h-full flex justify-center flex-col items-center space-y-3 bg-white text-[#1f1f1f]">
          <h1>Quick-Talk</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-row justify-between items-center">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="firstname"
                value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                className="border-2 border-black py-1 px-1 rounded-md mr-2"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="lastname"
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                value={formData.lastname}
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-green-500 py-2 px-1 cursor-pointer text-center font-serif font-extrabold text-lg border-2 rounded-md"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
