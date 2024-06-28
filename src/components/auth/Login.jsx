import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <section className="min-h-screen py-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-8/12 lg:w-4/12 bg-indigo-50 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full py-16 px-12">
              <h2 className="text-3xl mb-4">Login</h2>
              <p className="mb-4">
              Welcome to your professional community
              </p>
              <form>
                <div className="gap-5">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="border py-1 px-2 w-full bg-indigo-50 rounded-lg"
                  >
                    <option value="">Select Role</option>
                    <option value="Employer">Employer</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full rounded-lg"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 py-1 px-2 w-full rounded-lg"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    onClick={handleLogin}
                    className="w-full border rounded-lg  bg-blue-950 py-3 text-center text-white"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-5 flex flex-col items-center">
                  <Link
                    to={"/register"}
                    className="w-full py-3 text-center border rounded-lg bg-blue-950 text-white"
                  >
                    Register Now
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
