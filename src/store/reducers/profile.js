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
requested: ["jen"],
searchTerms: ["DAVID", "HARTSOUGH", "DAVID HARTSOUGH"],
*/

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "receive_profile": {
      const { profile } = action.payload;
      return profile;
    }
    case "create_profile_connection": {
      const { username } = action.payload;
      const connections = [...state.connections];
      connections.push(username);
      return {
        ...state,
        connections,
      };
    }
    case "delete_profile_connection": {
      const { username } = action.payload;
      const connection = [...state.connection];
      const index = connection.findIndex((un) => un === username);
      connection.splice(index, 1);
      return {
        ...state,
        connection,
      };
    }
    case "delete_profile_request": {
      const { username } = action.payload;
      const requests = [...state.requests];
      const index = requests.findIndex((un) => un === username);
      requests.splice(index, 1);
      return {
        ...state,
        requests,
      };
    }
    case "create_profile_request": {
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
