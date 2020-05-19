import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateMoment,
  deleteMoment,
} from "../../store/actions/thisMonthsMoments";
import { Edit } from "react-feather";
import MomentForm from "./MomentForm";
import Moment from "./Moment";
import Loader from "../loaders/Loader";
import "./EditableMoment.css";

function EditableMoment({ moment, saveChanges, removeMoment }) {
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const toggle = () => setEditing(!editing);
  function onSave(text) {
    if (text === moment.text) return toggle();
    setLoading(true);
    saveChanges(moment.id, text).then(() => {
      toggle();
      setLoading(false);
    });
  }
  function handleDelete() {
    removeMoment(moment.id);
    setDeleted(true);
  }
  if (deleted) return null;
  return (
    <div className="editable-moment">
      {loading ? (
        <Loader />
      ) : editing ? (
        <MomentForm
          initialMoment={moment}
          onSave={onSave}
          onDelete={handleDelete}
        />
      ) : (
        <>
          <Moment moment={moment} />
          <div className="toggle-edit flex-center" onClick={toggle}>
            <Edit size={16} />
          </div>
        </>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveChanges: (id, text) => dispatch(updateMoment(id, text)),
  removeMoment: (id) => dispatch(deleteMoment(id)),
});
export default connect(null, mapDispatchToProps)(EditableMoment);
