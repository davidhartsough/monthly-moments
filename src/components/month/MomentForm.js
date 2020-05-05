import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-feather";

const urlPattern = /^$|https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

export default function MomentForm({ initialMoment, onSave }) {
  const [links, setLinks] = useState(initialMoment.links);
  const { register, handleSubmit, errors, reset } = useForm();
  function onSubmit(data) {
    const response = onSave(data);
    if (response === "clear") {
      setLinks([]);
      reset();
    }
  }
  function addLink() {
    const _links = [...links];
    _links.push("");
    setLinks(_links);
  }
  return (
    <div className="moment-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          name="text"
          defaultValue={initialMoment.text}
          ref={register({
            required: "This cannot be empty.",
            maxLength: {
              value: 600,
              message: "Please use fewer than 600 characters.",
            },
          })}
        />
        {errors.text?.message}
        <div className="link-list">
          {links.map((link, index) => (
            <div key={`${index}-${link}`} className="link-item">
              <Link />
              <input
                type="url"
                className="link-input"
                defaultValue={link}
                name={`links[${index}]`}
                ref={register({
                  pattern: {
                    value: urlPattern,
                    message: "This must be a valid URL.",
                  },
                })}
              />
              {errors[`links[${index}]`]?.message}
            </div>
          ))}
          {links.length < 5 && <button onClick={addLink}>Add a link</button>}
        </div>
        <div className="form-actions">
          {initialMoment.id && <button>Delete</button>}
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
