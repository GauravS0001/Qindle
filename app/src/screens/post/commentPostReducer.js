import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';


const initialState = {
  data: [],
  lastData: [],
  details: []
};

const commentPostReducer = createReducer(initialState, {

  [types.RESET_POST_COMMENT_DETAILS](state, action) {
    let data = [];
    return {
      ...state,
      details: data
    }
  },

  [types.SET_POST_COMMENT_DETAILS](state, action) {
    state.details = [];
    action.data.sort(function (a, b) { //arrange by date
      return new Date(b.created) - new Date(a.created);
    });
    let data = [];
    action.data.forEach(element => {
      data.push(element)
    });
    return {
      ...state,
      details: data
    }
  },

  [types.SET_POST_COMMENT](state, action) {
    action.data.sort(function (a, b) { //arrange by date
      return new Date(b.created) - new Date(a.created);
    });
    let inc = 0;
    action.data.forEach(element => {
      if (inc == 0) {
        state.data.push(element);
        inc++;
      }
    });
    state.lastData = [];
    return {
      ...state
    }
  },
  [types.SET_POST_COMMENT_SINGLE](state, action) {

    let data = [];
    state.data.forEach(element => {
      if (element.postId == action.data.postId) {
        element = action.data
      }
      data.push(element);
    });

    //state.data.unshift(action.data)
    state.data = data;
    state.lastData = action.data;
    return state;
  }

});

export default commentPostReducer;
