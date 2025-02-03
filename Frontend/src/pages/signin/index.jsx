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
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });

  async function handleSubmit(e) {
    console.log("i clicked");
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.length === 0) {
      setValidation((prev) => ({ ...prev, email: "email is required" }));
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setValidation((prev) => ({ ...prev, email: "wrong mail id" }));
      return;
    }
    if (formData.password.length === 0) {
      setValidation((prev) => ({ ...prev, password: "password is required" }));
      return;
    }
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
      }
    } catch (error) {
      if (error.response.data.message.includes("password")) {
        setValidation((prev) => ({
          ...prev,
          password: error.response.data.message,
        }));
      } else {
        setValidation((prev) => ({
          ...prev,
          email: error.response.data.message,
        }));
      }
      console.log(error.response.data.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  }
  return (
    <div className="h-screen  flex justify-center items-center bg-blue-600 ">
      <div className=" min-h-[500px] min-w-[450px] bg-[#faf9f9] rounded-lg p-7  justify-center items-start shadow-inner">
        <h1 className="font-bold text-4xl text-center p-2">Login</h1>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-2 items-center w-full font-normal text-lg  "
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border-2 my-1 py-2 px-3 rounded-md w-full  text-xl "
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
          {validation.email && (
            <span className="font-normal text-red-600">{validation.email}</span>
          )}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="border-2 my-1 py-2 px-3 rounded-md w-full  text-xl"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
          {validation.password && (
            <span className="font-normal text-red-600">
              {validation.password}
            </span>
          )}
          <Link className="text-blue-500 font-medium text-sm ">
            Forget Password?
          </Link>
          <input
            type="submit"
            value="Login"
            className="bg-blue-600 py-2 px-7 text-xl font-medium cursor-pointer rounded-md transition-all delay-200 hover:bg-blue-800 w-full "
          />
        </form>
        <div className="my-4 w-full text-center">
          <span className="font-medium">Didn&apos;t have an account yet </span>
          <span>
            <Link to={"/signup"} className="text-[#7171d7]  ">
              Signup here
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
