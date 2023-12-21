/*
 * Reducer actions related with login
 */
import * as types from '../startup/types';

export function setShopCategory(response) {
  return {
    type: types.SET_SHOP_CATEGORY,
    response,
  };
}
 
export function setSearchData(response) {
  return {
    type: types.SET_SEARCH_PRODUCTS,
    response,
  };
}


export function setShopCategoryData(response) {
  return {
    type: types.SET_SHOP_CATEGORY_DATA,
    response,
  };
}


export function setActiveChildCategory(response) {
  return {
    type: types.SET_SHOP_CATEGORY_CHILD_ACTIVE,
    response,
  };
}


export function setShopCategoryChild2(response) {
  return {
    type: types.SET_SHOP_CHILD2_CATEGORY_DATA,
    response,
  };
}

export function setShopCategoryChild(response) {
  return {
    type: types.SET_SHOP_CHILD_CATEGORY_DATA,
    response,
  };
}


export function setShopDetailsData(response) {
  return {
    type: types.SET_SHOP_DETAIL_DATA,
    response,
  };
}


export function setShopDetailsRest(response) {
  return {
    type: types.SET_SHOP_DETAIL_RESET,
    response,
  };
}

