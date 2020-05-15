import { connect } from "react-redux";
import Profile from "./Profile";

export default connect(({ profile }) => ({ profile }))(Profile);
