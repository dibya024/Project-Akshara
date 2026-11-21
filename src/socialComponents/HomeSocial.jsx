import React from "react";
import "../socialCSS/homeSocial.css";

import { Home, Plus } from "lucide-react";

const HomeSocial = ({ mediaMode, setMediaMode }) => {
  const changeMediaModeToPrivate = () => {
    if (!mediaMode) {
      setMediaMode(true);
    }
  };

  return (
    <div className="social-home-page">
      <div className="home-social-content">Home page for social media</div>
      <footer className="home-social-footer">
        <button
          className="social-footer-button social-footer-button--active"
          type="button"
          aria-label="Social home"
        >
          <Home size={21} />
          <span>Home</span>
        </button>

        <button
          className="social-footer-create"
          type="button"
          aria-label="Create a post"
        >
          <Plus size={24} />
        </button>

        <button
          className="social-footer-button"
          type="button"
          onClick={changeMediaModeToPrivate}
        >
          <span>Private</span>
        </button>
      </footer>
    </div>
  );
};

export default HomeSocial;
