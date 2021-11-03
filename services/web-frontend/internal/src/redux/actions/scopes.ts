import { Dispatch } from 'redux';
import { dispatcher } from './utils';
import { Client, VERB_GET } from 'client';
import { REQUEST_SCOPES, REQUEST_SCOPES_ERROR, RECEIVE_SCOPES } from '../constants';

// Note: If these are ever used again move to `types` directory
interface scopes {
  isFetching: boolean;
  didInvalidate: boolean;
  list: string[];
}

interface IState {
  scops: scopes;
}

interface IResp {
  type: string;
  list: string[];
}

function shouldFetchScopes(state: IState) {
  const { scopes } = state;
  if (!scopes || !Object.keys(scopes).length) {
    return true;
  }
  if (scopes.isFetching) {
    return false;
  }
  return scopes.didInvalidate;
}

function requestScopes() {
  return {
    type: REQUEST_SCOPES,
  };
}

function requestScopesError(error: string) {
  return {
    type: REQUEST_SCOPES_ERROR,
    error,
  };
}

function receiveScopes(resp: IResp) {
  return {
    type: RECEIVE_SCOPES,
    scopes: resp.list,
  };
}

export function fetchScopesIfNeeded(client: Client) {
  // TODO: The type of getState depends on the shape of the store object
  //  using "any" is a bit lazy
  return (dispatch: Dispatch, getState: any): void => {
    if (shouldFetchScopes(getState())) {
      // Dispatch action for request
      dispatch(requestScopes());
      client.request(
        VERB_GET,
        'v1/scopes',
        {},
        {},
        dispatcher(dispatch, receiveScopes),
        dispatcher(dispatch, requestScopesError),
      );
    }
  };
}
