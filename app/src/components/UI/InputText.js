import React, {useReducer, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import colors from '../../../res/colors';
import Flag from '../../../res/images/India_Flag.svg';
import strings from '../../../res/strings';
import UnDone from '../../../res/images/UnDone.svg';
import Done from '../../../res/images/Done.svg';

const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const InputText = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });

  const {onInputChange, id, inputRef, onSubmit, isEmergency, onEmergencyPress} =
    props;

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const textChangeHandler = text => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    if (props.mobile) {
      text = text.replace(/[^0-9]/g, '');
      // isValid = false;
    }
    // if (props.mobile && text.length == 0) {
    //   isValid = true;
    // }
    dispatch({type: INPUT_CHANGE, value: text, isValid: isValid});
    dispatch({type: INPUT_BLUR});
  };

  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };

  // let passwordEyeContainer;
  // if (props.id === "password") {
  //   passwordEyeContainer = (
  //     <TouchableOpacity {...props} onPress={props.onPasswordSecurityChange}>
  //       {props.secureTextEntry ? (
  //         <Feather name="eye-off" style={styles.eyeIcon} />
  //       ) : (
  //         <Feather name="eye" style={styles.eyeIcon} />
  //       )}
  //     </TouchableOpacity>
  //   );
  // }
  return (
    <View
      {...props}
      style={{...styles.formControl, marginTop: isEmergency ? 5 : 0}}>
      <View
        {...props}
        style={{...styles.button, marginHorizontal: isEmergency ? 0 : 20}}>
        {/* <FontAwesome {...props} style={styles.icon} /> */}
        {/* {props.children} */}
        <Flag style={{flex: 2, marginHorizontal: 3}} />
        <Text
          style={{
            ...styles.num_text,
            flex: 2,
            textAlign: 'center',
            color: '#808A98',
          }}>
          {strings._91}
        </Text>
        <TextInput
          {...props}
          onSubmitEditing={onSubmit}
          ref={inputRef}
          style={{
            ...styles.num_text,
            ...styles.textInput,
          }}
          value={inputState.value}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
        />

        {/* use in onboarding section */}
        {isEmergency &&
          (inputState.isValid ? (
            <Done
              style={{flex: 2, marginHorizontal: 0}}
              onPress={() => {
                onEmergencyPress(inputState.value, inputState.isValid);
              }}
            />
          ) : (
            <UnDone style={{flex: 2, marginHorizontal: 0}} />
          ))}
        {/* {passwordEyeContainer} */}
      </View>
      {/* {!inputState.isValid && inputState.touched && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{props.errorText}</Text>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {},
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    // paddingVertical: 12,
    // marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingHorizontal: 7,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: 5,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 1,
    elevation: 5,
    // borderRadius: 10,
    backgroundColor: 'white',
  },
  icon: {margin: 5, color: colors.black},
  // eyeIcon: { margin: 5, color: Colors.grey },
  textInput: {
    flex: 8,
    // marginTop: Platform.OS === 'ios' ? 0 : -5,
    // paddingLeft: 10,
    color: '#111111',
    // backgroundColor: 'red',
  },
  num_text: {
    textAlign: 'left',
    color: colors.white,
    letterSpacing: 0,
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 18,
    opacity: 1,
  },
  errorContainer: {
    marginTop: 10,
  },
  errorText: {
    // fontFamily: "open-sans",
    color: 'red',
    fontSize: 10,
  },
});

export default InputText;
