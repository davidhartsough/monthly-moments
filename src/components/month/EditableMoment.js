import React, { useState } from "react";
import { connect } from "react-redux";
import { updateMoment } from "../store/actions/thisMonthsMoments";
import { Edit } from "react-feather";
import MomentForm from "./MomentForm";
import Moment from "./Moment";
import Loader from "../loaders/Loader";

function EditableMoment({ moment, saveChanges }) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggle = () => setEditing(!editing);
  function onSave(updated) {
    setLoading(true);
    saveChanges(updated).then(() => {
      toggle();
      setLoading(false);
    });
  }
  return (
    <div className="editable-moment">
      {loading ? (
        <Loader />
      ) : editing ? (
        <MomentForm initialMoment={moment} onSave={onSave} />
      ) : (
        <Moment moment={moment} />
      )}
      <div className="edit-button" onClick={toggle}>
        <Edit />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveChanges: (moment) => dispatch(updateMoment(moment)),
});
export default connect(null, mapDispatchToProps)(EditableMoment);
