import "./Sidebar.css";
import React, { useState, useEffect } from "react";


const Sidebar = ({ width, height, children }) => {
  const [x, setX] = useState(-width);

  useEffect(() => {
    setX(0);
  }, []);


  const toggleSidebar = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  return (
    <>
      <div
        className="side-bar"
        style={{
          transform: `translatex(${x}px)`,
          width: width,
          minHeight: height
        }}>
        <button
          onClick={() => toggleSidebar()}
          className="toggle-sidebar"
          style={{transform: `translate(${width}px, 20vh)`}}>
          </button>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Sidebar;