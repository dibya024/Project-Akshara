import { useState } from "react";

import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const [detailedChat, setDetailedChat] = useState(null);
  const [leftBarItems, setLeftBarItems] = useState(null);
  const [myProfile, setMyProfile] = useState(false);
  const [mediaMode, setMediaMode] = useState(true);  //private == true

  // const currentUser =
  //   new URLSearchParams(window.location.search).get("user") === "Pradeep"
  //     ? "Pradeep"
  //     : "Dibya";
  const currentUser= "Pradeep";

  const isLoggedin= true;

  return (
    <>
      <HomePage
        currentUser={currentUser}
        detailedChat={detailedChat}
        setDetailedChat={setDetailedChat}
        myProfile={myProfile}
        setMyProfile={setMyProfile}
        leftBarItems={leftBarItems}
        setLeftBarItems={setLeftBarItems}
        mediaMode= {mediaMode}
        setMediaMode= {setMediaMode}
      />
    </>
  );
}

export default App;
