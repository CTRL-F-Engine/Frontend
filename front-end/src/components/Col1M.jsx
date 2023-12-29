import React from "react";

function Col1({ props }) {
  const { moderator, handleInputChange } = props;
  return (
    <div className="col1 flex flex-auto flex-col space-y-3">
      <h2 className="text-[120%] text-person-col ">Full Name</h2>
      <div className="w-[100%]">
      <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.fullName}
          onChange={(e) => handleInputChange("fullName", e.target.value)}
        />
      </div>
      <h2 className="text-[120%] text-person-col ">Email</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      
    </div>
  );
}

export default Col1;