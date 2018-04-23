import { takeEvery } from 'redux-saga/effects'

import { SET_FILTER } from '../actionCreators/filter'
import setFilter from '../reducers/filter'

export default function* filter() {
  yield takeEvery(SET_FILTER, setFilter)
}
