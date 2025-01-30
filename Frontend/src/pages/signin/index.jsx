import React, { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <div className="Login h-[600px] min-w-[400px] bg-[#fefefe]">
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
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />
        </form>
      </div>
    </div>
  );
}

export default Signin;
