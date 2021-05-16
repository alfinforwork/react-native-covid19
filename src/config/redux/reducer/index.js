import {COUNTER} from '../action/ActionType';

const initialState = {value: 0};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER:
      return {
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
}
