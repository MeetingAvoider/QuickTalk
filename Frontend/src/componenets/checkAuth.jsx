import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function CheckAuth() {
  const location = useLocation();
  let isAuthenticated = false;
  const fetchApi = async (url) => {
    const response = await axios.get(url, {
      withCredentials: true,
    });
    if (response.data.data.success) {
      return;
    }
  };
  console.log(location);
  return <div>CheckAuth</div>;
}

export default CheckAuth;
{
  isAuthenticated;
}
