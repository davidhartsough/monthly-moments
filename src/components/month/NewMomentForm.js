import React, { useState } from "react";
import { connect } from "react-redux";
import { createMoment } from "../../store/actions/thisMonthsMoments";
import MomentForm from "./MomentForm";
import Loader from "../loaders/Loader";

function NewMomentForm({ saveNewMoment }) {
  const [loading, setLoading] = useState(false);
  function onSave(text) {
    setLoading(true);
    saveNewMoment(text).then(() => {
      setLoading(false);
    });
    return "clear";
  }
  return (
    <div className="new-moment">
      <p className="subheading">Add to your month</p>
      {loading ? (
        <Loader />
      ) : (
        <MomentForm
          initialMoment={{
            id: false,
            text: "",
          }}
          onSave={onSave}
        />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveNewMoment: (text) => dispatch(createMoment(text)),
});
export default connect(null, mapDispatchToProps)(NewMomentForm);
