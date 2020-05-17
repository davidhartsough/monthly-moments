const initialState = {
  loading: true,
  isSignedIn: false,
  uid: null,
  suggestion: "",
  displayName: "",
  hasProfile: false,
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
      const { uid, displayName, suggestion, hasProfile } = action.payload;
      return {
        loading: false,
        isSignedIn: true,
        uid,
        suggestion,
        displayName,
        hasProfile,
      };
    }
    case "sign_out": {
      return {
        ...initialState,
        loading: false,
      };
    }
    case "set_has_profile": {
      const { hasProfile } = action.payload;
      return {
        ...state,
        hasProfile,
        loading: false,
      };
    }
    default:
      return state;
  }
}
