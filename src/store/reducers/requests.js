const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

export default function requests(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_requests": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_requests": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_requests": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "remove_request": {
      const { removed } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(
        ({ username }) => username === removed.username
      );
      data.splice(index, 1);
      return {
        loading: false,
        data,
      };
    }
    default:
      return state;
  }
}
