import { combineReducers } from "redux";
import auth from "./auth";
import profile from "./profile";
import thisMonthsMoments from "./thisMonthsMoments";
import person from "./person";
import recap from "./recap";
import requests from "./requests";
import connections from "./connections";

const appReducer = combineReducers({
  auth,
  profile,
  thisMonthsMoments,
  person,
  recap,
  requests,
  connections,
});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STATE_RESET") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
