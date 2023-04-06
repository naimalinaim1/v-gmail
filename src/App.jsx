import React from "react";
import Header from "./components/Layout/Header/Header";
import SideNav from "./components/Layout/SideNav/SideNav";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-2 grid gap-2 grid-cols-[250px_1fr]">
        <SideNav />
        <div className="w-[99%] bg-gray-200 rounded-lg h-[90vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
