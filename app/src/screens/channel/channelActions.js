/*
 * Reducer actions related with health
 */
import * as types from '../startup/types';



export function setChannelData(response, category) {
  return {
    type: types.SET_CHANNEL_DATA,
    response: { response, category },
  };
}

export function setBannerData(response) {
  return {
    type: types.SET_BANNER_DATA,
    response: response,
  };
}

