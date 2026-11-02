import { useState, useRef, useEffect } from "react";


const RightSidebar = () => {
  const [width, setWidth] = useState(260);
  const isResizing = useRef(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    isResizing.current = true;
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing.current) return;

      const newWidth = e.clientX;

      if (newWidth >= 180 && newWidth <= 450) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <aside
      style={{ width: `${width}px` }}
      className="relative h-screen bg-gray-900 text-white shrink-0 p-5"
    >
      <h1 className="text-2xl font-bold mb-10">Kratu</h1>

      <div
        onMouseDown={handleMouseDown}
        className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-blue-500 active:bg-blue-500"
      />
    </aside>
  );
};

export default RightSidebar;