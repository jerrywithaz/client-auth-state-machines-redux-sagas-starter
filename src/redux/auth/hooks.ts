import { useSelector } from "react-redux";
import { selectAuthStatus, selectAuthUser } from "./selectors";

export function useAuthStatus() {
  return useSelector(selectAuthStatus);
}

export function useAuthUser() {
  return useSelector(selectAuthUser);
}