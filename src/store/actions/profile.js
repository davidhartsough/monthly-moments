import { fetchProfile } from "../db/fb";

const receiveProfile = (profile) => ({
  type: "receive_profile",
  payload: { profile },
});

export const getProfile = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    return fetchProfile()
      .then((profile) => {
        dispatch(receiveProfile(profile));
        return resolve();
      })
      .catch(reject);
  });
};
