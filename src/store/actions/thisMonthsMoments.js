import {
  dbGetMyMomentsByMonth,
  dbUpdateMoment,
  dbCreateMoment,
} from "../db/fb";
import { currentMonth } from "../../date-utils";

const stopLoading = () => ({ type: "stop_loading_moments" });

const requestMoments = () => ({ type: "request_moments" });

const receiveMoments = (data) => ({
  type: "receive_moments",
  payload: { data },
});

const _createMoment = (created) => ({
  type: "create_moment",
  payload: { created },
});

const _updateMoment = (updated) => ({
  type: "update_moment",
  payload: { updated },
});

export const fetchMoments = () => (dispatch, getState) => {
  const { hasFetched } = getState().moments;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestMoments());
  return dbGetMyMomentsByMonth(currentMonth).then((data) => {
    return dispatch(receiveMoments(data));
  });
};

export const createMoment = (created) => (dispatch) => {
  console.log(created);
  return new Promise((resolve) => {
    return dbCreateMoment(created).then(() => {
      return resolve(dispatch(_createMoment(created)));
    });
  });
};

export const updateMoment = (updated) => (dispatch) => {
  console.log(updated);
  return new Promise((resolve, reject) => {
    return dbUpdateMoment(updated).then(() => {
      return resolve(dispatch(_updateMoment(updated)));
    });
  });
};
