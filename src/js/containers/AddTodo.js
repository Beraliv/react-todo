import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo, toggleAllTodo } from '../actionCreators/todos';

import AddTodo from '../components/AddTodo';

const mapStateToProps = state => ({
  isActive: state.todos.every(todo => todo.isCompleted)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: bindActionCreators(addTodo, dispatch),
  onToggleAll: bindActionCreators(toggleAllTodo, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

