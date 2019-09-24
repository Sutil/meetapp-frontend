import produce from 'immer';
import actionNames from "~/store/actionNames";

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
}

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch(action.type) {
      case actionNames.AUTH_SIGN_IN_REQUEST:{
        draft.loading = true
        break;
      }
      case actionNames.AUTH_SIGN_IN_SUCCESS:{
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case actionNames.AUTH_SIGN_FAILURE:{
        draft.signed = false;
        draft.loading = false;
        break;
      }
      case actionNames.AUTH_SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}

