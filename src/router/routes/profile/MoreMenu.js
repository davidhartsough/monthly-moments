import React, { useState } from "react";
import { connect } from "react-redux";
import { logOut } from "../store/actions/auth";
import { MoreVertical } from "react-feather";
import NameEditor from "./NameEditor";

function MoreMenu({ signOut }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const openEditor = () => setEditorVisible(true);
  function closeAll() {
    setMenuVisible(false);
    setEditorVisible(false);
  }
  return (
    <>
      <div className="more-menu" onClick={openMenu}>
        <MoreVertical />
      </div>
      {editorVisible && <NameEditor close={closeAll} />}
      <div className={`modal-menu${menuVisible ? " show" : ""}`}>
        <div className="modal-menu-option" onClick={openEditor}>
          Edit name
        </div>
        <div className="modal-menu-option" onClick={signOut}>
          Sign out
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(logOut()),
});
export default connect(null, mapDispatchToProps)(MoreMenu);
