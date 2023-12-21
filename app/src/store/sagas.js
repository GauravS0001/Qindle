/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { onboardingSaga } from '../screens/onboarding/onboardingSaga';
import { authSaga } from '../screens/startup/authSaga';
import { communitySaga } from '../screens/community/communitySaga';
import { postSaga } from '../screens/post/postSaga';
import { userPostSaga } from '../screens/post/userPostSaga';
import { commentPostSaga } from '../screens/post/commentPostSaga';
import { userPostCommunitySaga } from '../screens/post/userPostCommunitySaga';
import { branchSaga } from '../screens/startup/branchSaga';
import { reminderSaga } from '../screens/reminders/reminderSaga';
import { healthSaga } from '../screens/health/healthSaga';
import { channelSaga } from '../screens/channel/channelSaga';
import { shopSaga } from '../screens/shop/shopSaga';
import { serviceSaga } from '../screens/services/serviceSaga';

export default function* rootSaga() {
  yield all([authSaga(), onboardingSaga(), communitySaga(), postSaga(), userPostSaga(), commentPostSaga(), userPostCommunitySaga(), branchSaga(), reminderSaga(), healthSaga(), channelSaga(), shopSaga(), serviceSaga()]);
}
