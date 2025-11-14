import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
    const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
   if(name === 'Ibrahim' && email === 'mohammadibrahim.dev@gmail.com' && password === '12345'){
    const user ={
      name, email, password
    }
    navigate('/profile', {state: user})
   }else{
    alert('name, Email & Password Wrong!')
   }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6"
      >
        <div>
          <h1 className="text-center pb-2 font-semibold text-xl underline">
            User Sign In
          </h1>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="mt-1 w-full border py-1 px-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="mt-1 w-full border py-1 px-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-900"
            htmlFor="message"
          >
            Password
          </label>
          <input
            className="mt-1 w-full border py-1 px-2 rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="password"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
