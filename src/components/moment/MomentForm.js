import React, { useState } from "react";

export default function MomentForm({ initialMoment, onSave, onDelete = null }) {
  const [text, setText] = useState(initialMoment.text);
  const onChange = ({ target }) => setText(target.value);
  function submit() {
    const response = onSave(text.trim());
    if (response === "clear") setText("");
  }
  return (
    <div className="moment-form">
      <textarea
        name="text"
        value={text}
        onChange={onChange}
        placeholder="Share a moment from this month"
        maxLength="480"
        minLength="2"
      />
      <div className="align-right">
        {initialMoment.id && text.trim().length === 0 ? (
          <button onClick={onDelete}>Delete</button>
        ) : (
          <button
            onClick={submit}
            className="primary"
            disabled={text.trim().length < 3 || text.length > 480}
          >
            {initialMoment.id ? "Save" : "Add"}
          </button>
        )}
      </div>
    </div>
  );
}
