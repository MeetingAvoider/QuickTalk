import React, { useState } from "react";
import axios from "axios";
function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error.response.data.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  }
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className=" h-[400px] min-w-[400px] bg-[#faf9f9] rounded-lg p-7  justify-center items-start">
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
          <span className={``}>password is required</span>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default Signin;
