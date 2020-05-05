import React, { useState } from "react";
import { connect } from "react-redux";
import { createMoment } from "../store/actions/thisMonthsMoments";
import MomentForm from "./MomentForm";
import Loader from "../loaders/Loader";

function NewMomentForm({ saveNewMoment }) {
  const [loading, setLoading] = useState(false);
  function onSave(moment) {
    setLoading(true);
    saveNewMoment(moment).then(() => {
      setLoading(false);
    });
    return "clear";
  }
  return (
    <div className="new-moment">
      {loading ? (
        <Loader />
      ) : (
        <MomentForm
          initialMoment={{
            id: false,
            text: "",
            links: [],
          }}
          onSave={onSave}
        />
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveNewMoment: (moment) => dispatch(createMoment(moment)),
});
export default connect(null, mapDispatchToProps)(NewMomentForm);
