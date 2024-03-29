import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-md bg-opacity-0"
      >
        <h1
          className="text-3xl font-semibold text-center
            text-gray-300"
        >
          Login <span className="text-indigo-500">Chat Mania</span>
        </h1>

        <form>
            <div>
                <label  className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-border h-10"/>
            </div>

            <div>
                <label  className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-border h-10"/>
            </div>
            <Link to="/signup" className="text-sm hover:underline hover:text-indigo-600
            mt-2">
                {"Don't "}have an account?"
            </Link>

            <div>
                <button className="btn btn-block btn-sm mt-2">Login</button>
                
            </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
