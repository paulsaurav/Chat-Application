import React from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })


  const {loading, signup} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-md bg-opacity-0"
      >
        <h1
          className="text-3xl font-semibold text-center
            text-gray-300"
        >
          SignUp To<span className="text-indigo-500"> Chat Mania</span>
          <form onSubmit={handleSubmit}>

            <div>
            <label  className="label p-2">
                <span className="text-base label-text">Full Name</span>
                </label>
                <input type="text" placeholder="Enter Full Name" className="w-full input input-border h-10" value={inputs.fullName} 
                onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
            </div>

            <div>
            <label  className="label p-2">
                <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-border h-10"
                value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
            </div>

            <div>
            <label  className="label p-2">
                <span className="text-base label-text">Email</span>
                </label>
                <input type="email" placeholder="example@ex.com" className="w-full input input-border h-10"
                value={inputs.email} onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
            </div>

            <div>
            <label  className="label p-2">
                <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-border h-10"
                value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
            </div>

            <div>
            <label  className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
                </label>
                <input type="password" placeholder="Enter Password Again" className="w-full input input-border h-10"
                value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}/>
            </div>

            <GenderCheckBox onCheckboxChange = {handleCheckboxChange}
            selectedGender={inputs.gender}/>

            <Link to="/login" className="text-sm hover:underline hover:text-indigo-600
         mt-2">
                Already have an account?"
            </Link>

            <div>
                <button className="btn btn-block btn-sm mt-2 border border-slate-700">SignUp</button>
                
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
