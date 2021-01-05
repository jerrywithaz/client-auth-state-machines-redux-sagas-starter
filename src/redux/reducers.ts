import { combineReducers } from "redux";

import authReducer from "./auth/reducer";

/**
 * Merges the auth reducer and the dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    auth: authReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
