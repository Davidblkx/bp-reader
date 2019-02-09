import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { StoreMutations, StoreState } from './models';

Vue.use(Vuex);

export const storeState: StoreState = {
  theme: 'light',
};

export default new Vuex.Store(<StoreOptions<StoreState>> {
  state: { ...storeState },
  mutations: {
    [StoreMutations.toogleTheme](state: StoreState) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
  actions: {},
});
