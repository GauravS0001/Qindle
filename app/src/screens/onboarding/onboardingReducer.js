import { act } from 'react-test-renderer';
import strings from '../../../res/strings';
import createReducer from '../../lib/createReducer';
import * as types from '../startup/types';

const initialState = {
  onboardingQuestionsList: [],
  // [
  //   {_id: 0, value: strings.asara_chat_text, entity: 'system'},
  // ],
  onboardingQuestionAnswerList: [
    [{ _id: 0, value: strings.asara_chat_text, entity: 'system' }],
  ],
  onboardingSelectedHobbies: [],
  onboardingSelectedDiseases: [],
  onboardingSelectedCommunities: [],
  questionIdCount: 1,
  isOnboardingComplete: false,
  allQuestionsAsked: false,
  isOnboardingSkipped: false,
  triggerSave: false
};

const onboardinReducer = createReducer(initialState, {

  [types.ONBOARDING_UPDATE_USER_FETCHED_LIST](state, action) {

    action.payload = [
      state.onboardingQuestionAnswerList[0],
      ...action.payload
    ]

    let newState = {
      ...state,
      onboardingQuestionAnswerList: action.payload,
      questionIdCount: action.questionCount + 1,
      allQuestionsAsked: action.questionCount + 1 == 10 ? true : false,
      onboardingSelectedDiseases: action.onboardingSelectedDiseases,
      onboardingSelectedHobbies: action.onboardingSelectedHobbies,
      onboardingSelectedCommunities: action.onboardingSelectedCommunities
    };

    return newState;

  },


  [types.ONBOARDING_GET_LATEST_RESPONSE](state, action) {
    let a = {
      ...state,
      onboardingQuestionsList: action.response,
      // onboardingQuestionsList: [
      //   {_id: 0, value: strings.asara_chat_text, entity: 'system'},
      //   ...state.onboardingQuestionsList,
      // ],
    };
    let newState = {
      ...a,
      onboardingQuestionsList: [
        { _id: 0, value: strings.asara_chat_text, entity: 'system' },
        ...a.onboardingQuestionsList,
        /* {
           _id: 9,
           title: 'Who is your emergency contact person?',
           type: 'emergency_person',
           options: [
             {
               _id: 1,
               name: 'Daughter',
             },
             {
               _id: 2,
               name: 'Son',
             },
             {
               _id: 3,
               name: 'Brother',
             },
           ],
         },
         */
      ],
    };
    return newState;
  },

  [types.ONBOARDING_TRIGGER_SAVE](state, action) {
    let newState = {
      ...state,
      triggerSave: false
    };
    return newState;
  },
  
  [types.ONBOARDING_UPDATE_QUESTION_ANSWER_LIST](state, action) {
    const newArray = [...state.onboardingQuestionAnswerList];
    newArray[action.payload.q_no] = action.payload.data;
    // const idCount = action.payload.allQuestionsAsked ? (state.questionIdCount) : (action.payload.q_no + 1)
    let newState = {
      ...state,
      onboardingQuestionAnswerList: newArray,
      // questionIdCount: action.payload.q_no + 1, // increase question count
      questionIdCount: action.payload.allQuestionsAsked
        ? state.questionIdCount
        : action.payload.q_no + 1,
      allQuestionsAsked: action.payload.allQuestionsAsked,
      triggerSave: true
      // onboardingQuestionAnswerList: [
      //   [{_id: 0, value: strings.asara_chat_text, entity: 'system'}],
      // ],
    };
    return newState;
  },

  [types.ONBOARDING_RESET_LIST](state, action) {
    let newState = {
      // onboardingQuestionsList: [...state.onboardingQuestionsList],
      ...state,
      onboardingQuestionAnswerList: [
        [{ _id: 0, value: strings.asara_chat_text, entity: 'system' }],
      ],
      questionIdCount: 1,
      questionIdCount: 1,
      isOnboardingComplete: false,
      allQuestionsAsked: false,
      isOnboardingSkipped: false,
    };
    return newState;
  },

  [types.ONBOARDING_SELECTED_HOBBIES](state, action) {
    let newState = {
      ...state,
      onboardingSelectedHobbies: action.payload.hobbies,
    };
    return newState;
  },

  [types.ONBOARDING_SELECTED_DIESES](state, action) {
    let newState = {
      ...state,
      onboardingSelectedDiseases: action.payload.diseases,
    };
    return newState;
  },

  [types.ONBOARDING_SELECTED_COMMUNITIES](state, action) {
    let newState = {
      ...state,
      onboardingSelectedCommunities: action.payload.communities,
    };
    return newState;
  },

  [types.ONBOARDING_BACK](state, action) {
    let newState = {
      ...state,
      questionIdCount: state.questionIdCount - 1,
    };
    return newState;
  },

  [types.ONBOARDING_COMPLETE](state, action) {
    let newState = {
      ...state,
      isOnboardingComplete: action.payload.completed,
    };
    return newState;
  },

  [types.ONBOARDING_SKIP](state, action) {
    let newState = {
      ...state,
      isOnboardingSkipped: action.payload.skip,
    };
    return newState;
  },
});

export default onboardinReducer;
