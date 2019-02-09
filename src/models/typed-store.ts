import { Store } from 'vuex';

import { StoreState } from './store-state';

export interface TypedStore extends Store<StoreState> {}
