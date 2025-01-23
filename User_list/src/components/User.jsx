import React from "react";
import "../App.css";
const User = ({ name, email }) => (
  <div className="userItem">
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

export default User;
