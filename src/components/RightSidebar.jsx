import { useState, useRef, useEffect } from "react";

import RecentChats from "./RecentChats";

import "../CSS/rightSidebar.css";


const RightSidebar = ({detailedChat, setDetailedChat}) => {
  const [width, setWidth] = useState(350);
  const isResizing = useRef(false);
  const sidebarRef = useRef(null);

  const handlePointerDown = (event) => {
    event.preventDefault();
    isResizing.current = true;
  };

  const resizeBy = (amount) => {
    setWidth((currentWidth) => Math.min(450, Math.max(200, currentWidth + amount)));
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!isResizing.current) return;

      const sidebarRight = sidebarRef.current?.getBoundingClientRect().right ?? window.innerWidth;
      setWidth(Math.min(450, Math.max(200, sidebarRight - event.clientX)));
    };

    const handlePointerUp = () => {
      isResizing.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      style={{ width: `${width}px` }}
      className="right-bar-heading"
      aria-label="Right sidebar"
    >
      <div className="right-sidebar-brand">
        <h1>Vartaa</h1>
      </div>

      <div>
        <RecentChats detailedChat={detailedChat} setDetailedChat={setDetailedChat}/>
      </div>

      <div
        className="right-sidebar-resize-handle"
        onPointerDown={handlePointerDown}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") resizeBy(10);
          if (event.key === "ArrowRight") resizeBy(-10);
        }}
        role="separator"
        aria-label="Resize right sidebar"
        aria-orientation="vertical"
        aria-valuemin={200}
        aria-valuemax={450}
        aria-valuenow={width}
        tabIndex={0}
      />
    </aside>
  );
};

export default RightSidebar;