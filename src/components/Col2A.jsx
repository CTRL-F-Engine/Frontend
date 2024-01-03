import React from "react";

function Col2({ username, setUsername, phoneNumber, setPhoneNumber, confirmPassword, setConfirmPassword }) {
  return (
    <div className="col2 flex flex-auto flex-col sm:space-y-3 space-y-1 ">
      <h2 className="text-[110%] text-person-col ">Username</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Abla08"
        />
      </div>
      <h2 className="text-[110%] text-person-col ">Phone Number</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+213561739469"
        />
      </div>
      <h2 className="text-[110%] text-person-col ">Confirm Password</h2>
      <div className="w-[100%]">
        <input
          className="bg-page-col outline-none text-item-col sm:h-11 h-7 w-[100%] rounded-md pl-3"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="*******************"
        />
      </div>
    </div>
  );
}

export default Col2;