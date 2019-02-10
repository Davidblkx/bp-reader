import { Theme } from './themes';

export interface RootState {
  config: ConfigState;
}

export interface ConfigState {
  theme: Theme;
}
