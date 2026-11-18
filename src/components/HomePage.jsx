import React from "react";

import SidebarLeft from "./SidebarLeft";
import RightSidebar from "./RightSidebar";
import DetailedChat from "./DetailedChat";
import MyProfilePage from "./MyProfilePage";
import MediaAndFiles from "./MediaAndFiles";
import SettingsPage from "./Settings";
import AllContacts from "./AllContacts";

import "../CSS/homePage.css";
import { Settings } from "lucide-react";

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
    setLeftBarItems(null);
  };

  const handleDetailedChatChange = (chat) => {
    setDetailedChat(chat);
    if (chat) setMyProfile(false);
    setLeftBarItems(null);
  };

  const handleLeftBarItems = (page) => {
    setLeftBarItems(page);
    setDetailedChat(null);
    setMyProfile(false);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-black text-white justify-between">
      <SidebarLeft
        myProfile={myProfile}
        leftBarItems={leftBarItems}
        setLeftBarItems={handleLeftBarItems}
        setMyProfile={handlMyProfileChange}
      />
      <main className="flex-1 min-w-0 p-15 overflow-y-auto hide-scrollbar">
        <div className="flex gap-4">
          <button className="home-mode-button home-mode-button-private">Private</button>
          <button className="home-mode-button home-mode-button-social">Social</button>
        </div>
        {!detailedChat && myProfile && <MyProfilePage />}
        {!myProfile && detailedChat && (
          <DetailedChat currentUser={currentUser} contactName={detailedChat} />
        )}
        {leftBarItems === "Home" && <div>Home</div>}
        {leftBarItems === "All Contacts" && <AllContacts />}
        {leftBarItems === "Chats" && <div>Implement chat</div>}
        {leftBarItems === "Media & Files" && <MediaAndFiles />}
        {leftBarItems === "Settings" && <SettingsPage />}
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
