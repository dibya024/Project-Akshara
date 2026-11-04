import { UserRound } from "lucide-react";

import "../CSS/recentChats.css";

// const recentChats = [
//   { label: "Sender_One" },
//   { label: "Receiver_One" },
//   { label: "Dibya" },
//   { label: "Pradeep" },
//   { label: "Ranjan" },
//   { label: "Sahoo" },
//   { label: "Dipu" },
//   { label: "Raj" },
//   { label: "Dibyaranjan" },
// ];

const RecentChats = ({ currentUser, setDetailedChat }) => {
  const recentChats = ["Dibya", "Pradeep"].filter(
    (name) => name !== currentUser,
  );

  const handleDetailChat = (name) => {
    setDetailedChat(name);
  };

  return (
    <section className="recent-chats" aria-label="Recent chats">
      <ul className="recent-chats-list">
        {recentChats.map((name) => (
          <button
            className="recent-chat transition-transform duration-900 ease-in-out hover:scale-101 "
            key={name}
            onClick={() => handleDetailChat(name)}
          >
            <span className="recent-chat-name ">{name}</span>
            <span className="recent-chat-avatar" aria-hidden="true">
              <UserRound size={20} />
            </span>
          </button>
        ))}
      </ul>
    </section>
  );
};

export default RecentChats;
