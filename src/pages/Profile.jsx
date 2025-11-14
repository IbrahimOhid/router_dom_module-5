import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const { state } = useLocation();
  
  return (
    <div>
      {state ? (
        <>
          <h1>User Profile Dashboard</h1>
          <p>Name: {state.name} </p>
          <p>Email: {state.email} </p>
          <p>Password: {state.password} </p>
        </>
      ) : (
        <p>No Profile Exist....</p>
      )}
    </div>
  );
};

export default Profile;
