/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function setPostComment(data) {
  return {
    type: types.SET_POST_COMMENT,
    data
  };
}


export function setPostCommentDetails(data) {
  return {
    type: types.SET_POST_COMMENT_DETAILS,
    data
  };
}


export function setPostCommentSingle(data) {
  return {
    type: types.SET_POST_COMMENT_SINGLE,
    data
  };
}

