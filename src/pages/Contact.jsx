import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <button
        onClick={handleGoToHome}
        className="px-6 py-2 border border-[#3B9DF8] bg-blue-500 text-[#fff] hover:bg-secondary hover:text-[#3B9DF8] dark:hover:bg-transparent transition duration-300 rounded "
      >
        Button 1
      </button>
    </div>
  );
};

export default Contact;
