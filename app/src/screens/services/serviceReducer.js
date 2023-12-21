/* Handles and check access-token validation
 */
import createReducer from '../../lib/createReducer';
import * as types from './../startup/types';


const initialState = {
  serviceCategory: [],
  // categoryChild: [],
  categoryChild2: [],
  // categoryData: [], //holds category data for list page
  detailsData: { Heading: '', description: '', icon: '', name: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' },//holds details page data
  // detailImages: 'loading',
  // searchData: [],
  // detailsLoad: false
  detailsOptions: []
};

const serviceReducer = createReducer(initialState, {

  [types.SET_SERVICE_CATEGORY](state, action) {
    return {
      ...state,
      serviceCategory: action.response
    };
  },


  [types.SET_SERVICES_CHILD2_CATEGORY_DATA](state, action) {
    return {
      ...state,
      categoryChild2: action.response
    };
  },



  [types.SET_SERVICES_DETAIL](state, action) {

    console.log('action.response', action.response)
    return {
      ...state,
      detailsData: action.response,
    };
  },
  [types.SET_SERVICE_OPTIONS](state, action) {

    console.log('action.respons1212121e', action.response)
    return {
      ...state,
      detailsOptions: action.response,
    };
  },

  [types.RESET_SERVICES_DETAIL](state, action) {

    console.log('action.response', action.response)
    return {
      ...state,
      detailsData: { Heading: '', description: '', icon: '', name: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' }
    };
  },

  // [types.SET_SHOP_CATEGORY_CHILD_ACTIVE](state, action) {
  //   state.categoryChild2.forEach(element => {
  //     element.clickedItem = false
  //     if (element.id == action.response) {
  //       element.clickedItem = true
  //     }
  //   });
  //   return {
  //     ...state
  //   };
  // },
  // [types.SET_SEARCH_PRODUCTS](state, action) {
  //   return {
  //     ...state,
  //     searchData: action.response
  //   };
  // },


  // [types.SET_SHOP_CHILD_CATEGORY_DATA](state, action) {
  //   console.log('action.response', action.response)
  //   return {
  //     ...state,
  //     categoryChild: action.response
  //   };
  // },
  // [types.SET_SHOP_CATEGORY_DATA](state, action) {
  //   return {
  //     ...state,
  //     categoryData: action.response//[_dummy]//
  //   };
  // },
  // [types.SET_SHOP_DETAIL_RESET](state, action) {
  //   return {
  //     ...state,
  //     detailsLoad: false
  //   };
  // },


});
export default serviceReducer;
