import React from "react";
import "./App.css";
function CustomHook({ show, visible }) {
  return (
    <div className={`default ${show && !visible ? "unmount" : "mount"}`}>
      This component is using Custom Hook method
    </div>
  );
}

export default CustomHook;
