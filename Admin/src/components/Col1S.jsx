import React from "react";

function Col1({ props }) {
  const { user, handleInputChange } = props; // Access the first (and only) element in the array
  return (
   <div className="flex flex-auto flex-col  space-y-3">
     <div className="TwoInPut  space-x-10 flex flex-row">
    <div className="space-y-3 w-[100%]"> 
        <h2 className="text-[120%] text-person-col ">Full Name</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={user.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
       
      </div>
      </div>
     <div className="space-y-3 w-[100%]">
        <h2 className="text-[120%] text-person-col ">Username</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={user.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
      </div>
      </div> 
     </div>
     <h2 className="text-[120%] text-person-col ">Email</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={user.Email}
          onChange={(e) => handleInputChange("Email", e.target.value)}
        />
      </div>
      <h2 className="text-[120%] text-person-col ">New Password</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          type="password"
          value={user.Password}
          onChange={(e) => handleInputChange("Password", e.target.value)}
        />
      </div>
      <h2 className="text-[120%] text-person-col ">Confirm Password</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          type="password"
          value={user.confirmPassword}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
        />
      </div>
   </div>
  );
}

export default Col1;