import {SET_ITEMS} from './../../store/actions/actionTypes';
import {call, put} from 'redux-saga/effects';
import {performRequest} from '../performRequest';

export default function* itemsUseSaga() {
  try {
    const {data} = yield call(performRequest, {
      url: 'http://www.mocky.io/v2/5e3940013200005e00ddf87e',
    });

    data?.results?.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    );

    yield put({type: SET_ITEMS, payload: data});
  } catch (error) {
    console.error(error);
  }
}
