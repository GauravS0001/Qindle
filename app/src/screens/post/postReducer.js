import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';


const initialState = {
  postText: "",
  selectedBackground: "",
  friends: [],
  communities: [],
  location: [],
  completed: false,
  from:'edit',
};

const postReducer = createReducer(initialState, {
  [types.UPDATE_POST_INITIALS](state, action) {
    return { ...action.initialState };
  },

  [types.UPDATE_POST_RESET](state, action) {
    return { ...initialState };
  },


  [types.UPDATE_TAG_FRIENDS](state, action) {
    let newState = {
      ...state,
      friends: action.friends,
    };
    return newState;
  },

  [types.UPDATE_TAG_COMMUNITIES](state, action) {
    let newState = {
      ...state,
      communities: action.communities,
    };
    return newState;
  },

  [types.UPDATE_LOCATION](state, action) {
    let newState = {
      ...state,
      location: action.location,
    };
    return newState;
  },

  [types.POST_COMPLETED](state, action) {
    let newState = {
      ...state,
      completed: true,
    };
    return newState;
  }


});

export default postReducer;
