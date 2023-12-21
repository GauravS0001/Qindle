import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  useRef,
} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as types from '../startup/types';
import colors from '../../../res/colors';
import Thank_You from '../../../res/images/Thank_You.svg';
import Happy from '../../../res/images/Happy.svg';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';

const OnBoardingSuccessScreen = props => {
  const dispatch = useDispatch();
  const onboardingQuestionAnswerList = useSelector(
    state => state.onboarding.onboardingQuestionAnswerList,
  );

  const userDetails = useSelector(
    state => state.user,
  );

  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );

  useEffect(() => {
    /*setTimeout(() => {
      dispatch({
        type: types.ONBOARDING_UPDATE_USER_ANSWER_LIST,
        payload: userOnboardingFullList,
        userId: userDetails.userDetails._id
      });
    }, 2000)
    */

    setTimeout(() => {
      dispatch({
        type: types.ONBOARDING_COMPLETE,
        payload: { completed: true },
      });
    }, 2000)

  }, []);

  return (
    <>
      <BaseSafeAreaView>
        <View
          style={{
            flex: 1,
            margin: 20,
            justifyContent: 'center',
            // alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View
            style={{ flex: 7, justifyContent: 'center', alignItems: 'center' }}>
            <Thank_You />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ margin: 5 }}>
                Well Done {onboardingQuestionAnswerList[1][1].value}!
              </Text>
              <Happy />
            </View>
          </View>
          <View style={{ flex: 3, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch({
                  type: types.ONBOARDING_COMPLETE,
                  payload: { completed: true },
                });
              }}>
              <Text style={styles.home_text}>Go to Home Page</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BaseSafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#055F9B',
    borderRadius: 8,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  home_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
    color: colors.white,
  },
});
export default OnBoardingSuccessScreen;
