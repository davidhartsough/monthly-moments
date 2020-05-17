import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../../../store/actions/profile";

function NameEditor({ close, profile, submit }) {
  const [name, setName] = useState(profile.name);
  const onChange = ({ target }) => setName(target.value);
  function onSubmit(e) {
    e.preventDefault();
    const submission = name.trim();
    if (submission.length > 1) {
      if (submission !== profile.name) submit(submission);
      close();
    }
  }
  const dontClose = (e) => e.stopPropagation();
  return (
    <div className="modal-bg" onClick={close}>
      <div className="name-editor" onClick={dontClose}>
        <form onSubmit={onSubmit} className="name-form">
          <label>
            Name
            <input
              type="text"
              placeholder="Name"
              id="name-input"
              maxLength="100"
              minLength="2"
              autoFocus
              onChange={onChange}
              value={name}
            />
          </label>
          <div className="form-actions">
            <button
              type="submit"
              className="primary"
              disabled={name.trim().length < 2 || name.length > 100}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = ({ profile }) => ({ profile });
const mapDispatchToProps = (dispatch) => ({
  submit: (name) => dispatch(changeName(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameEditor);
