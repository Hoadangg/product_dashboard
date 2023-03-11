import React from "react";
import "./App.css";
import Account from "./Components/Account/Account";
import Body from "./Components/Body/Body";
import Sidebar from "./Components/Sidebar/Sidebar";
const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
      <Account />
    </div>
  );
};

export default App;
