import {takeLatest} from 'redux-saga/effects';
import {REQUEST_ITEMS} from '../store/actions/actionTypes';
import itemsUseSaga from './requestSagas/shoesUseSaga';

function* mainSaga() {
  try {
    yield takeLatest(REQUEST_ITEMS, itemsUseSaga);
  } catch (err) {
    console.log(err);
  }
}

export default mainSaga;
