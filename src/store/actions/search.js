import { getPeopleByQuery } from "../db/fb";

const requestResults = () => ({ type: "request_results" });

const receiveResults = (data) => ({
  type: "receive_results",
  payload: { data },
});

export const runQuery = (query) => (dispatch) => {
  dispatch(requestResults());
  return getPeopleByQuery(query).then((data) => {
    return dispatch(receiveResults(data));
  });
};
