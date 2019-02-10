<template>
  <div class="container" :class="[theme]" >
    <div id="app">
      <NavBar />
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import NavBar from '@/components/nav-bar.vue';
import { config } from './store';

@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {
  get theme() {
    return config.state.theme;
  }
}
</script>

<style lang="scss">
@import 'sass/main';
body, html {
  font-family: $wf__font--default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  min-height: 100%;
}

.container {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

#app {
  width: 100%;
  max-width: 1024px;
  min-height: 100%;
}
</style>
