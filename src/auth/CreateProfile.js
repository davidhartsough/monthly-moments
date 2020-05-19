import React, { useState } from "react";
import { connect } from "react-redux";
import { createProfile } from "../store/actions/auth";
import { useForm } from "react-hook-form";
import { getPerson } from "../store/db/fb";
import Loader from "../components/loaders/Loader";

const usernamePattern = /^\p{L}{3,50}$/u;

function CreateProfile({ displayName, suggestion, makeProfile }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  function onSubmit(data) {
    if (loading) return;
    setLoading(true);
    const name = data.name.trim();
    const username = data.username.trim();
    getPerson(username)
      .then(() => {
        setError(username);
        setLoading(false);
      })
      .catch(() => {
        setError(false);
        makeProfile(name, username);
      });
  }
  return (
    <section>
      <header>
        <h1>Monthly Moments</h1>
        <h2>Create a profile</h2>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name
          <input
            type="text"
            placeholder={displayName || "Name"}
            name="name"
            maxLength="100"
            minLength="3"
            defaultValue={displayName}
            ref={register({
              required: "A name is required.",
              maxLength: {
                value: 100,
                message: "Please use fewer than 100 letters.",
              },
              minLength: {
                value: 3,
                message: "Please enter at least 3 letters.",
              },
            })}
          />
        </label>
        {errors.name && <p className="helper error">{errors.name.message}</p>}
        <label>
          Username
          <input
            type="text"
            placeholder={suggestion || "username"}
            name="username"
            maxLength="50"
            minLength="3"
            defaultValue={suggestion}
            ref={register({
              required: "A username is required.",
              maxLength: {
                value: 50,
                message: "Please use fewer than 50 letters.",
              },
              minLength: {
                value: 3,
                message: "Please enter at least 3 letters.",
              },
              pattern: {
                value: usernamePattern,
                message: "Please only use lowercase letters.",
              },
            })}
          />
        </label>
        {errors.username && (
          <p className="helper error">{errors.username.message}</p>
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
            <button type="submit" className="primary">
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
