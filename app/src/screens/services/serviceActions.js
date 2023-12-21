/*
 * Reducer actions related with login
 */
import * as types from '../startup/types';

export function setServiceCategory(response) {
  return {
    type: types.SET_SERVICE_CATEGORY,
    response,
  };
}

export function setServiceCategoryChild2(response) {
  return {
    type: types.SET_SERVICES_CHILD2_CATEGORY_DATA,
    response,
  };
}


export function setServiceDetailsData(response) {
  return {
    type: types.SET_SERVICES_DETAIL,
    response,
  };
}

export function setServiceOptionsData(response) {
  return {
    type: types.SET_SERVICE_OPTIONS,
    response,
  };
} 


export function resetDetailsData(response) {
  return {
    type: types.RESET_SERVICES_DETAIL,
    response,
  };
}



// export function setSearchData(response) {
//   return {
//     type: types.SET_SEARCH_PRODUCTS,
//     response,
//   };
// }


// export function setShopCategoryData(response) {
//   return {
//     type: types.SET_SHOP_CATEGORY_DATA,
//     response,
//   };
// }


// export function setActiveChildCategory(response) {
//   return {
//     type: types.SET_SHOP_CATEGORY_CHILD_ACTIVE,
//     response,
//   };
// }




// export function setShopCategoryChild(response) {
//   return {
//     type: types.SET_SHOP_CHILD_CATEGORY_DATA,
//     response,
//   };
// }



// export function setShopDetailsRest(response) {
//   return {
//     type: types.SET_SHOP_DETAIL_RESET,
//     response,
//   };
// }

