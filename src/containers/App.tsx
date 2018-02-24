import App from '../components/App';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom'

export function mapStateToProps({ }: StoreState) {
    return {
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

// @ts-ignore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
