import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';

const initialState = {
  data: [],
  category: [],
  currentHome: 'All',
  menu: [{
    "_id": 1, title: "All",
    data: "all",
    clickedItem: true
  },
  {
    "_id": 2, title: "Religion & Spirituality",
    data: ['638c3da6a68b6ff5bacbf37f', '638c3de7a68b6ff5bacbf380', '638c3e14a68b6ff5bacbf383', '638c3e1fa68b6ff5bacbf384', '638c3df6a68b6ff5bacbf381', '638f2a435a29e7c2cb5e31f1', '639080fa5a29e7c2cb5e323c', '638f2afe5a29e7c2cb5e31f5'],
    clickedItem: false
  },
  {
    "_id": 3, title: "Health & Wellness", data: ['638f29f85a29e7c2cb5e31ee'],
    clickedItem: false
  },
  { "_id": 4, title: "Events", data: ['638f2a175a29e7c2cb5e31ef'], clickedItem: false },
  { "_id": 5, title: "Podcasts", data: ['638f2a2c5a29e7c2cb5e31f0'], clickedItem: false }],
  bannerData: []
};


const channelReducer = createReducer(initialState, {


  [types.SET_CHANNEL_DATA](state, action) {
    console.log(action.response.category, action.response.response)
    let newState = {
      ...state,
      category: action.response.category,
      data: action.response.response
    };
    return newState;
  },

  [types.SET_BANNER_DATA](state, action) {
    let newState = {
      ...state,
      bannerData: action.response
    };
    return newState;
  },
  [types.SET_TOP_MENU_CLICKEDITEM](state, action) {
    state.menu.forEach(element => {
      element.clickedItem = false;
      if (element._id == action.payload._id) {
        element.clickedItem = true;
        //state.currentHome = element.title
      }
    });
    console.log(state)
    let newState = {
      ...state
    };
    return newState;
  },


});

export default channelReducer;
