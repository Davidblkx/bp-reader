<template>
  <Button
    :icon="icon"
    @click="toggleTheme()"
  ></Button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Button from './button.vue';
import { config } from '../store';
import { IconName } from '@fortawesome/fontawesome-svg-core';

@Component({
  components: { Button },
})
export default class ThemeToggler extends Vue {
  public toggleTheme() {
    config.toggleTheme();
  }

  public get icon(): IconName {
    return config.state.theme === 'dark' ? 'sun' : 'moon';
  }
}
</script>
