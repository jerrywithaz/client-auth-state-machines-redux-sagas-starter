import { Reducer, Store } from 'redux';
import { Saga } from 'redux-saga';
import { SagaInjectionModes } from 'redux-injectors';
import { AuthState } from './redux/auth/types';
import { OutputSelector } from 'reselect';

export interface InjectedStore extends Store {
  injectedReducers: any;
  injectedSagas: any;
  runSaga(saga: Saga<any[]> | undefined, args: any | undefined): any;
}

export interface InjectReducerParams {
  key: keyof ApplicationRootState;
  reducer: Reducer<any, any>;
}

export interface InjectSagaParams {
  key: keyof ApplicationRootState;
  saga: Saga;
  mode?: SagaInjectionModes;
}

// Your root reducer type, which is your redux state types also
export interface ApplicationRootState {
  readonly auth: AuthState;
  // for testing purposes
  readonly test: any;
}

export type ApplicationOutputSelector<R, C> = OutputSelector<
    ApplicationRootState,
    R,
    C
>;