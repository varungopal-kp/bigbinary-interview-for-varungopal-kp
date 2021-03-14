/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_LAUNCHES,
  GET_LAUNCHES_ERROR,
  GET_LAUNCHES_SUCCESS,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getLaunches(data = {}) {
  return {
    type: GET_LAUNCHES,
    payload: data,
  };
}

export function getLaunchesSuccess(data) {
  return {
    type: GET_LAUNCHES_SUCCESS,
    payload: data,
  };
}

export function getLaunchesError(err) {
  return {
    type: GET_LAUNCHES_ERROR,
    payload: err,
  };
}
