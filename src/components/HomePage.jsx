import React from "react";
import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./RightSidebar";



const HomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-between">
      <SidebarLeft />
      Welcome to kratu
      <RightSidebar />
    </div>
  );
};

export default HomePage;
