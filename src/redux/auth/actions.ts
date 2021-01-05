import {
  AccountSetupAction,
  AuthActionEnum,
  ConfirmUserAction,
  LoginAction,
  LoginErrorAction,
  LoginSuccessAction,
  LogoutAction,
  User,
} from "./types";

export function login(email: string, password: string): LoginAction {
  return { type: AuthActionEnum.LOGIN, payload: { email, password } };
}

export function loginSuccess(user: User): LoginSuccessAction {
  return { type: AuthActionEnum.LOGIN_SUCCESS, payload: { user } };
}

export function loginError(error: Error): LoginErrorAction {
  return { type: AuthActionEnum.LOGIN_ERROR, error };
}

export function logout(): LogoutAction {
  return { type: AuthActionEnum.LOGOUT };
}

export function confirmUser(
  user: User
): ConfirmUserAction {
  return { type: AuthActionEnum.CONFIRM_USER, payload: { user } };
}

export function accountSetup(
  payload: AccountSetupAction["payload"]
): AccountSetupAction {
  return { type: AuthActionEnum.ACCOUNT_SETUP, payload };
}
