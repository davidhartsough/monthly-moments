const initialState = {
  loading: true,
  hasFetched: false,
  data: [],
};

/*
links: [
  "https://moments-memories.web.app/",
  "https://play.google.com/store/apps/details?id=com.davidhartsough.moments"
],
month: "2020-3",
text: "Worked on the Moments app",
uid: "david",
username: "david",
*/

export default function thisMonthsMoments(state = initialState, action) {
  switch (action.type) {
    case "stop_loading_moments": {
      return {
        ...state,
        loading: false,
      };
    }
    case "request_moments": {
      return {
        ...state,
        loading: true,
      };
    }
    case "receive_moments": {
      const { data } = action.payload;
      return {
        loading: false,
        hasFetched: true,
        data,
      };
    }
    case "create_moment": {
      const { created } = action.payload;
      const data = [...state.data];
      data.push(created);
      return {
        ...state,
        loading: false,
        data,
      };
    }
    case "update_moment": {
      const { updated } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(({ id }) => id === updated.id);
      data[index] = updated;
      return {
        ...state,
        loading: false,
        data,
      };
    }
    case "delete_moment": {
      const { deleted } = action.payload;
      const data = [...state.data];
      const index = data.findIndex(({ id }) => id === deleted.id);
      data.splice(index, 1);
      return {
        ...state,
        loading: false,
        data,
      };
    }
    default:
      return state;
  }
}
