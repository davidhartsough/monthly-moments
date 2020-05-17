import React, { useState } from "react";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/auth";
import { MoreVertical } from "react-feather";
import NameEditor from "./NameEditor";

function MoreMenu({ logOut }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [editorVisible, setEditorVisible] = useState(false);
  const openMenu = () => setMenuVisible(true);
  const openEditor = () => setEditorVisible(true);
  const closeMenu = () => setMenuVisible(false);
  function closeAll() {
    setMenuVisible(false);
    setEditorVisible(false);
  }
  return (
    <>
      <div className="more-menu" onClick={openMenu}>
        <MoreVertical size={20} />
      </div>
      {editorVisible && <NameEditor close={closeAll} />}
      {menuVisible && (
        <div className="modal-bg" onClick={closeMenu}>
          <div className="modal-menu">
            <div className="modal-menu-option" onClick={openEditor}>
              Edit name
            </div>
            <div className="modal-menu-option">
              Enable dark mode (coming soon!)
            </div>
            <div className="modal-menu-option" onClick={logOut}>
              Sign out
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(signOut()),
});
export default connect(null, mapDispatchToProps)(MoreMenu);
