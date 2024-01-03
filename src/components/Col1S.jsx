import React from "react";

function Col1({ props }) {
  const { user, handleInputChange } = props; // Access the first (and only) element in the array
  return (
   <div className="flex flex-auto flex-col sm:space-y-3 space-y-1">
     <div className="TwoInPut  sm:space-x-10 flex sm:flex-row flex-col ">
    <div className="space-y-3 w-[100%]"> 
        <h2 className="text-[110%] text-person-col ">Full Name</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          value={user.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
       
      </div>
      </div>
     <div className="space-y-3 w-[100%]">
        <h2 className="text-[110%] text-person-col ">Username</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          value={user.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
      </div>
      </div> 
     </div>
     <h2 className="text-[110%] text-person-col ">Email</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          value={user.Email}
          onChange={(e) => handleInputChange("Email", e.target.value)}
        />
      </div>
      <h2 className="text-[110%] text-person-col ">New Password</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          type="password"
          value={user.Password}
          onChange={(e) => handleInputChange("Password", e.target.value)}
        />
      </div>
      <h2 className="text-[110%] text-person-col ">Confirm Password</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          type="password"
          value={user.confirmPassword}
          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
        />
      </div>
   </div>
  );
}

export default Col1;