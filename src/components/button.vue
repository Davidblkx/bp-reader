<template>
  <div class="btn" @click="emitCLick()">
    <FIcon v-if="hasIcon" :icon="icon"></FIcon>
    <span v-if="hasText" class="text">{{text}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const Props = Vue.extend({
  props: {
    icon: String,
    text: String,
  },
});

@Component({})
export default class Button extends Props {
  get hasIcon() {
    return typeof this.icon === 'string';
  }
  get hasText() {
    return typeof this.text === 'string';
  }

  public emitCLick() {
    this.$emit('click');
  }
}
</script>

<style lang="scss" scoped>
.btn {
  user-select: none;
  cursor: pointer;
}
</style>
