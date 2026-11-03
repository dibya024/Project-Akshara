import { useState, useRef, useEffect } from "react";
import { Home, Settings, UserRound, Users, File, MessageCircle } from "lucide-react";

import "../CSS/sidebarLeft.css";
import kratu_logo from "../images/kratu-logo.png";

const navItems = [
  { icon: Home, label: "Home", href: "#" },
  { icon: Users, label: "Contacts", href: "#contact" },
  { icon: MessageCircle, label: "Chats", href: "#chats" },
  { icon: File, label: "Media & Files", href: "#mediaFiles" },
  { icon: Settings, label: "Settings", href: "#settings" },
];

const SidebarLeft = () => {
  const [width, setWidth] = useState(260);
  const isResizing = useRef(false);
  const sidebarRef = useRef(null);

  const handlePointerDown = (event) => {
    event.preventDefault();
    isResizing.current = true;
  };

  const resizeBy = (amount) => {
    setWidth((currentWidth) => Math.min(360, Math.max(160, currentWidth + amount)));
  };

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!isResizing.current) return;

      const sidebarLeft = sidebarRef.current?.getBoundingClientRect().left ?? 0;
      setWidth(Math.min(360, Math.max(160, event.clientX - sidebarLeft)));
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
      className="left-bar-heading"
    >
      <div className="sidebar-brand">
        {/* <img src={kratu_logo} className="logo-img" alt="" /> */}
        <h1>Akshara</h1>
      </div>
      <nav className="sidebar-navigation" aria-label="Main navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              className="nav-items"
              style={{ width: `${width - 30}px` }}
              key={item.label}
              href={item.href}
            >
              <Icon size={24} aria-hidden="true" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div
        className="sidebar-resize-handle"
        onPointerDown={handlePointerDown}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") resizeBy(-10);
          if (event.key === "ArrowRight") resizeBy(10);
        }}
        role="separator"
        aria-label="Resize sidebar"
        aria-orientation="vertical"
        aria-valuemin={160}
        aria-valuemax={360}
        aria-valuenow={width}
        tabIndex={0}
      />

      <div className="leftbar-bottom">
        <UserRound size={25} aria-hidden="true" />
        <span>Dibyaranjan</span>
      </div>
    </aside>
  );
};

export default SidebarLeft;
