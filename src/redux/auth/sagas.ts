import { all } from "redux-saga/effects";

/** The root saga for the authentication state. Initializes all of the authentication sagas */
function* authSagas() {
  yield all([]);
}

export default authSagas;
