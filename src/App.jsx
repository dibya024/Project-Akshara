import { useState } from "react";

import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const [detailedChat, setDetailedChat] = useState(null);

  const currentUser= new URLSearchParams(window.location.search).get("user") === 'Pradeep' ? 'Pradeep' : 'Dibya';

  return (
    <>
      <HomePage currentUser= {currentUser} detailedChat={detailedChat} setDetailedChat={setDetailedChat} />
    </>
  );
}

export default App;
