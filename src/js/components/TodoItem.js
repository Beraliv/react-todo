import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Circle, CheckCircle, X } from 'react-feather';

import '../../css/components/TodoItem.css';

const todoItemClassnames = ({ isCompleted }) => classNames(
  'todo-item',
  {
    'todo-item--completed': isCompleted,
    'todo-item--active': !isCompleted
  }
);

const TodoItem = ({ title, isCompleted, onEdit, onToggle, onRemove }) => (
  <li className={todoItemClassnames({ isCompleted })}>
    <div className='todo-item__body'>
      <div className='todo-item--toggle'
           onClick={onToggle}>
        {isCompleted ? <CheckCircle/>: <Circle/>}
      </div>
      <label className='todo-item__title'>{title}</label>
      <div className='todo-item--remove'
           onClick={onRemove}>
        <X/>
      </div>
    </div>
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,

  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default TodoItem;