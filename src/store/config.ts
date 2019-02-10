import { BareActionContext, getStoreBuilder } from 'vuex-typex';

import { ConfigState, RootState, Theme } from '@/models';

const initialState: ConfigState = {
  theme: 'dark',
};

const builder = getStoreBuilder<RootState>().module('config', initialState);

// ======================== MUTATIONS =============================
function setTheme(state: ConfigState, paylod: {theme: Theme}) {
  state.theme = paylod.theme;
}
// ======================== MUTATIONS =============================

// ========================= ACTIONS ==============================
function toogleTheme({ state }: BareActionContext<ConfigState, RootState>) {
  const theme: Theme = state.theme === 'dark' ? 'light' : 'dark';
  config.setTheme({theme});
}
// ========================= ACTIONS ==============================

const stateGetter = builder.state();

export const config = {
  get state() { return stateGetter(); },

  setTheme: builder.commit(setTheme),

  toggleTheme: builder.dispatch(toogleTheme),
};
