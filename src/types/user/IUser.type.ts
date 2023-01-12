export interface IUser {
  isLoading: boolean;
  isLoggedIn: boolean;
  username: string;
  token: string;
  role: string;
  authenticationError: string;
}
