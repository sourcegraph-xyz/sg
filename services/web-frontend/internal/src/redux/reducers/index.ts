import { combineReducers } from 'redux';
import { silos } from './silos';
import { scopes } from './scopes';

// Export all reducers in combined reducer object
export default combineReducers({
  silos,
  scopes,
});
