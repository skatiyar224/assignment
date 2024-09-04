import React from "react";

const TabButton = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-semibold focus:outline-none ${
        isActive ? "bg-zinc-700" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TabButton;
