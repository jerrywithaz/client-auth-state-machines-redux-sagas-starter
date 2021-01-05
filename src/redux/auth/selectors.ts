import { createSelector } from "reselect";
import { ApplicationOutputSelector, ApplicationRootState } from "../../types";
import { AuthState, AuthStateStatus, User } from "./types";

const selectAuth = (state: ApplicationRootState): AuthState => state.auth;

export const selectAuthStatus: ApplicationOutputSelector<
  AuthStateStatus,
  (res: AuthState) => AuthStateStatus
> = createSelector(
  selectAuth,
  (authState) => authState.value as AuthStateStatus
);

export const selectAuthUser: ApplicationOutputSelector<
  User | null,
  (res: AuthState) => User | null
> = createSelector(selectAuth, (authState) => authState.context.user);
