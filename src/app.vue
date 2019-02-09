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

@Component({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {
  get theme() {
    return this.$store.state.theme;
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
  height: 100%;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app {
  width: 100%;
  max-width: 1024px;
  height: 100%;
  min-height: 100%;
}
</style>
