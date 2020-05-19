import React from "react";
import "./Modal.css";

export default function Modal({ children, close, closeOnClick = false }) {
  const dontClose = (e) => (closeOnClick ? null : e.stopPropagation());
  return (
    <div className="modal-bg" onClick={close}>
      <div className="modal" onClick={dontClose}>
        {children}
      </div>
    </div>
  );
}
