import { connect } from "react-redux";
import Menubar from "./MenuBar";

const mapStateToProps = (state) => {
  return {
    foods: state,
        
  };
};

export default connect(mapStateToProps)(Menubar);
