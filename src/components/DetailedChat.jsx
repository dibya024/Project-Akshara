import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import { MessageCircle, UserRound, Send, Paperclip } from "lucide-react";

import "../CSS/detailedChat.css";

const DetailedChat = ({ currentUser, contactName }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState("Connecting...");
  const [error, setError] = useState("");

  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io("http://localhost:5000");

    socketRef.current = socket;
    // setMessage([]);
    // setError("");
    // setStatus("Connecting...");

    socket.on("connect", () => {
      setStatus("Connected");
      setError("");
      socket.emit("joinChat", { currentUser, contactName });
    });

    socket.on("chatHistory", (history) => {
      setMessages(history);
    });

    socket.on("newMessage", (newMessage) => {
      setMessages((current) => [...current, newMessage]);
    });

    socket.on("chatError", (message) => {
      setError(message);
    });

    socket.on("disconnect", () => {
      setStatus("Disconnected");
    });

    socket.on("connect_error", () => {
      setStatus("Connection failed!");
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
    };
  }, [contactName, currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;

    if (!socketRef.current?.connected) {
      setError("Couldnot connect to chat server.");
      return;
    }

    setError("");
    socketRef.current.emit("sendMessage", { text });
    setMessage("");
  };

  return (
    <section className="detailed-main" aria-label="Chat conversation">
      <header className="detailed-chat-header">
        <div className="detailed-chat-contact">
          <button className="chatName">{contactName}</button>
          <p>{status}</p>
        </div>
        <button className="detailed-chat-avatar" aria-hidden="true">
          <UserRound size={22} />
        </button>
      </header>

      <div
        className={`detailed-chat-content${messages.length === 0 ? " detailed-chat-content--empty" : ""}`}
      >
        {messages.length === 0 ? (
          <div className="detailed-chat-empty">
            <span className="detailed-chat-empty-icon" aria-hidden="true">
              <MessageCircle size={24} />
            </span>
            <p>Start a conversation</p>
            <span>Send a message to get things going.</span>
          </div>
        ) : (
          messages.map((item) => (
            <p
              className={`chat-msg ${item.sender === currentUser ? "chat-msg--sent" : "chat-msg--received"}`}
              key={item._id}
            >
              {item.text}
            </p>
          ))
        )}
      </div>

      {error && <p role="alert">{error}</p>}

      <form className="chat-msg-composer" onSubmit={handleSubmit}>
        <button
          className="chat-attach-btn"
          type="button"
          aria-label="Attach a file"
        >
          <Paperclip size={18} />
        </button>
        <input
          id="chat-message"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Enter your message"
          className="chat-msg-input"
          maxLength={1000}
        />
        <button
          className="msg-send-btn"
          type="submit"
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </form>
    </section>
  );
};

export default DetailedChat;
