<template>
    <nav class="bp-nav-bar">
        <div class="brand">Brainpickings PWA</div>
        <div class="menu"></div>
    </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue {}
</script>

<style lang="scss">
@import '../sass/main';

.bp-nav-bar {
    height: 30px;
    background-color: color(primary);
    color: color(grey-2);

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