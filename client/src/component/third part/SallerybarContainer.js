import { connect } from "react-redux";
import Sallerybar from "./SalleryBar";
import { increment, decrement } from "../../reducer/actions";

const mapStateToProps = (state) => {
  return {
    foods: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: (index, id) => dispatch(increment(index, id)),
  decrement: (index, id) => dispatch(decrement(index, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sallerybar);
