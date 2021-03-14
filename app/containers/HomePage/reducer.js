/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_LAUNCHES,
  GET_LAUNCHES_ERROR,
  GET_LAUNCHES_SUCCESS,
} from './constants';

export const initialState = {
  list: { data: [], count: 0 },
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_LAUNCHES:
        return {
          ...state,
          loading: true,
        };
      case GET_LAUNCHES_SUCCESS:      
        return {
          ...state,
          list: {
            data: action.payload.data,
            count: action.payload.headers['spacex-api-count'],
          },
          loading: false,
        };
      case GET_LAUNCHES_ERROR:
        return {
          ...state,
          loading: false,
        };
      default:
        return state;
    }
  });

export default homePageReducer;
