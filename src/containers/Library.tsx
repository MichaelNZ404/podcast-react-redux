import Library from '../components/Library';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ itunes_rss }: StoreState) {
    return {
      itunes_rss
    }
  }

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
