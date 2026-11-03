import { MessageCircle, UserRound, Send } from "lucide-react";

import "../CSS/detailedChat.css";

const DetailedChat = () => {
  return (
    <section className="detailed-main" aria-label="Chat conversation">
      <header className="detailed-chat-header">
        <div className="detailed-chat-contact">
          <h1>Your conversation</h1>
          <p>Messages appear here</p>
        </div>
        <span className="detailed-chat-avatar" aria-hidden="true">
          <UserRound size={22} />
        </span>
      </header>

      <div className="detailed-chat-content">
        <div className="detailed-chat-empty">
          <span className="detailed-chat-empty-icon" aria-hidden="true">
            <MessageCircle size={24} />
          </span>
          <p>Start a conversation</p>
          <span>Send a message to get things going.</span>
        </div>
      </div>

      <form
        className="chat-msg-composer"
        onSubmit={(event) => event.preventDefault()}
      >
        {/* <label className="visually-hidden" htmlFor="chat-message">
          Enter your message
        </label> */}
        <input
          id="chat-message"
          type="text"
          placeholder="Enter your message"
          className="chat-msg-input"
        />
        <button className="msg-send-btn"><Send/></button>
      </form>
    </section>
  );
};

export default DetailedChat;
