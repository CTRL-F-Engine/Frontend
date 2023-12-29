// Moderator.jsx

import React from "react";

function Moderator({ fullName, email, password, username, phoneNumber, confirmPassword }) {
  return (
    <div className="moderator ">
      <h2>Moderator Details</h2>
      <p>Full Name: {fullName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Username: {username}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  );
}

export default Moderator;
