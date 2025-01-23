import React from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import CustomInput from "./components/CustomInput";
import { useUserLogic } from "./utils/userLogic";
import "./App.css";

const App = () => {
  const { users, name, email, error, setName, setEmail, handleAddUser } =
    useUserLogic();

  return (
    <div className="main">
      <Header title="Create user" />
      <div className="user_registration">
        {error && <p className="error">{error}</p>}
        <CustomInput
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <UserList users={users} />
    </div>
  );
};

export default App;
