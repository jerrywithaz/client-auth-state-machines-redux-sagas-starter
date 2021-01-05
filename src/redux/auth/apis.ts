import { AccountSetupAction, User } from "./types";

export async function loginApi(email: string, password: string): Promise<User> {
  if (password === 'password') {
    return Promise.resolve({
      email,
      firstName: 'Zerry',
      lastName: 'Hogan',
      confirmed: Math.random() < 0.5,
    });
  }

  throw new Error('Invalid username or password');
  
}

export async function logoutApi(): Promise<void> {
  return Promise.resolve();
}

export async function accountSetupApi(payload: AccountSetupAction['payload']): Promise<User> {
  if (payload) {
    return Promise.resolve({
      email: payload.email,
      firstName: payload.firstName,
      lastName: payload.lastName,
      confirmed: true,
    });
  }

  throw new Error('Please fill out all fields.');
  
}