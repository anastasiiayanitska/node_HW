import React from "react";
import User from "./User";
import "../App.css";
const UserList = ({ users }) => (
  <div className="userList">
    <h2>User List</h2>
    {users.length > 0 ? (
      users.map((user) => (
        <User key={user.id} name={user.name} email={user.email} />
      ))
    ) : (
      <p>No users available</p>
    )}
  </div>
);

export default UserList;
