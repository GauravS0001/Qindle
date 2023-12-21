import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';


const initialState = {
  userPostData: [],
  userCityHolder: [],
  userFriends: []
};

const userPostCommunityReducer = createReducer(initialState, {

  [types.RESET_USER_POST_RESPONSE_COMMUNITY](state, action) {

    let newState = {
      ...initialState
    };
    return newState;
  },

  [types.GET_USER_POST_RESPONSE_COMMUNITY](state, action) {

    let data = action.data
    /*
    let data = action.data.data;
    action.data.userFriendsData.forEach(element => {
      action.data.userFriendsName.forEach(ele => {
        if (ele._id == element.userId) {
          element.userName = ele.name
          element.icon = ele.icon
        }
      })
      data.push(element)
    });

    data.sort(function (a, b) { //arrange by date 
      return new Date(b.created) - new Date(a.created);
    });
    */

    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },

  [types.UPDATE_USER_POST_COMMUNITY](state, action) {
    let data = [action.data, ...state.userPostData]
    let newState = {
      ...state,
      userPostData: data

    };
    return newState;
  },

});

export default userPostCommunityReducer;
