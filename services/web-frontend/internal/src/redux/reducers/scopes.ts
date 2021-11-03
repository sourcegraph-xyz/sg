import { REQUEST_SCOPES, REQUEST_SCOPES_ERROR, RECEIVE_SCOPES } from '../constants';

// TODO: type checking for action? Or too generic for type-checking?
export const initialState = {};
export const scopes = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_SCOPES:
      return {
        ...state,
        ...{ scopes: { isFetching: true } },
      };
    case REQUEST_SCOPES_ERROR:
      return {
        ...state,
        ...{ scopes: { isFetching: false } },
      };
    case RECEIVE_SCOPES:
      return {
        ...state,
        ...{ scopes: { isFetching: false, list: action.scopes } },
      };
    default:
      return state;
  }
};
