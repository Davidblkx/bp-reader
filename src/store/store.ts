import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { getStoreBuilder } from 'vuex-typex';

import { RootState } from '@/models';

Vue.use(Vuex);
export const store: Store<RootState> = getStoreBuilder<RootState>().vuexStore();
