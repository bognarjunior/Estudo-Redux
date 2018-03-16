import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from './../App';
import * as Actions from './../actions/counter';

const mapStateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App)
