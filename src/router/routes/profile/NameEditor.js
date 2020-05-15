import React from "react";
import { connect } from "react-redux";
import { changeName } from "../store/actions/profile";
import { useForm } from "react-hook-form";

function NameEditor({ close, profile, submit }) {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
    submit(data.name).then(close);
  }
  return (
    <div className="edit-name">
      <form onSubmit={handleSubmit(onSubmit)} className="name-form">
        <label for="name-input">Name</label>
        <input
          type="text"
          placeholder="Name"
          id="name-input"
          maxLength="160"
          minLength="2"
          name="name"
          autoFocus
          defaultValue={profile.name}
          ref={register({
            required: "Please enter a search.",
            maxLength: {
              value: 160,
              message: "Please use less than 160 characters.",
            },
            minLength: {
              value: 2,
              message: "Please enter at least 2 letters.",
            },
          })}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ profile }) => ({ profile });
const mapDispatchToProps = (dispatch) => ({
  submit: (name) => dispatch(changeName(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NameEditor);
