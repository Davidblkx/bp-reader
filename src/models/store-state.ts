import { Theme } from './themes';

export interface StoreState {
  theme: Theme;
}

export enum StoreMutations {
  toogleTheme = 'toogleTheme',
}
