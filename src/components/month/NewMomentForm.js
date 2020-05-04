import React from "react";
import { connect } from "react-redux";
import { saveMoment } from "../store/actions/thisMonthsMoments";
import MomentForm from "./MomentForm";

function NewMomentForm({ saveNewMoment }) {
  function onSave(moment) {
    console.log(moment);
    saveNewMoment(moment);
  }
  return (
    <div className="new-moment">
      <MomentForm
        initialMoment={{
          id: false,
          text: "",
          links: [],
        }}
        onSave={onSave}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveNewMoment: (moment) => dispatch(saveMoment(moment)),
});
export default connect(null, mapDispatchToProps)(NewMomentForm);
