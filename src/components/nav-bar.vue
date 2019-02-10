<template>
  <nav class="bp-nav-bar">
    <div class="brand">Brainpickings PWA</div>
    <div class="menu">
      <ThemeToggler></ThemeToggler>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import ThemeToggler from './theme-toggler.vue';

@Component({
  components: { ThemeToggler },
})
export default class NavBar extends Vue {}
</script>

<style lang="scss">
@import "../sass/main";

.bp-nav-bar {
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .brand {
    display: flex;
    padding: 0 5px;
    height: 100%;
    justify-content: left;
    align-items: center;
    font-weight: 800;
  }

  .menu {
    display: flex;
    padding: 0 15px;
    height: 100%;
    justify-content: left;
    align-items: center;
  }
}
</style>