import { takeEvery } from 'redux-saga/effects'

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
  yield takeEvery([
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    EDIT_TODO,
    SAVE_TODO,
    CHANGE_TODO,
    TOGGLE_ALL_TODO
  ], actionsTodo)
}
