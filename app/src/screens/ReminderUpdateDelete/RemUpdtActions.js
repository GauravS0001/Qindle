import {SET_CATEGORY_AND_REMINDER_UPDATE} from '../../../src/screens/startup/types'

export const setCategoryAndReminderUpdate = (category, reminderId) => ({
    type: SET_CATEGORY_AND_REMINDER_UPDATE,
    payload: {
      category,
      reminderId,
    },
  });