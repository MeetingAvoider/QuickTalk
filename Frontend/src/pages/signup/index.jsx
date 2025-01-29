import React from "react";

function Signup() {
  return (
    <>
      <form>
        <input type="text" name="firstname" id="firstname" />
        <input type="text" name="lastname" id="lastname" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
      </form>
    </>
  );
}

export default Signup;
