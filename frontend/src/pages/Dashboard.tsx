import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "./Main";
import Header from "../components/Header";
const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};

export default Dashboard;
