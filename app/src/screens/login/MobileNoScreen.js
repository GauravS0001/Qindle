import React, {
  useState,
  useCallback,
  useReducer,
  useEffect,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
//var aesEcryptionDecryption = require('../../api/aes_encrypt_decrypt');

import * as types from '../startup/types';
import colors from '../../../res/colors';
import strings from '../../../res/strings';
import AppLogo from '../../components/UI/AppLogo';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import Whatsapp from '../../../res/images/Whatsapp.svg';
import Flag from '../../../res/images/India_Flag.svg';
import images from '../../../res/images_url';
import InputText from '../../components/UI/InputText';
import branch, { BranchEvent } from 'react-native-branch'
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
// const image = {uri: require('../../../res/images/Girl.png')};

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
let HASH = null;

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};
const MobileNoScreen = props => {
  const dispatch = useDispatch();
  const session_id = useSelector(state => state.auth.session_id);
  const errorResponse = useSelector(state => state.auth.errorResponse);
  const branchData = useSelector(state => state.branchData);


  branch.subscribe(({ error, params, uri }) => {
    if (error) {
      console.error('Error from Branch: ' + error)
      return
    }

    if (params.userId != undefined) {
      dispatch({
        type: types.INVITE_BRANCH_USER_ID,
        payload: { userId: params.userId },
      });
    }
    //let lastParams = await branch.getLatestReferringParams() // params from last open
    //let installParams = await branch.getFirstReferringParams() // params from original install
    // params will never be null if error is null
  })


  /*
  const action = async () => {
    return;
    // only canonicalIdentifier is required
    let branchUniversalObject = await branch.createBranchUniversalObject('canonicalIdentifier', {
      locallyIndex: true,
      title: 'Join Asara!',
      contentDescription: 'Your Personal health assistance',
      contentMetadata: {
        ratingAverage: 4.2,
        customMetadata: {
          userId: '_user.userDetails._id'
        }
      }
    })

    let shareOptions = { messageHeader: 'Open the link below', messageBody: 'Open the link below' }
    let linkProperties = { feature: 'share', channel: 'RNApp' }
    let controlParams = { $desktop_url: 'http://asara.com/home', $ios_url: 'http://asara.com/ios' }
    let { channel, completed, error } = await branchUniversalObject.showShareSheet(shareOptions, linkProperties, controlParams)


  }

  */

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      mobile: '',
    },
    inputValidities: {
      mobile: false,
    },
    formIsValid: false,
  });

  useEffect(() => {

    check(PERMISSIONS.ANDROID.READ_SMS)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });

    request(PERMISSIONS.ANDROID.READ_SMS).then((result) => {
      console.log(result)
    });

    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch((error) => {
        // …
      });

    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then((result) => {
      console.log(result)
    });

    RNOtpVerify.getHash().then(onfulfilled => {
      HASH = onfulfilled[0];
      dispatch({
        type: types.HASH,
        payload: { hash: HASH }, //onboardingState.currentQuestionNumber
      });
    });
    return () => {
      RNOtpVerify.removeListener;
    };
  }, []);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {

      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState],
  );

  const otpRequest = async () => {
    try {
      // let data = {
      //   mobile_no: formState.inputValues.mobile,
      //   hash: HASH,
      // };
      // let encryptData = aesEcryptionDecryption.encryptData(
      //   data,
      //   // JSON.stringify(data),
      // );

      // let decryptData = aesEcryptionDecryption.decryptData(encryptData);

      // let d = {data: encryptData};

      let action = dispatch({
        type: types.OTP_REQUEST,
        payload: { mobile_no: formState.inputValues.mobile, hash: HASH },
      });
    } catch (err) {
    }

    // try {
    //   await dispatch(action);
    //   Alert.alert('Login Successful', 'You have logged in successfuly', [
    //     {text: 'Okay'},
    //   ]);
    //   // setIsLoading(false);
    // } catch (err) {
    // }
  };

  useEffect(() => {
    if (session_id != null) props.navigation.navigate('OTPScreen');
    // return () => {
    //   cleanup
    // }
  }, [session_id]);

  // useEffect(() => {
  //   if (errorResponse != null) {
  //     Alert.alert('otp failed', [{text: 'Okay'}]);
  //   }
  // }, [errorResponse]);
  return (
    <>
      <BaseSafeAreaView>
        <ImageBackground source={images.splash_screen} style={styles.image}>
          <View
            style={{
              flex: 2,
              // backgroundColor: 'red',
              justifyContent: 'center',
            }}>
            <AppLogo />
          </View>
          <View
            style={{
              flex: 3,
              // backgroundColor: 'darkorange',
              flexDirection: 'column',
            }}>
            <Text style={styles.number_text}>{strings.your_number}</Text>
            <InputText
              name="mobile"
              id="mobile"
              // placeholder="Mobile No"
              keyboardType="number-pad"
              required
              mobile
              minLength={10}
              maxLength={10}
              autoCapitalize="none"
              errorText="Please enter a valid mobile number."
              onInputChange={inputChangeHandler}
              // onInputChange={() => {}}
              initialValue=""
              // inputRef={mobile_ref}
              onEmergencyPress={() => { }}
              onSubmit={event => { }}
            />

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={otpRequest}
              disabled={!formState.formIsValid}>
              <View
                style={{
                  ...styles.button,
                  backgroundColor: formState.formIsValid
                    ? colors.enabled_button
                    : colors.disabled_button,
                }}>
                <Text style={styles.buttonText}>{strings.request_otp}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              //   backgroundColor: 'green',
            }}>
            <Text style={styles.or_text}>OR</Text>
            <TouchableOpacity activeOpacity={0.5}
            //onPress={action}
            >
              <View
                style={{
                  ...styles.button,
                  ...styles.buttonWhatsapp,
                }}>
                <Whatsapp
                  style={{ marginHorizontal: 10, position: 'absolute', left: 0 }}
                />
                <Text style={{ ...styles.buttonText, ...styles.whatsappText }}>
                  {strings.whatsappText}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </BaseSafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
    flexDirection: 'column',
  },
  number_text: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 18,
    opacity: 1,
    letterSpacing: 0,
    textAlign: 'center',
    paddingVertical: 10,
  },
  or_text: {
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#F2F3F3',
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.disabled_button,
    paddingVertical: 12,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    textTransform: 'uppercase',
    color: colors.white,
    letterSpacing: 0.05,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 16,
    opacity: 1,
  },
  buttonWhatsapp: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderWidth: 1,
  },
  whatsappText: {
    textTransform: 'none',
    fontWeight: 'normal',
  },
});

export default MobileNoScreen;
