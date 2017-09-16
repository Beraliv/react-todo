let todoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const CHANGE_TODO = 'CHANGE_TODO';
export const TOGGLE_ALL_TODO = 'TOGGLE_ALL_TODO';

export const addTodo = title => ({
  type: ADD_TODO,
  id: todoId++,
  title
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const editTodo = id => ({
  type: EDIT_TODO,
  id
});

export const saveTodo = ({ id, title }) => ({
  type: SAVE_TODO,
  id,
  title
});

export const changeTodo = ({ id, title }) => ({
  type: CHANGE_TODO,
  id,
  title
});

export const toggleAllTodo = () => ({
  type: TOGGLE_ALL_TODO
});