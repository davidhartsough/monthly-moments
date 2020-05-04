const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

export default function connections(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_connections": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_connections": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_connections": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "add_connection": {
      const { added } = action.payload;
      const data = [...state.data];
      data.push(added);
      return {
        loading: false,
        data,
      };
    }
    case "remove_connection": {
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
