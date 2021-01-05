import { State } from "xstate";

/** An Enum of all of the available action types for the auth reducer */
export enum AuthActionEnum {
  LOGIN = "auth/LOGIN",
  LOGIN_SUCCESS = "auth/LOGIN_SUCCESS",
  LOGIN_ERROR = "auth/LOGIN_ERROR",
  LOGOUT = "auth/LOGOUT",
  ACCOUNT_SETUP = "auth/ACCOUNT_SETUP",
  CONFIRM_USER = "auth/CONFIRM_USER",
}

export type User = {
  email: string;
  firstName: string;
  lastName: string;
  confirmed: boolean;
};

export type LoginAction = {
  type: AuthActionEnum.LOGIN;
  payload: {
    email: string;
    password: string;
  };
};

export type LoginSuccessAction = {
  type: AuthActionEnum.LOGIN_SUCCESS;
  payload: {
    user: User;
  };
};

export type LoginErrorAction = {
  type: AuthActionEnum.LOGIN_ERROR;
  error: Error;
};

export type AccountSetupAction = {
  type: AuthActionEnum.ACCOUNT_SETUP;
  payload: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
  };
};

export type ConfirmUserAction = {
  type: AuthActionEnum.CONFIRM_USER;
  payload: {
    user: User;
  };
};

export type LogoutAction = {
  type: AuthActionEnum.LOGOUT;
};

/** All valid auth states. */
export type AuthStateStatus = "signIn" | "signedIn" | "accountSetup";

/** All of the available actions that the auth reducer should respond to. */
export type AuthActions =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | LogoutAction
  | AccountSetupAction
  | ConfirmUserAction;

/** The type definition for the local context/state of the auth machine. */
export type AuthMachineContext = {
  user: User | null;
  error: Error | null;
  loading: boolean;
};

/** The actual state node that will be stored on the redux store. */
export type AuthState = State<AuthMachineContext, AuthActions>;
