import { connect } from 'react-redux';
import classNames from 'classnames';

import { setFilter } from "../actionCreators/filter";
import Link from '../components/Link';
import * as types from '../components/Link';

import '../../css/containers/FilterLink.css';

const mapStateToProps = (state, props) => ({
  className: classNames(
    'todo-filter',
    {
      [types.LINK_ACTIVE]: props.filter === state.filter
    }
  )
});

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(setFilter(props.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);