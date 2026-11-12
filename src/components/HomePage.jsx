import React from "react";

import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./RightSidebar";
import DetailedChat from "./DetailedChat";
import MyProfilePage from "./MyProfilePage";

import "../CSS/homePage.css";

const HomePage = ({
  currentUser,
  detailedChat,
  setDetailedChat,
  myProfile,
  setMyProfile,
  leftBarItems,
  setLeftBarItems,
}) => {
  const handlMyProfileChange = (isOpen) => {
    setMyProfile(isOpen);
    if (isOpen) setDetailedChat(null);
  };

  const handleDetailedChatChange = (chat) => {
    setDetailedChat(chat);
    if (chat) setMyProfile(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white justify-between">
      <SidebarLeft
        myProfile={myProfile}
        leftBarItems={leftBarItems}
        setLeftBarItems={setLeftBarItems}
        setMyProfile={handlMyProfileChange}
      />
      <main className="flex-1 min-w-0 p-15 overflow-y-auto hide-scrollbar">
        {!detailedChat && myProfile && <MyProfilePage />}
        {!myProfile && detailedChat && (
          <DetailedChat currentUser={currentUser} contactName={detailedChat} />
        )}
      </main>
      <RightSidebar
        currentUser={currentUser}
        detailedChat={detailedChat}
        setDetailedChat={handleDetailedChatChange}
      />
    </div>
  );
};

export default HomePage;
