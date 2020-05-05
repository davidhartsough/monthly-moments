import { connect } from "react-redux";
import Search from "./Search";

const mapStateToProps = ({ search: { loading, data } }) => ({
  loading,
  data,
});
export default connect(mapStateToProps)(Search);
