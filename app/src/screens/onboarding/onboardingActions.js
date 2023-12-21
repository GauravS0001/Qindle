/*
 * Reducer actions related with onboarding
 */
import * as types from '../startup/types';

export function onboardingGetLatest(response) {
  return {
    type: types.ONBOARDING_GET_LATEST_RESPONSE,
    response,
    // errorResponse: response,
  };
}

export function triggerSave(response) {
  return {
    type: types.ONBOARDING_TRIGGER_SAVE,
    response,
    // errorResponse: response,
  };
}
