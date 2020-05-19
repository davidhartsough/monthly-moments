import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../store/actions/auth";
import { getPerson } from "../store/db/fb";
import Loader from "../components/loaders/Loader";

const usernamePattern = /^\p{L}{1,50}$/u;

function CreateProfile({ displayName, suggestion, makeProfile }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(displayName);
  const [username, setUsername] = useState(suggestion);
  const [error, setError] = useState(false);
  const onNameChange = ({ target }) => setName(target.value);
  const onUsernameChange = ({ target }) => setUsername(target.value);
  function onSubmit(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const _name = name.trim();
    const _username = username.trim();
    getPerson(_username)
      .then(() => {
        setError(_username);
        setLoading(false);
      })
      .catch(() => {
        setError(false);
        makeProfile(_name, _username);
      });
  }
  const nlen = name.length;
  const ulen = username.length;
  const nameIsValid = nlen >= 3 && nlen <= 70;
  const passPattern = usernamePattern.test(username);
  const usernameIsValid = ulen >= 3 && ulen <= 50 && passPattern;
  return (
    <section>
      <header>
        <h1>Monthly Moments</h1>
        <h2>Create a profile</h2>
      </header>
      <form onSubmit={onSubmit}>
        <label>
          <p className="flex-parent">
            <span className="flex-fill">Name</span>
            <span className={`helper${nameIsValid ? " valid" : ""}`}>
              {`${nlen}/70`}
            </span>
          </p>
          <input
            type="text"
            placeholder={displayName || "Name"}
            maxLength="70"
            minLength="3"
            value={name}
            onChange={onNameChange}
            required
          />
        </label>
        <label>
          <p className="flex-parent">
            <span className="flex-fill">Username</span>
            <span className={`helper${usernameIsValid ? " valid" : ""}`}>
              {`${ulen}/50`}
            </span>
          </p>
          <input
            type="text"
            placeholder={suggestion || "username"}
            maxLength="50"
            minLength="3"
            title="Please only use lowercase letters."
            pattern="^\p{L}{1,50}$"
            value={username}
            onChange={onUsernameChange}
            required
          />
        </label>
        {ulen > 0 && !passPattern && (
          <p className="helper error">Please only use lowercase letters.</p>
        )}
        {!!error && (
          <p className="helper error">
            Sorry, the username "{error}" is taken.
          </p>
        )}
        <p className="helper">
          Please note that you <strong>cannot</strong> change your username
          after this.
        </p>
        <div className="central">
          {loading ? (
            <Loader size={2} />
          ) : (
            <button
              type="submit"
              className="primary"
              disabled={!nameIsValid || !usernameIsValid}
            >
              Create
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

const mapStateToProps = ({ auth: { email, displayName } }) => ({
  email,
  displayName,
});
const mapDispatchToProps = (dispatch) => ({
  makeProfile: (name, username) => dispatch(createProfile(name, username)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateProfile);
