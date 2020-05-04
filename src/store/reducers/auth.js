const initialState = {
  loading: true,
  isSignedIn: false,
  uid: null,
  displayName: "",
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case "set_auth_loading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "sign_in": {
      const { uid, displayName } = action.payload;
      return {
        loading: false,
        isSignedIn: true,
        uid,
        displayName,
      };
    }
    case "sign_out": {
      return {
        loading: false,
        isSignedIn: false,
        uid: null,
        displayName: "",
      };
    }
    default:
      return state;
  }
}
