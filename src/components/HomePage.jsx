import React from "react";

import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./RightSidebar";
import DetailedChat from "./DetailedChat";

import "../CSS/homePage.css";

const HomePage = ({ detailedChat, setDetailedChat }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-black text-white justify-between">
      <SidebarLeft />
      <main className="flex-1 min-w-0 p-15 overflow-y-auto hide-scrollbar">
        {detailedChat && <DetailedChat />}
      </main>
      <RightSidebar
        detailedChat={detailedChat}
        setDetailedChat={setDetailedChat}
      />
    </div>
  );
};

export default HomePage;
