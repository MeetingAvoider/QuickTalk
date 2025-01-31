import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
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
      if (response.data.success) {
        navigate("/home");
      } else {
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  }
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center gap-1">
      <div className=" h-[400px] min-w-[400px] bg-[#faf9f9] rounded-lg p-7  justify-center items-start">
        <h1 className="text-4xl font-extrabold text-center p-2">Login</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-2 items-center w-[60%] text-lg font-medium "
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border-2 my-1 py-1 px-3 rounded-md"
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
            className="border-2 my-1 py-1 px-3 rounded-md "
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
          {/* <span className={``}>password is required</span> */}
          <input
            type="submit"
            value="Login"
            className="bg-gradient-to-r from-red-600 to-orange-100 py-2 px-7 text-xl font-medium cursor-pointer rounded-md transition-all delay-1000 ease-in-out hover:from-red-600 hover:to-orange-400"
          />
        </form>
        <div>
          <span>Didn&apos;t have an account yet </span>
          <span>
            <Link to={"/signup"} className="text-[#7171d7]">
              Signup here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
