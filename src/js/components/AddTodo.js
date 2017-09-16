import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ChevronDown } from 'react-feather';

import '../../css/components/AddTodo.css';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

class AddTodo extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onToggleAll: PropTypes.func.isRequired
  };

  state = {
    value: ''
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    const { value } = this.state;

    event.preventDefault();
    if (!value.trim()) {
      return;
    }

    this.props.onSubmit(value);
    this.setState({
      value: ''
    });
  };

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case ESCAPE_KEY:
        this.setState({
          value: ''
        });
        break;

      case ENTER_KEY:
        this.handleSubmit(event);
        break;

      default:
        break;
    }
  };

  render() {
    const { isActive, onToggleAll } = this.props;

    return (
      <div>
        <form className='add-todo'
              onSubmit={this.handleSubmit}>
          <div className={classNames(
            'add-todo__toggle-all',
            {
              'add-todo__toggle-all--active': isActive
            }
          )}
               onClick={onToggleAll}>
            <ChevronDown/>
          </div>
          <input className='add-todo__input'
                 value={this.state.value}
                 onChange={this.handleChange}
                 onKeyDown={this.handleKeyDown}
                 placeholder='What do you need to complete?'/>
        </form>
      </div>
    );
  }
}

export default AddTodo;

