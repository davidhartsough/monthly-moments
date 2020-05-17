import { connect } from "react-redux";
import Search from "./Search";

const mapStateToProps = ({ search: { loading, query, data } }) => ({
  loading,
  query,
  data,
});
export default connect(mapStateToProps)(Search);
