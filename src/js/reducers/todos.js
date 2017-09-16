import * as types from '../actionCreators/todos';

const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          isCompleted: false,
          isEditing: false
        }
      ];

    case types.TOGGLE_TODO:
      const toggledIndex = state.findIndex(todo => todo.id === action.id);
      const toggledTodo = state[toggledIndex];

      return [
        ...state.slice(0, toggledIndex),
        {
          ...toggledTodo,
          isCompleted: !toggledTodo.isCompleted
        },
        ...state.slice(toggledIndex + 1)
      ];

    case types.REMOVE_TODO:
      const removedIndex = state.findIndex(todo => todo.id === action.id);

      return [
        ...state.slice(0, removedIndex),
        ...state.slice(removedIndex + 1)
      ];

    case types.EDIT_TODO:
      const editedIndex = state.findIndex(todo => todo.id === action.id);
      const editedTodo = state[editedIndex];

      return [
        ...state.slice(0, editedIndex),
        {
          ...editedTodo,
          isEditing: true
        },
        ...state.slice(editedIndex + 1)
      ];

    case types.SAVE_TODO:
      const savedIndex = state.findIndex(todo => todo.id === action.id);
      const savedTodo = state[savedIndex];

      return [
        ...state.slice(0, toggledIndex),
        {
          ...savedTodo,
          title: action.title,
          isEditing: false
        },
        ...state.slice(toggledIndex + 1)
      ];


    case types.CHANGE_TODO:
      const changedIndex = state.findIndex(todo => todo.id === action.id);
      const changedTodo = state[changedIndex];

      return [
        ...state.slice(0, toggledIndex),
        {
          ...changedTodo,
          title: action.title,
          isEditing: true
        },
        ...state.slice(toggledIndex + 1)
      ];

    case types.TOGGLE_ALL_TODO:
      return state.map(todo => ({
        ...todo,
        isCompleted: !state.every(todo => todo.isCompleted)
      }));

    default:
      return state;
  }
};

export default todos;