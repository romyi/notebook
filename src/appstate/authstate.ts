import create from 'zustand';
import { AuthState } from './docs';

const useAuthStore = create<AuthState>((set) => ({
  authenticated: true,
  login() {
    set(() => ({ authenticated: true }));
  },
  logout() {
    set(() => ({ authenticated: false }));
  }
}));

export default useAuthStore;
