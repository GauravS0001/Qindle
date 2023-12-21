import React, {
  useState,
  useCallback,
  useReducer,
  useEffect,
  useRef,
} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RNOtpVerify from 'react-native-otp-verify';

import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import images from '../../../res/images_url';
import strings from '../../../res/strings';
import colors from '../../../res/colors';
import * as types from '../startup/types';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
const RESET_INPUT = 'RESET_INPUT';
const AUTOMATIC_FILL_OTP = 'AUTOMATIC_FILL_OTP';
const initialState = {
  inputValues: {
    otpValues: ['', '', '', '', '', ''],
  },
  inputValidities: {
    isValid: [false, false, false, false, false, false],
  },
  formIsValid: false,
};
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const newArray = [...state.inputValues.otpValues]; //making a new array
    newArray[action.index] = action.value; //changing value in the new array
    const updatedValues = {
      ...state.inputValues,
      otpValues: newArray, //reassingning todos to new array
    };
    const isValidArray = [...state.inputValidities.isValid];
    isValidArray[action.index] = action.isValid;
    const updatedValidities = {
      ...state.inputValidities,
      isValid: isValidArray,
    };

    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    let checkValidation = updatedFormIsValid.every(function (e) {
      return e == true;
    });

    return {
      // formIsValid: updatedFormIsValid,
      formIsValid: checkValidation,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  if (action.type === RESET_INPUT) {
    return {
      inputValues: {
        otpValues: ['', '', '', '', '', ''],
      },
      inputValidities: {
        isValid: [false, false, false, false, false, false],
      },
      formIsValid: false,
    };
  }
  if (action.type === AUTOMATIC_FILL_OTP) {
    return {
      inputValues: {
        otpValues: action.value.split(''),
      },
      inputValidities: {
        isValid: [true, true, true, true, true, true],
      },
      formIsValid: true,
    };
  }

  return state;
};
const OTPScreen = props => {
  const dispatch = useDispatch();
  const session_id = useSelector(state => state.auth.session_id);
  const mobile_no = useSelector(state => state.auth.mobile_no);
  const hash = useSelector(state => state.auth.hash);
  // in secs, if value is greater than 0 then button will be disabled
  const RESEND_OTP_TIME_LIMIT = 30;

  let resendOtpTimerInterval;
  let autoSubmitOtpTimerInterval;

  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
    RESEND_OTP_TIME_LIMIT,
  );
  const refs = useRef([]);

  const [formState, dispatchFormState] = useReducer(formReducer, initialState);

  const inputChangeHandler = useCallback(
    (inputValue, inputIndex, inputValidity) => {

      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        // input: inputIdentifier,
        index: inputIndex,
        isValid: inputValidity,
      });
    },
    [dispatchFormState],
  );

  const AutomaticOTPRead = useCallback(
    otp => {
      dispatchFormState({
        type: AUTOMATIC_FILL_OTP,
        value: otp,
      });
    },
    [dispatchFormState],
  );

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(p =>
        RNOtpVerify.addListener(message => {
          try {
            if (message) {
              const messageArray = message.split('\n');
              if (messageArray[1]) {
                const otp = messageArray[1].split(' ')[8];
                if (otp.length === 6) {
                  AutomaticOTPRead(otp);
                  startAutoSubmitOtpTimer();
                }
              }
            }
          } catch (error) {
          }
        }),
      )
      .catch(error => {
      });
    return () => {
      RNOtpVerify.removeListener();
    };
  }, []);

  const onOtpChange = (text, index) => {
    let isValid = false;
    const next = refs.current[index + 1];
    if (text.length > 0) {
      isValid = true;
      if (next) next.focus();
    } else isValid = false;
    inputChangeHandler(text, index, isValid);
  };

  const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
      clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
      if (resendButtonDisabledTime <= 0) {
        clearInterval(resendOtpTimerInterval);
      } else {
        setResendButtonDisabledTime(resendButtonDisabledTime - 1);
      }
    }, 1000);
  };

  const startAutoSubmitOtpTimer = () => {
    if (autoSubmitOtpTimerInterval) {
      clearInterval(autoSubmitOtpTimerInterval);
    }
    autoSubmitOtpTimerInterval = setInterval(() => {
      onSubmitOTP();
      clearInterval(autoSubmitOtpTimerInterval);
    }, 2000);
  };

  useEffect(() => {
    startResendOtpTimer();

    return () => {
      if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
      }
    };
  }, [resendButtonDisabledTime]);

  const onResendOtpButtonPress = () => {
    // refs.current[0].focus();

    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();
    resetValues();
    otpRequest();
  };

  const resetValues = useCallback(() => {
    dispatchFormState({
      type: RESET_INPUT,
      value: '',
      isValid: false,
    });
  }, [dispatchFormState]);

  const otpRequest = async () => {
    try {
      let action = dispatch({
        type: types.OTP_REQUEST,
        payload: {mobile_no: mobile_no, hash: hash},
      });
    } catch (err) {
    }
  };
  const onSubmitOTP = () => {
    const otp = formState.inputValues.otpValues.join('');
    let action = dispatch({
      type: types.OTP_CHALLENGE_REQUEST,
      payload: {otp: otp, session_id: session_id, mobile_no: mobile_no},
    });
  };

  return (
    <>
      <BaseSafeAreaView>
        <ImageBackground source={images.splash_screen} style={styles.image}>
          <View
            style={{
              flex: 2,
              // backgroundColor: 'red',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text style={styles.verifynumber_text}>
              {strings.verify_phone_number}
            </Text>
            <Text
              style={{
                ...styles.verifynumber_text,
                fontWeight: 'normal',
                paddingVertical: 0,
              }}>
              {strings.otp_code}
            </Text>
            <Text
              style={{
                ...styles.verifynumber_text,
                fontWeight: 'normal',
                paddingVertical: 0,
              }}>
              {strings._91} ******{mobile_no ? mobile_no.substr(-4) : ''}
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              // backgroundColor: 'darkorange',
              flexDirection: 'column',
            }}>
            <View
              style={{
                flexDirection: 'row',
                // backgroundColor: 'red',
                justifyContent: 'center',
              }}>
              {Array.from(Array(6).keys()).map((key, index) => (
                <TextInput
                  style={styles.otp_input}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={formState.inputValues.otpValues[index]}
                  key={index}
                  // autoFocus={index === 0 ? true : undefined}
                  ref={el => (refs.current[index] = el)}
                  onChangeText={text => onOtpChange(text, index)}
                />
                // </View>
              ))}
            </View>
            {resendButtonDisabledTime > 0 ? (
              <Text
                style={{
                  ...styles.verifynumber_text,
                  fontWeight: 'normal',
                  paddingVertical: 10,
                }}>
                Resend OTP in {resendButtonDisabledTime} seconds
              </Text>
            ) : (
              <Text
                onPress={onResendOtpButtonPress}
                style={{
                  ...styles.verifynumber_text,
                  fontWeight: 'normal',
                  paddingVertical: 10,
                  textDecorationLine: 'underline',
                }}>
                Resend OTP
              </Text>
            )}
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onSubmitOTP}
              disabled={!formState.formIsValid}>
              <View
                style={{
                  ...styles.button,
                  backgroundColor: formState.formIsValid
                    ? colors.enabled_button
                    : colors.disabled_button,
                }}>
                <Text style={styles.buttonText}>{strings.submit}</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'green',
              justifyContent: 'center',
            }}>
            <View style={{margin: 20}}>
              <Text style={styles.privacy_policy_text}>
                {strings.privacy_policy_text}
              </Text>
              <Text style={styles.privacy_policy_text}>
                {strings.agreeing_text}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.privacy_policy_text}>
                  {strings.agree_to}
                </Text>
                <Text
                  style={{
                    ...styles.privacy_policy_text,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  {strings.terms_of_use}
                </Text>
                <Text style={styles.privacy_policy_text}>{strings.and}</Text>
                <Text
                  style={{
                    ...styles.privacy_policy_text,
                    fontWeight: 'bold',
                    textDecorationLine: 'underline',
                  }}>
                  {strings.privacy_policy}
                </Text>
              </View>
            </View>
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
  verifynumber_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 0,
    opacity: 1,
    color: colors.white,
    textAlign: 'center',
    paddingVertical: 15,
  },
  otp_input: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    // fontSize: 20,
    width: 40,
    height: 40,
    backgroundColor: 'white',
    color: colors.black,
    borderRadius: 6,
    margin: 3,
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
  privacy_policy_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    letterSpacing: 0,
    opacity: 1,
    color: '#77B0DB',
  },
});

export default OTPScreen;
