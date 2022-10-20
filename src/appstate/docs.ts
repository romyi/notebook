export interface AuthState {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

export interface UiState {
  theme: 'dark' | 'light';
}
