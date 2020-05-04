import { connect } from "react-redux";
import { fetchThisMonthsMoments } from "../../store/actions/thisMonthsMoments";
import MyMonth from "./MyMonth";

const mapStateToProps = ({ thisMonthsMoments: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchThisMonthsMoments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyMonth);
