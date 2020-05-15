const initialState = {
  loading: false,
  data: [],
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case "request_results": {
      return {
        loading: true,
        data: [],
      };
    }
    case "receive_results": {
      const { data } = action.payload;
      return {
        loading: false,
        data,
      };
    }
    default:
      return state;
  }
}
