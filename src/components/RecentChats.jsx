import { useState } from "react";

import { UserRound, X } from "lucide-react";

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
  const [profileInfo, setProfileInfo] = useState(null);

  const recentChats = ["Dibya", "Pradeep"].filter(
    (name) => name !== currentUser,
  );

  const handleDetailChat = (name) => {
    setDetailedChat(name);
  };

  const handleAvatarInfo = (name) => {
    setProfileInfo(name);
  };

  return (
    <section className="recent-chats" aria-label="Recent chats">
      <ul className="recent-chats-list">
        {recentChats.map((name) => (
          <li
            className="recent-chat"
            key={name}
            onClick={() => handleDetailChat(name)}
          >
            <button
              className="recent-chat-open transition-transform duration-900 ease-in-out hover:scale-101 "
              type="button"
            >
              <span className="recent-chat-name ">{name}</span>
            </button>
            <button
              className="recent-chat-avatar"
              type="button"
              aria-label={`View ${name}'s profile`}
              onClick={(event) => {
                event.stopPropagation();
                handleAvatarInfo(name);
              }}
            >
              <UserRound size={20} />
            </button>
          </li>
        ))}
      </ul>
      {profileInfo && (
        <div
          className="profile-popup-backdrop"
          onClick={() => setProfileInfo(null)}
        >
          <section
            className="profile-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="profile-popup-header">
              <h2 className="profile-popup-title">{profileInfo}</h2>
              <button
                className="profile-popup-close"
                type="button"
                aria-label="Close Profile"
                onClick={() => setProfileInfo(null)}
              >
                <X size={20}></X>
              </button>
            </div>
            <UserRound size={65} aria-hidden="true" className="mt-10"/>
            <div className="profile-contact-details">
              <span className="phone-number cursor-pointer hover:underline hover:text-cyan-500">1234567890</span>
              <span className="email_id cursor-pointer hover:underline hover:text-purple-400">abc@email.xyz</span>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default RecentChats;
