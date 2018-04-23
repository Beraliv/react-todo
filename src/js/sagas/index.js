import { all } from 'redux-saga/effects'

import FilterSagas from './filter'
import TodoSagas from './todos'

export default function* rootSaga() {
  yield all([
    FilterSagas(),
    TodoSagas()
  ])
}
