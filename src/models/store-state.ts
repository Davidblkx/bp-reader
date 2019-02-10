import { Post } from './post';
import { Theme } from './themes';

export interface RootState {
  config: ConfigState;
}

export interface ConfigState {
  theme: Theme;
}

export interface PostsStates {
  posts: Post[];
}
