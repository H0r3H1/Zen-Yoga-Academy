import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/login.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/products/new", {
        name,
        email,
        password,
      });
      console.log(response.data);
      console.log("Signup successful");
      navigate("/home");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error signing up");
    }
  };

  // Validation function
  const validateForm = () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div>
      <div className="container">
        <img
          src="https://png.pngtree.com/png-clipart/20230917/original/pngtree-meditation-person-in-the-lotus-meditating-in-the-yoga-zen-yoga-png-image_12282556.png"
          alt="Image"
          style={{
            left: "500px",
            width: "450px",
            height: "450px",
            borderRadius: "100%",
          }}
        />
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white shadow-md rounded px-4 pt-1 pb-2 mb-4 max-w-md w-full border border-gray-300">
            <h1 className="text-3xl md:text-3xl text-center bg-gradient-to-r from-indigo-500 to-indigo-800 bg-clip-text text-transparent p-2 mb-4">
              Register
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password:
                </label>
                <input
                  type="login password"
                  required
                  value={password}
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md dark:border-slate-700"
                />
              </div>
              <div className="mb-4">
                
                
              </div>
              {error && <div className="text-red-500">{error}</div>}
              <center>
                <div className="flex justify-center space-x-4">
                  <button
                    type="submit"
                    onClick={() => validateForm()}
                    className="custom-btn mt-4 md:mt-0"
                  >
                    <Link to ="/login">Register</Link>
                  </button>
                  <Link to={"/"}>
                    <button className="custom-btn mt-4 md:mt-0">Back</button>
                  </Link>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
