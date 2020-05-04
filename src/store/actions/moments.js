import { getMyMomentsByMonth } from "../db/fb";
import { getCurrentMonth } from "../../date-utils";

const stopLoading = () => ({ type: "stop_loading_moments" });

const requestMoments = () => ({ type: "request_moments" });

const receiveMoments = (data) => ({
  type: "receive_moments",
  payload: { data },
});

export const fetchMoments = () => (dispatch, getState) => {
  const { hasFetched } = getState().moments;
  if (hasFetched) return dispatch(stopLoading());
  dispatch(requestMoments());
  return getMyMomentsByMonth(getCurrentMonth()).then((data) => {
    return dispatch(receiveMoments(data));
  });
};
