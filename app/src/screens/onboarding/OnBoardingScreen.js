import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  useRef,
} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import { DatePicker, Picker } from 'react-native-wheel-datepicker';

//import { Picker } from '@davidgovea/react-native-wheel-datepicker';

import colors from '../../../res/colors';
import BaseSafeAreaView from '../../components/UI/BaseSafeAreaView';
import Speaker from '../../../res/images/Speaker.svg';
import UnDone from '../../../res/images/UnDone.svg';
import Done from '../../../res/images/Done.svg';
import Arrow_Go_Ahead from '../../../res/images/Arrow_Go_Ahead.svg';
import images from '../../../res/images_url';
import * as types from '../startup/types';
import { useDispatch, useSelector } from 'react-redux';
import strings from '../../../res/strings';
import InterestBottomSheet from '../../components/bottomsheet/InterestBottomSheet';
import MedicalBottomSheet from '../../components/bottomsheet/MedicalBottomSheet';
import InputText from '../../components/UI/InputText';
import CommunityBottomSheet from '../../components/bottomsheet/CommunityBottomSheet';

const OnBoardingScreen = props => {
  const dispatch = useDispatch();

  const userDetails = useSelector(
    state => state.user,
  );
  const userOnboardingFullList = useSelector(
    state => state.onboarding,
  );
  const onboardingQuestionsList = useSelector(
    state => state.onboarding.onboardingQuestionsList,
  );
  const onboardingQuestionAnswerList = useSelector(
    state => state.onboarding.onboardingQuestionAnswerList,
  );
  const questionIdCount = useSelector(
    state => state.onboarding.questionIdCount,
  );
  const onboardingSelectedHobbies = useSelector(
    state => state.onboarding.onboardingSelectedHobbies,
  );
  const onboardingSelectedDiseases = useSelector(
    state => state.onboarding.onboardingSelectedDiseases,
  );
  const isOnboardingComplete = useSelector(
    state => state.onboarding.isOnboardingComplete,
  );
  const onboardingCommunity = useSelector(
    state => state.community.onboardingCommunity,
  );



  let FlatListRef = null; // add a member to hold the flatlist ref
  let refHobbiesBottomSheet = useRef(null);
  let refMedicalBottomSheet = useRef(null);
  let refCommunitiesBottomSheet = useRef(null);
  useEffect(() => {
    if (onboardingQuestionsList.length == 0) {
      let action = dispatch({
        type: types.ONBOARDING_GET_LATEST_REQUEST,
      });
    }
    //dispatch({
    //  type: types.ONBOARDING_UPDATE_USER_ANSWER_LIST,
    //  payload: userOnboardingFullList,
    //  userId: userDetails.userDetails._id
    //});

    const newArray = [];
    if (userDetails.userDetails.userOnboadingData != undefined && userDetails.userDetails.userOnboadingData.name != "") {

      if (userDetails.userDetails.userOnboadingData.name != "" && userDetails.userDetails.userOnboadingData.name.length > 0) {
        newArray.push(
          [
            { "_id": 1, "entity": "system", "value": "What is your name?" },
            { "_id": 1, "entity": "user", "value": userDetails.userDetails.userOnboadingData.name }
          ]
        )
      }

      if (userDetails.userDetails.userOnboadingData.dob != undefined && userDetails.userDetails.userOnboadingData.dob.length > 0) {
        newArray.push(
          [
            { "_id": 2, "entity": "system", "value": "What is your year of birth?" },
            { "_id": 2, "entity": "user", "value": userDetails.userDetails.userOnboadingData.dob }
          ]
        )
      }


      if (userDetails.userDetails.userOnboadingData.gender != undefined && userDetails.userDetails.userOnboadingData.gender.length > 0) {
        newArray.push(
          [
            { "_id": 3, "entity": "system", "value": "May i know your gender ?" },
            { "_id": 3, "entity": "user", "value": userDetails.userDetails.userOnboadingData.gender }
          ]
        )
      }


      if (userDetails.userDetails.userOnboadingData.cities[0] != undefined) {
        newArray.push(
          [
            { "_id": 4, "entity": "system", "value": "Where do you Live(City)?" },
            { "_id": 4, "entity": "user", "value": userDetails.userDetails.userOnboadingData.cities[0].name }
          ]
        )
      }

      if (userDetails.userDetails.userOnboadingData.interest_hobbies.length > 0) {
        let _interest = [];
        userDetails.userDetails.userOnboadingData.interest_hobbies.forEach(element => {
          _interest.push(element.name + " ");
        });
        newArray.push(
          [
            { "_id": 5, "entity": "system", "value": "what are your interests/ hobbies?" },
            { "_id": 5, "entity": "user", "value": "I have interests in " + _interest.join() }
          ]
        )
      }

      if (userDetails.userDetails.userOnboadingData.existing_medical_concerns.length > 0) {
        let _medical = [];
        userDetails.userDetails.userOnboadingData.existing_medical_concerns.forEach(element => {
          _medical.push(element.name + " ");
        });
        newArray.push(
          [
            { "_id": 6, "entity": "system", "value": "Do you have any existing medical concerns?" },
            { "_id": 6, "entity": "user", "value": "I have problem of " + _medical.join() }
          ]
        )
      }

      if (userDetails.userDetails.userOnboadingData.communities == "" && userDetails.userDetails.userOnboadingData.emergency_contact != "") { // user selected no communities
        newArray.push(
          [
            { "_id": 7, "entity": "system", "value": "Do you want to join communities?" },
            { "_id": 7, "entity": "user", "value": "I'm not interested to join communities" }
          ]
        )
      } else if (userDetails.userDetails.userOnboadingData.communities[0] != undefined) {
        let _com = [];
        userDetails.userDetails.userOnboadingData.communities.forEach(element => {
          _com.push(element.community_name + " ");
        });
        newArray.push(
          [
            { "_id": 7, "entity": "system", "value": "Do you want to join communities?" },
            { "_id": 7, "entity": "user", "value": "I'm interested to join " + _com.join() }
          ]
        )
      }



      if (userDetails.userDetails.userOnboadingData.emergency_contact != "") {
        newArray.push(
          [
            { "_id": 8, "entity": "system", "value": "Please provide emergency contact?" },
            { "_id": 8, "entity": "user", "value": userDetails.userDetails.userOnboadingData.emergency_contact }
          ]
        )
      }



      if (userDetails.userDetails.userOnboadingData.emergency_contact_relation != "") {
        newArray.push(
          [
            { "_id": 9, "entity": "system", "value": "Please provide emergency contact?" },
            { "_id": 9, "entity": "user", "value": userDetails.userDetails.userOnboadingData.emergency_contact_relation }
          ]
        )

        dispatch({
          type: types.ONBOARDING_COMPLETE,
          payload: { completed: true },
        });
      }
      /*
      */
      setTimeout(() => {
        let d, h, c = [];
        if (userDetails.userDetails.userOnboadingData != undefined) {
          d = userDetails.userDetails.userOnboadingData != undefined && userDetails.userDetails.userOnboadingData.existing_medical_concerns != undefined ? userDetails.userDetails.userOnboadingData.existing_medical_concerns : [];
          h = userDetails.userDetails.userOnboadingData.interest_hobbies != undefined ? userDetails.userDetails.userOnboadingData.interest_hobbies : [];
          c = userDetails.userDetails.userOnboadingData.communities != undefined ? userDetails.userDetails.userOnboadingData.communities : [];
        }

        dispatch({
          type: types.ONBOARDING_UPDATE_USER_FETCHED_LIST,
          payload: newArray,
          questionCount: newArray.length,
          onboardingSelectedDiseases: d,
          onboardingSelectedHobbies: h,
          onboardingSelectedCommunities: c
        });
      }, 4000);

    }
  }, []);

  // useEffect(() => {
  //   if (isOnboardingComplete) {
  //     props.navigation.navigate('OnBoardingSuccessScreen');
  //   }
  // }, [isOnboardingComplete]);

  const UPDATE_QUESTIONT_COUNT = 'UPDATE_QUESTIONT_COUNT';
  const UPDATE_CHATBOT_LIST = 'UPDATE_CHATBOT_LIST';
  const initialState = {
    inputValues: {
      name: '',
      birthYear: '',
      gender: '',
      city: '',
      hobbie: '',
      medical: '',
      community: '',
      emergency: '',
      emergency_person: '',
    },
    inputIds: {
      name: 'name',
      birthYear: 'birthYear',
      gender: 'gender',
      city: 'city',
      hobbie: 'hobbie',
      medical: 'medical',
      community: 'community',
      emergency: 'emergency',
      emergency_person: 'emergency_person',
    },
    inputValidities: {
      isNameValid: false,
      isBirthYearValid: false,
      isGenderValid: false,
      isCityValid: false,
      isHobbieValid: false,
      isMedicalValid: false,
      isCommunityValid: false,
      isEmergencyValid: false,
      isEmergencyPerson: false,
    },
    // formIsValid: false,
    currentQuestionNumber: questionIdCount,
  };

  const onboardingReducer = (state, action) => {
    if (action.type === UPDATE_QUESTIONT_COUNT) {
      let newState = {
        ...state,
        currentQuestionNumber: action.currentQuestionNumber,
      };
      return newState;
    }
    if (action.type === UPDATE_CHATBOT_LIST) {
      let newState = {
        ...state,
        inputValues: { ...state.inputValues, [action.id]: action.value },
        inputValidities: {
          ...state.inputValidities,
          [action.idValid]: action.idValidValue,
        },
      };
      return newState;
    }
    return state;
  };

  const [onboardingState, dispatchOnboardingState] = useReducer(
    onboardingReducer,
    initialState,
  );

  const calculate_age = dob => {
    // var diff_ms = Date.now() - dob.getTime();
    // var age_dt = new Date(diff_ms);

    // let age = Math.abs(age_dt.getUTCFullYear() - 1970);
    gotoNextQuestion(dob);
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidityIdentifier, inputValidity) => {

      let isValid = false;
      if (
        // inputIdentifier === 'name' &&
        inputValue != null &&
        inputValue.trim().length === 0
        // && inputValue.trim().length < 15
      ) {
        isValid = false;
      } else isValid = true;
      dispatchOnboardingState({
        type: UPDATE_CHATBOT_LIST,
        id: inputIdentifier,
        value: inputValue,
        idValid: inputValidityIdentifier,
        idValidValue: isValid,
      });
    },
    [dispatchOnboardingState],
  );

  const gotoNextQuestion = useCallback(input => {

    let d = onboardingQuestionsList[questionIdCount];
    let tempArray = [
      { _id: d._id, value: d.title, entity: 'system' },
      { _id: d._id, value: input, entity: 'user' },
    ];

    dispatch({
      type: types.ONBOARDING_UPDATE_QUESTION_ANSWER_LIST,
      payload: {
        data: tempArray,
        q_no: questionIdCount,
        allQuestionsAsked: false,
      },
    });
    /*
    setTimeout(() => { // should get called post newState update @tod remove timeout and check calback methods to do this
      dispatch({
        type: types.ONBOARDING_UPDATE_USER_ANSWER_LIST,
        payload: userOnboardingFullList,
        userId: userDetails.userDetails._id
      });
    }, 4000)
    */

  });

  const _triggerSave = useSelector(
    state => state.onboarding.triggerSave,
  );


  useEffect(() => {
    if (_triggerSave == true) {
      dispatch({
        type: types.ONBOARDING_UPDATE_USER_ANSWER_LIST,
        payload: userOnboardingFullList,
        userId: userDetails.userDetails._id
      });
    }
  }, [_triggerSave]);





  const onBirthValueChange = value => {
    inputChangeHandler(
      onboardingState.inputIds.birthYear,
      value,
      'isBirthYearValid',
    );
  };
  const onCitiesValueChange = value => {
    inputChangeHandler(onboardingState.inputIds.city, value, 'isCityValid');
  };

  const onContactPersonValueChange = value => {
    inputChangeHandler(
      onboardingState.inputIds.emergency_person,
      value,
      'isEmergencyPerson',
    );
  };

  /**** creating array from 1970 - 2010 (min, max) for age picker****/
  const ageData = (min, max) => {
    var minValue = min;
    var ageArray = new Array();
    for (let i = 0; i <= 40; i++) {
      ageArray[i] = minValue;
      minValue++;
    }
    return ageArray.map(String);
  };

  const renderItem = ({ item, index }) => {
    if (item.length == 1) {
      return (
        <View
          style={{
            ...styles.system_card_left,
            marginHorizontal: 20,
          }}>
          <Text style={{ ...styles.chat_left_text }}>{item[0].value}</Text>
        </View>
      );
    }
    if (item.length == 2) {
      return (
        <View style={{ marginHorizontal: 20 }}>
          <View style={styles.system_card_left}>
            <Text style={{ ...styles.chat_left_text }}>{item[0].value}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
            }}
            style={styles.system_card_right}>
            <Text style={{ ...styles.chat_left_text, color: '#111111' }}>
              {item[1].value}
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return null;
  };

  const Item = ({ item }) => (
    <View key={item[0]._id}>
      <View style={styles.system_card}>
        <Text style={{ ...styles.chat_left_text }}>{item[0].value}</Text>
      </View>
      {/* {item.length > 1 && ( */}
      <View style={styles.system_card}>
        <Text style={{ ...styles.chat_left_text }}>{item[0].value}</Text>
      </View>
      {/* )} */}
    </View>
  );

  const getCities = cities => {
    let newArray = cities.map(c => c.name);
    return newArray;
  };

  const getContactPerson = persons => {
    let newArray = persons.map(p => p.name);
    return newArray;
  };
  const onHobbiesSelected = hobbies => {
    let newArray;
    let str;
    if (hobbies.length == 0) {
      str = strings.dont_share;
    } else {
      newArray = hobbies.map(h => h.name);
      str = 'I have interests in ' + newArray.join(', ');
    }

    inputChangeHandler(onboardingState.inputIds.hobbie, str, 'isHobbieValid');

    dispatch({
      type: types.ONBOARDING_SELECTED_HOBBIES,
      payload: { hobbies: hobbies }, //onboardingState.currentQuestionNumber
    });

    dispatch({
      type: types.GET_COMMUNITY,
      payload: { ho: hobbies, di: onboardingSelectedDiseases },
    });

    gotoNextQuestion(str);
    refHobbiesBottomSheet.current.close();
  };

  const onDiseasesSelected = diseases => {
    let newArray;
    let str;
    if (diseases.length == 0) {
      str = strings.dont_share;
    } else {
      newArray = diseases.map(d => d.name);
      str = 'I have problem of ' + newArray.join(', ');
    }

    inputChangeHandler(onboardingState.inputIds.medical, str, 'isMedicalValid');

    dispatch({
      type: types.ONBOARDING_SELECTED_DIESES,
      payload: { diseases: diseases },
    });

    dispatch({
      type: types.GET_COMMUNITY,
      payload: { ho: onboardingSelectedHobbies, di: diseases },
    });


    gotoNextQuestion(str);
    refMedicalBottomSheet.current.close();
  };

  const onMedicalSelected = input => {

    inputChangeHandler(
      onboardingState.inputIds.medical,
      input,
      'isMedicalValid',
    );

    gotoNextQuestion(input);
  };

  const onCommunitiesSelect = communities => {
    // let hobbies_ids = onboardingSelectedHobbies.map(h => h._id);
    // let diseases_ids = onboardingSelectedDiseases.map(d => d._id);

    let newArray;
    let str;
    if (communities.length == 0) {
      str = strings.dont_join_community;
    } else {
      newArray = communities.map(d => d.name);
      str = "I'm interested to join " + newArray.join(', ');
    }

    inputChangeHandler(
      onboardingState.inputIds.community,
      str,
      'isCommunityValid',
    );

    dispatch({
      type: types.ONBOARDING_SELECTED_COMMUNITIES,
      payload: { communities: communities },
    });

    gotoNextQuestion(str);
    refCommunitiesBottomSheet.current.close();
  };

  const getCommunity = () => {
    return onboardingCommunity;
  };

  const onEmergencyPress = (value, isValid) => {
    inputChangeHandler(
      onboardingState.inputIds.emergency,
      value,
      'isEmergencyValid',
    );
    gotoNextQuestion(value);
  };

  const emergencyContactPersonOnPress = input => {
    inputChangeHandler(
      onboardingState.inputIds.emergency_person,
      input,
      'isEmergencyPerson',
    );

    let d = onboardingQuestionsList[questionIdCount];
    let tempArray = [
      { _id: d._id, value: d.title, entity: 'system' },
      { _id: d._id, value: input, entity: 'user' },
    ];
    dispatch({
      type: types.ONBOARDING_UPDATE_QUESTION_ANSWER_LIST,
      payload: {
        data: tempArray,
        q_no: questionIdCount,
        allQuestionsAsked: true,
      },
    });

    /*
    setTimeout(() => { // should get called post newState update @tod remove timeout and check calback methods to do this
      dispatch({
        type: types.ONBOARDING_UPDATE_USER_ANSWER_LIST,
        payload: userOnboardingFullList,
        userId: userDetails.userDetails._id
      });
    }, 4000)
    */







    // props.navigation.navigate('OnBoardingSuccessScreen');
    // dispatch({
    //   type: types.ONBOARDING_COMPLETE,
    //   payload: {completed: true},
    // });
  };

  // useEffect(() => {

  //   const backAction = () => {
  //     if (questionIdCount == 1) {
  //       Alert.alert('Hold on!', 'Are you sure you want to go back?', [
  //         {
  //           text: 'Cancel',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {text: 'YES', onPress: () => BackHandler.exitApp()},
  //       ]);
  //       return true;
  //     } else {
  //       let action = dispatch({
  //         type: types.ONBOARDING_BACK,
  //       });
  //       return null;
  //     }
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, [questionIdCount]);

  return (
    <BaseSafeAreaView>
      <View style={{ flex: 1, backgroundColor: '#106EAA' }}>
        <View style={{
          ...styles.asara_skip_container,
          //backgroundColor: 'green',
          flex: 1,
        }}>
          <View style={{ ...styles.asara_speaker_container, paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.skip_text}>{strings.app_name}</Text>
              <View style={styles.online_icon}></View>
            </View>

            <Speaker style={{ marginLeft: 25 }} />
            {/* <Online /> */}
          </View>
          {/* <TouchableOpacity
            style={{ padding: 15 }}
            onPress={() => {
              // let action = dispatch({
              //   type: types.ONBOARDING_RESET_LIST,
              // });
              // dispatch({
              //   type: types.ONBOARDING_COMPLETE,
              //   payload: {completed: false},
              // });
              dispatch({
                type: types.ONBOARDING_SKIP,
                payload: { skip: true },
              });
              dispatch({
                type: types.ONBOARDING_COMPLETE,
                payload: { completed: true },
              });
            }}>
            <Text style={styles.skip_text}>Skip</Text>
          </TouchableOpacity> */}
        </View>
        <View
          style={{
            alignItems: 'center',
            // backgroundColor: 'red',//
            flex: 2,
          }}>
          <Image source={images.girl} style={{ width: 250, height: 115 }} />
        </View>
        <View style={{
          ...styles.list_container,
          //backgroundColor: 'blue',
          flex: 4,
        }}>
          <FlatList
            ref={ref => (FlatListRef = ref)} // assign the flatlist's ref to your component's FlatListRef...
            onContentSizeChange={() => {
              if (onboardingQuestionAnswerList.length > 1)
                FlatListRef.scrollToEnd();
            }} // scroll it
            data={onboardingQuestionAnswerList}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{
          ...styles.question_container,
          //backgroundColor: 'green',
          flex: 4,
          marginBottom: 10
        }}>
          <View
            style={{
              ...styles.system_card_left,
              maxWidth: '90%',
            }}>
            <Text style={{ ...styles.chat_left_text }}>
              {onboardingQuestionsList.length > 0
                ? onboardingQuestionsList[questionIdCount].title
                : ''}
            </Text>
          </View>
          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'fulltext' && (
              <View style={styles.fulltext}>
                <TextInput
                  style={styles.textinput_container}
                  onChangeText={text =>
                    inputChangeHandler(
                      onboardingState.inputIds.name,
                      text,
                      'isNameValid',
                    )
                  }
                  value={onboardingState.inputValues.name}
                  // value={
                  //   onboardingQuestionAnswerList[
                  //     onboardingState.currentQuestionNumber
                  //   ][1].value != null
                  //     ? onboardingQuestionAnswerList[
                  //         onboardingState.currentQuestionNumber
                  //       ][1].value
                  //     : onboardingState.inputValues.name
                  // }
                  placeholder={strings.fullname}
                />

                {onboardingState.inputValidities.isNameValid ? (
                  <Done
                    style={styles.arrow_validation}
                    onPress={() => {
                      gotoNextQuestion(onboardingState.inputValues.name);
                    }}
                  />
                ) : (
                  <UnDone style={styles.arrow_validation} />
                )}
              </View>
            )}

          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'year' && (
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.fulltext}>
                  <TextInput
                    style={styles.textinput_container}
                    onChangeText={text =>
                      inputChangeHandler(
                        onboardingState.inputIds.birthYear,
                        text,
                        'isBirthYearValid',
                      )
                    }
                    keyboardType="number-pad"
                    value={onboardingState.inputValues.birthYear.toString()}
                    placeholder={strings.select_year}
                    // editable={false}
                    placeholderTextColor={'#88B7D5'}
                  />

                  {onboardingState.inputValidities.isBirthYearValid ? (
                    <Done
                      style={styles.arrow_validation}
                      onPress={() => {
                        calculate_age(
                          onboardingState.inputValues.birthYear,
                          // new Date(onboardingState.inputValues.birthYear, 1, 1),
                        );
                      }}
                    />
                  ) : (
                    <UnDone style={styles.arrow_validation} />
                  )}
                </View>
                <Picker
                  //textColor={colors.picker_value}
                  textSize={20}
                  itemSpace={30}
                  // style={{backgroundColor: '#FAFAFA'}}
                  // selectedValue={onboardingState.inputValues.birthYear.toString()}
                  pickerData={ageData(1931, 1971)}
                  // onboardingQuestionsList[questionIdCount].min or max
                  onValueChange={onBirthValueChange}
                />
              </View>
            )}
          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'gender' && (
              <View style={{ flexDirection: 'row' }}>
                <FlatList
                  data={onboardingQuestionsList[questionIdCount].options}
                  horizontal={true}
                  keyExtractor={item => item._id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={itemData => (
                    <TouchableOpacity
                      onPress={() => {
                        gotoNextQuestion(itemData.item.name);
                      }}
                      style={{
                        ...styles.system_card,
                        borderColor: colors.white,
                        borderWidth: 1,
                        backgroundColor:
                          itemData.item.name ==
                            onboardingState.inputValues.gender
                            ? colors.white
                            : '#055F9B',
                      }}>
                      <Text
                        style={{
                          ...styles.chat_left_text,
                          color:
                            itemData.item.name ==
                              onboardingState.inputValues.gender
                              ? '#106EAA'
                              : colors.white,
                        }}>
                        {itemData.item.name}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            )}

          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'city' && (
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.fulltext}>
                  <TextInput
                    style={styles.textinput_container}
                    onChangeText={text =>
                      inputChangeHandler(
                        onboardingState.inputIds.city,
                        text,
                        'isCity',
                      )
                    }
                    value={onboardingState.inputValues.city}
                    placeholder={strings.select_city}
                    // editable={false}
                    placeholderTextColor={'#88B7D5'}
                  />

                  {onboardingState.inputValidities.isCityValid ? (
                    <Done
                      style={styles.arrow_validation}
                      onPress={() => {
                        gotoNextQuestion(onboardingState.inputValues.city);
                      }}
                    />
                  ) : (
                    <UnDone style={styles.arrow_validation} />
                  )}
                </View>
                <Picker
                  //textColor={colors.picker_value}
                  textSize={18}
                  itemSpace={30}
                  pickerData={getCities(
                    onboardingQuestionsList[questionIdCount].options,
                  )}
                  onValueChange={onCitiesValueChange}
                />
              </View>
            )}
          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'hobbie' && (
              // <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={() => refHobbiesBottomSheet.current.open()}
                style={{
                  ...styles.system_card,
                  ...styles.hobbies_card,
                }}>
                <TextInput
                  style={styles.tap_here_container}
                  value={strings.tap_here}
                  editable={false}
                />
                <Arrow_Go_Ahead style={styles.arrow_validation} />
              </TouchableOpacity>
              // </View>
            )}
          {onboardingQuestionsList.length > 0 && (
            <InterestBottomSheet
              rbHobbiesSheetRef={refHobbiesBottomSheet}
              hobbies_options={onboardingQuestionsList[questionIdCount].options}
              onSelectedHobbies={onHobbiesSelected}
            />
          )}

          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'medical' && (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => {
                    refMedicalBottomSheet.current.open();
                  }}
                  style={{
                    ...styles.system_card,
                    borderColor: colors.white,
                    borderWidth: 1,
                    backgroundColor:
                      onboardingState.inputValues.medical === strings.yes
                        ? colors.white
                        : '#055F9B',
                  }}>
                  <Text
                    style={{
                      ...styles.chat_left_text,
                      color:
                        onboardingState.inputValues.medical === strings.yes
                          ? '#106EAA'
                          : colors.white,
                    }}>
                    {strings.yes}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    onMedicalSelected(strings.no);
                  }}
                  style={{
                    ...styles.system_card,
                    borderColor: colors.white,
                    borderWidth: 1,
                    backgroundColor:
                      onboardingState.inputValues.medical === strings.no
                        ? colors.white
                        : '#055F9B',
                  }}>
                  <Text
                    style={{
                      ...styles.chat_left_text,
                      color:
                        onboardingState.inputValues.medical === strings.no
                          ? '#106EAA'
                          : colors.white,
                    }}>
                    {strings.no}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

          {onboardingQuestionsList.length > 0 && (
            <MedicalBottomSheet
              rbMedicalSheetRef={refMedicalBottomSheet}
              diseases_options={
                onboardingQuestionsList[questionIdCount].options
              }
              onSelectedDiseases={onDiseasesSelected}
            />
          )}
          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'callback' && (
              // <View style={{flexDirection: 'column'}}>
              <TouchableOpacity
                onPress={() => refCommunitiesBottomSheet.current.open()}
                style={{
                  ...styles.system_card,
                  ...styles.hobbies_card,
                }}>
                <TextInput
                  style={styles.tap_here_container}
                  value={strings.tap_here}
                  editable={false}
                />
                <Arrow_Go_Ahead style={{ flex: 2, marginHorizontal: 0 }} />
              </TouchableOpacity>
              // </View>
            )}

          {onboardingQuestionsList.length > 0 && (
            <CommunityBottomSheet
              rbCommunitySheetRef={refCommunitiesBottomSheet}
              communities_options={getCommunity()}
              onSelectedCommunities={onCommunitiesSelect}
            />
          )}

          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type === 'emergency' && (
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
                onInputChange={() => { }}
                // onInputChange={() => {}}
                initialValue=""
                // inputRef={mobile_ref}
                onSubmit={event => { }}
                onEmergencyPress={onEmergencyPress}
                isEmergency={true}
              />
            )}

          {onboardingQuestionsList.length > 0 &&
            onboardingQuestionsList[questionIdCount].type ===
            'emergency_person' && (
              <View style={{ flexDirection: 'column' }}>
                <View style={styles.fulltext}>
                  <TextInput
                    style={styles.textinput_container}
                    onChangeText={text =>
                      inputChangeHandler(
                        onboardingState.inputIds.emergency_person,
                        text,
                        'isEmergencyPerson',
                      )
                    }
                    value={onboardingState.inputValues.emergency_person}
                    placeholder={strings.select_person}
                    editable={false}
                    placeholderTextColor={'#88B7D5'}
                  />

                  {onboardingState.inputValidities.isEmergencyPerson ? (
                    <Done
                      style={styles.arrow_validation}
                      onPress={() => {
                        emergencyContactPersonOnPress(
                          onboardingState.inputValues.emergency_person,
                        );
                      }}
                    />
                  ) : (
                    <UnDone style={styles.arrow_validation} />
                  )}
                </View>
                <Picker
                  //textColor={colors.picker_value}
                  textSize={20}
                  itemSpace={30}
                  // selectedValue={onboardingState.inputValues.birthYear.toString()}
                  pickerData={getContactPerson(
                    onboardingQuestionsList[questionIdCount].options,
                  )}
                  onValueChange={onContactPersonValueChange}
                />
              </View>
            )}
        </View>
      </View>


      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          dispatch({
            type: types.ONBOARDING_SKIP,
            payload: { skip: true },
          });
          dispatch({
            type: types.ONBOARDING_COMPLETE,
            payload: { completed: true },
          });
        }}>
          <Text style={{ color: 'white', fontWeight: "bold" }}>Skip</Text>
        </TouchableOpacity>
      </View>


    </BaseSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 100
  },
  button: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  asara_skip_container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  asara_speaker_container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  skip_text: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 19,
  },
  online_icon: {
    width: 10,
    height: 10,
    backgroundColor: '#0EC92D',
    borderColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
    margin: 2,
  },
  list_container: {
    marginTop: 10,
    flex: 1,
  },
  system_card: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
  },
  chat_left_text: {
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.white,
    fontSize: 16,
    opacity: 1,
    letterSpacing: 0,
    lineHeight: 24,
    margin: 10,
  },
  hobbies_card: {
    backgroundColor: '#055F9B',
    borderColor: colors.white,
    borderWidth: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  system_card_left: {
    backgroundColor: '#03203A',
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  system_card_right: {
    borderRadius: 10,
    margin: 5,
    flexDirection: 'column',
    maxWidth: '80%',
    alignSelf: 'flex-end',
    backgroundColor: colors.white,
  },
  question_container: {
    marginHorizontal: 20,
    flex: 5,
  },
  fulltext: {
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow_validation: { flex: 2, marginHorizontal: 0 },
  textinput_container: { marginLeft: 0, flex: 8 },
  tap_here_container: {
    marginLeft: 0,
    flex: 8,
    color: colors.white,
  },
});

export default OnBoardingScreen;
