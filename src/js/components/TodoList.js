import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';
import '../../css/components/TodoList.css';

const TodoList = ({ todos, actions: { toggleTodo, removeTodo } }) => (
  <ul className='todo-list'>
    {todos.map(todo => (
      <TodoItem {...todo}
                key={todo.id}
                onToggle={() => toggleTodo(todo.id)}
                onRemove={() => removeTodo(todo.id)}/>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,

  actions: PropTypes.object.isRequired
};

export default TodoList;