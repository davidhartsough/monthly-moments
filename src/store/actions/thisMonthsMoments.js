import {
  getThisMonthsMoments,
  updateMoment as update,
  createMoment as create,
} from "../db/fb";

const stopLoading = () => ({ type: "stop_loading_this_months_moments" });

const requestThisMonthsMoments = () => ({
  type: "request_this_months_moments",
});

const receiveThisMonthsMoments = (data) => ({
  type: "receive_this_months_moments",
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

export const fetchThisMonthsMoments = () => (dispatch, getState) => {
  const { hasFetched } = getState().thisMonthsMoments;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestThisMonthsMoments());
  return getThisMonthsMoments().then((data) => {
    return dispatch(receiveThisMonthsMoments(data));
  });
};
export const createMoment = (created) => (dispatch) => {
  console.log(created);
  return new Promise((resolve) => {
    return create(created).then(() => {
      return resolve(dispatch(_createMoment(created)));
    });
  });
};

export const updateMoment = (updated) => (dispatch) => {
  console.log(updated);
  return new Promise((resolve) => {
    return update(updated).then(() => {
      return resolve(dispatch(_updateMoment(updated)));
    });
  });
};

/*
export const fetchMoments = () => (dispatch, getState) => {
  const { hasFetched } = getState().moments;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestMoments());
  return dbGetMyMomentsByMonth(currentMonth).then((data) => {
    return dispatch(receiveMoments(data));
  });
};
*/
