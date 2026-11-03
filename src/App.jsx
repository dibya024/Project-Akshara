import { useState } from "react";

import HomePage from "./components/HomePage";

import "./App.css";

function App() {
  const [detailedChat, setDetailedChat] = useState(false);

  return (
    <>
      <HomePage detailedChat={detailedChat} setDetailedChat={setDetailedChat} />
    </>
  );
}

export default App;
