const initialState = {
  loading: true,
  month: null,
  moments: [],
};

export default function recap(state = initialState, action) {
  switch (action.type) {
    case "request_moments": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_moments": {
      const { month, moments } = action.payload;
      return {
        loading: false,
        month,
        moments,
      };
    }
    default:
      return state;
  }
}
