import React, { useState } from "react";
import { Edit } from "react-feather";
import MomentForm from "./MomentForm";
import Moment from "./Moment";

export default function EditableMoment({ moment }) {
  const [isEditing, setIsEditing] = useState(false);
  const edit = () => setIsEditing(true);
  const save = () => setIsEditing(false);
  return (
    <div className="editable-moment">
      {isEditing ? (
        <MomentForm initialMoment={moment} onSave={save} />
      ) : (
        <Moment moment={moment} />
      )}
      <div className="edit-button" onClick={edit}>
        <Edit />
      </div>
    </div>
  );
}
