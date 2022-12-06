import React from "react";
import ReactDOM from "react-dom";

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="flex justify-center items-center bg-[rgba(32,35,41,0.88)] fixed text-white top-[-10px] bottom-[-10px] left-[-10px] right-[-10px]">
      {children}
    </div>,
    document.getElementById("modal")
  );
}
