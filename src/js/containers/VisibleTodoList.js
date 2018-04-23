import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators/todos';

import TodoList from '../components/TodoList';
import * as types from '../actionCreators/filter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      return todos;

    case types.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isCompleted);

    case types.SHOW_COMPLETED:
      return todos.filter(todo => todo.isCompleted);

    default:
      return todos;
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.filter)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);