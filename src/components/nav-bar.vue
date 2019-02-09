<template>
  <nav class="bp-nav-bar">
    <div class="brand">Brainpickings PWA</div>
    <div class="menu">
      <a href="#" @click="toogleTheme()">theme</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Payload } from 'vuex';
import { StoreMutations } from '@/models';

@Component({})
export default class NavBar extends Vue {
  public toogleTheme() {
    this.$store.commit(StoreMutations.toogleTheme);
  }
}
</script>

<style lang="scss">
@import "../sass/main";

.bp-nav-bar {
  height: 30px;
  display: flex;
  flex-direction: row;

  .brand {
    display: flex;
    padding: 0 5px;
    height: 100%;
    justify-content: left;
    align-items: center;
    font-weight: 800;
  }
}
</style>