/* Handles and check access-token validation
 */
import createReducer from '../../lib/createReducer';
import * as types from './types';

const initialState = {
  inviteUserId: ''
};

const branchReducer = createReducer(initialState, {
  [types.INVITE_BRANCH_USER_ID](state, action) {
    return {
      inviteUserId: action.payload.userId
    };
  },

});
export default branchReducer;
