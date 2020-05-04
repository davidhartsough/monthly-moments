const initialState = {
  name: "",
  username: "",
  connections: [],
  requests: [],
  requested: [],
};

/*
uid: "david",
username: "david",
name: "David Hartsough",
connections: ["steve"],
requests: ["alicia"],
searchTerms: ["DAVID", "HARTSOUGH"],
*/

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "receive_profile": {
      const { profile } = action.payload;
      return profile;
    }
    case "connect": {
      const { username } = action.payload;
      const connections = [...state.connections];
      connections.push(username);
      return {
        ...state,
        connections,
      };
    }
    case "disconnect": {
      const { username } = action.payload;
      const connection = [...state.connection];
      const index = connection.findIndex((un) => un === username);
      connection.splice(index, 1);
      return {
        ...state,
        connection,
      };
    }
    case "delete_request": {
      const { username } = action.payload;
      const requests = [...state.requests];
      const index = requests.findIndex((un) => un === username);
      requests.splice(index, 1);
      return {
        ...state,
        requests,
      };
    }
    case "request": {
      const { username } = action.payload;
      const requested = [...state.requested];
      requested.push(username);
      return {
        ...state,
        requested,
      };
    }
    default:
      return state;
  }
}
