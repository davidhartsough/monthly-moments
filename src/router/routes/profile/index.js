import { connect } from "react-redux";
import Profile from "./Profile";

export default connect(
  ({ profile: { username, name, requests, ignored } }) => ({
    username,
    name,
    requestCount: requests.filter((i) => !ignored.includes(i)).length,
  })
)(Profile);
