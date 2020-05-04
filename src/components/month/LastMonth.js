import { connect } from "react-redux";
import { fetchLastMonthsMoments } from "../../store/actions/lastMonthsMoments";
import MyMonth from "./MyMonth";

const mapStateToProps = ({ lastMonthsMoments: { loading, data } }) => ({
  loading,
  data,
});
const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(fetchLastMonthsMoments()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyMonth);
