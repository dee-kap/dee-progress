import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../components/Main';
import { selectBar, changeBarValue } from '../actions/barActions';

/**
 * Maps Redux state objects to props
 */
const mapStateToProps = function (state) {
  return {
    bars: state.bars,
    buttons: state.buttons,
  };
};

/**
 * Maps actions to props
 */
const mapDispatchToProps = function (dispatch) {
  return bindActionCreators({
    selectBar,
    changeBarValue,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
