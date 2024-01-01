import React from "react";

function Col2({ props }) {
  const { moderator, handleInputChange } = props;
  return (
    <div className="col2 flex flex-auto flex-col space-y-3">
      <h2 className="text-[120%] text-person-col ">Username</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
        />
      </div>
      <h2 className="text-[120%] text-person-col ">Phone Number</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.phoneNumber}
          onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        />
      </div>
      
    </div>
  );
}

export default Col2;
