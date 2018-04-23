import { all, takeEvery } from 'redux-saga/effects'

import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CHANGE_TODO,
  TOGGLE_ALL_TODO
} from '../actionCreators/todos'
import actionsTodo from '../reducers/todos'

export default function* todos() {
  yield all([
    takeEvery(ADD_TODO, actionsTodo),
    takeEvery(TOGGLE_TODO, actionsTodo),
    takeEvery(REMOVE_TODO, actionsTodo),
    takeEvery(EDIT_TODO, actionsTodo),
    takeEvery(SAVE_TODO, actionsTodo),
    takeEvery(CHANGE_TODO, actionsTodo),
    takeEvery(TOGGLE_ALL_TODO, actionsTodo)
  ])
}
