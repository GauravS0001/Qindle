import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';

const initialState = {
  onboardingCommunity: [],
  userCommunity: [],
  communityCategory: [],
  communityHash: [],
  comunityModerationData:[]
};

const communityReducer = createReducer(initialState, {

  [types.SET_COMMUNITY_MODERRATION_DATA](state, action) {
    //action.response

    return {
      ...state,
      comunityModerationData: action.response
    }
  },



  [types.SET_COMMUNITY_HASH](state, action) {
    //action.response
    return {
      ...state,
      communityHash: action.response
    }
  },

  [types.SET_COMMUNITY_CATEGORY](state, action) {
    //action.response

    return {
      ...state,
      communityCategory: action.response
    }
  },

  [types.GET_COMMUNITY](state, action) {
    //action.response
    return {
      ...state,
      onboardingCommunity: []
    }
  },

  [types.GET_COMMUNITY2](state, action) {
    let data = [];
    action.response.data.forEach(element => {
      data.push(
        {
          _id: element.communities_id,
          name: element.communities_name,
          members: '',
          icon: '',
        }
      )
    });
    return {
      ...state,
      onboardingCommunity: data
    }
  },

  [types.SET_USER_COMMUNITY](state, action) {
    let _data = [
      ...action.response.data.userJoinedCommunities,
      ...action.response.data.userCreatedCommunities,
      ...action.response.data.getAllPublicCommunitiesData,
      //...action.response.data.communitiesDataObj
    ]
    let data = [];
    _data.forEach(element => {
      data.push(
        {
          _id: element._id,
          key: element._id,
          name: element.community_name,
          status: true,
          url: element.icon,
        }
      )
    });
    return {
      ...state,
      userCommunity: data
    }
  }

});

export default communityReducer;
