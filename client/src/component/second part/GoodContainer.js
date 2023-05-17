import { connect } from "react-redux";
import Good from "./Good";
import { increment, decrement } from "../../reducer/actions";

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    foods: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch.type)
  return {
    increment: (index, id) => dispatch(increment(index, id)),
    decrement: (index, id) => dispatch(decrement(index, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Good);
