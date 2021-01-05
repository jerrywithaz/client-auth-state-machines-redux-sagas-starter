import configureStore from './configureStore';
import { initialState as authInitialState } from './auth/reducer';

const store = configureStore({ auth: authInitialState });

export default store;