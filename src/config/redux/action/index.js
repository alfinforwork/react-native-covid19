import {COUNTER} from './ActionType';

export const counterAction = (text) => {
  return {
    type: COUNTER,
    // payload: text,
  };
};
