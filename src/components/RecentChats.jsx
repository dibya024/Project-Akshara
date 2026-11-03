import { UserRound } from "lucide-react";

import "../CSS/recentChats.css";

const recentChats = [
  { label: "Dibya" },
  { label: "Ranjan" },
  { label: "Pradeep" },
  { label: "Madhav" },
  { label: "Shyam" },
  { label: "Vasudev" },
  { label: "Radhanath" },
  { label: "Narayana" },
];

const RecentChats = ({detailedChat, setDetailedChat}) => {

    const handleDetailChat= (event) => {
        event.preventDefault();
        {detailedChat ? setDetailedChat(false) : setDetailedChat(true)};
    }

  return (
    <section className="recent-chats" aria-label="Recent chats">
      <ul className="recent-chats-list">
        {recentChats.map((chat) => (
          <button className="recent-chat transition-transform duration-900 ease-in-out hover:scale-101 " key={chat.label} onClick={handleDetailChat}>
            <span className="recent-chat-name ">{chat.label}</span>
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
