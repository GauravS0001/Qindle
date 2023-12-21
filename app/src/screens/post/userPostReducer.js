import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';


const initialState = {
  userPostData: [],
  userCityHolder: [],
  userFriends: [],
  postType: '',
  postId: '',
  params: [],
  userLikeData: []
};

const userPostReducer = createReducer(initialState, {


  [types.RESET_POST_TYPE](state, action) {

    let newState = {
      ...state,
      postType: '',
      postId: '',
      params: []
    };
    return newState;
  },

  [types.UPDATE_POST_TYPE](state, action) {

    let newState = {
      ...state,
      postType: action.postType,
      postId: action.typeId,
      params: action.params
    };
    return newState;
  },

  [types.UPDATE_POST_LIKE](state, action) {

    let data = [];
    state.userPostData.forEach(element => {
      if (element._id == action.data) {
        element.likes = element.likes + 1
      }
      data.push(element);
    });


    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },
  [types.UPDATE_POST_HEART](state, action) {

    /*
    let data = [];
    state.userPostData.forEach(element => {
      if (element._id == action.data) {
        element.comments = element.comments + 1
      }
      data.push(element);
    });


    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
    */
    return state;
  },


  [types.UPDATE_POST_COMMENT](state, action) {

    let data = [];
    state.userPostData.forEach(element => {
      if (element._id == action.data.postId) {
        element.comments = element.comments + 1
      }
      data.push(element);
    });


    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },


  [types.RESET_USER_POST](state, action) {
    let newState = {
      ...initialState
    };
    return newState;
  },

  /*
    [types.CREATE_USER_POST](state, action) {
      let newState = {
        ...state
      };
      return newState;
    },
  */

  [types.UPDATE_USER_POST](state, action) {
    let data = [action.data, ...state.userPostData]
    let newState = {
      ...state,
      userPostData: data

    };
    return newState;
  },

  /*[types.GET_USER_POST](state, action) {
    let data = [...state.userPostData, action.data]
    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },
  */

  [types.GET_USER_POST_RESPONSE](state, action) {

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

    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },

  [types.UPDATE_USER_LIKE](state, action) {

    let _key = action.item._id;
    let _data = { [_key]: action.icon };

    let data = [];
    state.userLikeData.forEach(element => {
      data.push(element)
    });

    data.push(_data)

    console.log(data);
    let newState = {
      ...state,
      userLikeData: data
    };
    return newState;

  },

  [types.GET_USER_POST_RESPONSE_ALL](state, action) {

    let data = action.data;
    data.getPostDataByUserFriends.forEach(element => {
      data.userFriendsName.forEach(ele => {
        if (ele._id == element.userId) {
          element.userName = ele.name
          element.icon = ele.icon
        }
      })
    });

    data.getPostDataWhereUserTagged.forEach(element => {
      data.userFriendsName.forEach(ele => {
        if (ele._id == element.userId) {
          element.userName = ele.name
          element.icon = ele.icon
        }
      })
    });

    data.getPostDataByUserCommunities.forEach(element => {
      data.userFriendsName.forEach(ele => {
        if (ele._id == element.userId) {
          element.userName = ele.name
          element.icon = ele.icon
        }
      })
    });

    let _data = [
      ...data.getUserDataOwnPost,
      ...data.getPostDataWhereUserTagged,
      ...data.getPostDataByUserFriends,
      ...data.getPostDataByUserCommunities
    ]//...result.getPostDataByUserFriends


    _data.sort(function (a, b) { //arrange by date 
      return new Date(b.created) - new Date(a.created);
    });

    let newState = {
      ...state,
      userLikeData: data.getPostLikeDataForUsers,
      userPostData: _data
    };
    return newState;
  },


  [types.REMOVE_POST_BY_ID](state, action) {

    let data = [];
    state.userPostData.forEach(element => {
      if (action.data != element._id) {
        data.push(element)
      }
    });
    data.sort(function (a, b) { //arrange by date 
      return new Date(b.created) - new Date(a.created);
    });
    let newState = {
      ...state,
      userPostData: data
    };
    return newState;
  },



  [types.SET_USER_CITY](state, action) {
    let data = [];
    action.data.userOnboardingFullList.onboardingQuestionsList[4].options.forEach(element => {
      data.push(
        {
          _id: element._id,
          key: element._id,
          name: element.name,
          status: true,
          url: 'https://picsum.photos/512',
        }
      )
    });

    let newState = {
      ...state,
      userCityHolder: data
    };
    return newState;
  },

  [types.SET_USER_FRIEND](state, action) {
    let data = [];
    action.data.forEach(element => {
      data.push(
        {
          _id: element._id,
          key: element._id,
          name: element.name,
          status: true,
          url: element.icon,
        }
      )
    });


    /*
    data.push(
      {
        _id: '2323',
        key: 'element._id',
        name: 'Remove me from mock',
        status: true,
        url: 'https://picsum.photos/512',
      }
    )

    data.push(
      {
        _id: '2323s',
        key: 'element._id',
        name: 'Remove me from mock 2',
        status: true,
        url: 'https://picsum.photos/512',
      }
    )

    */

    let newState = {
      ...state,
      userFriends: data
    };
    return newState;
  },





});

export default userPostReducer;
