import React from "react";

function Col1({ props }) {
  const { moderator, handleInputChange } = props;
  return (
    <div className="col1 flex flex-auto flex-col sm:space-y-3 space-y-1">

      <h2 className="text-lg text-person-col  ">Full Name</h2>
      <div className="w-[100%]">
      <input
          className="bg-page-col outline-none text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.FullName}
          onChange={(e) => handleInputChange("FullName", e.target.value)}
        />
      </div>
      <h2 className="text-lg text-person-col  ">Email</h2>

      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col h-11 w-[100%] rounded-md pl-3"
          value={moderator.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
      </div>
      
    </div>
  );
}

export default Col1;