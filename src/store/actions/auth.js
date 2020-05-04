import { logOut } from "../db/auth";
import { setUID } from "../db/fb";
import { getProfile } from "./profile";

const setLoading = () => ({
  type: "set_auth_loading",
});

const signIn = (uid, name, email) => ({
  type: "sign_in",
  payload: { uid, name, email },
});

export const signOut = () => (dispatch) => {
  dispatch(setLoading());
  return logOut().then(() => {
    dispatch({ type: "CLEAR_STATE_RESET" });
    return dispatch({ type: "sign_out" });
  });
};

export const handleAuth = (user) => (dispatch) => {
  dispatch(setLoading());
  if (user) {
    const { uid, displayName } = user;
    setUID(uid);
    return dispatch(getProfile()).then(() => {
      return dispatch(signIn(uid, displayName));
    });
  } else {
    return dispatch({ type: "sign_out" });
  }
};

export const setAuthLoading = () => (dispatch) => {
  dispatch(setLoading());
};
