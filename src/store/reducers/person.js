const initialState = {
  loading: true,
  name: "",
  username: "",
  uid: "",
};

export default function person(state = initialState, action) {
  switch (action.type) {
    case "request_person": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_person": {
      const { name, username, uid } = action.payload;
      return {
        loading: false,
        name,
        username,
        uid,
      };
    }
    default:
      return state;
  }
}
