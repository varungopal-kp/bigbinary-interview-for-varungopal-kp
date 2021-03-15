import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { getLaunchesError, getLaunchesSuccess } from './actions';
import { GET_LAUNCHES } from './constants';

const BASE_URL = `${process.env.BASE_URL}`;

export function* getLaunchesCall({ payload }) {
  try {
    let url = 'launches';
    if (payload.upcoming) {
      url = 'launches/upcoming';
    }
    delete payload.upcoming;
    const params = new URLSearchParams(payload);
    const repos = yield call(request, `${BASE_URL}/${url}/?${params}`, {
      headers: {},
    });

    yield put(getLaunchesSuccess(repos));
  } catch (err) {
    console.error(err);
    yield put(getLaunchesError(err));
  }
}

export default function* homePageSaga() {
  yield takeLatest(GET_LAUNCHES, getLaunchesCall);
}
