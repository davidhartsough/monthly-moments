import React from "react";

export default function ModalMenu({ options }) {
  return (
    <div className="modal-menu">
      {options.map(({ title, onClick }, i) => (
        <div
          key={`${title}-${i}`}
          onClick={onClick}
          className="modal-menu-option"
        >
          {title}
        </div>
      ))}
    </div>
  );
}
