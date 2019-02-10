<template>
  <div class="post">
    <div class="title">{{post.title}}</div>
    <div class="subtitle">{{post.subtitle}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { posts } from '../store';
import { Post } from '../models';

const Props = Vue.extend({
  props: {
    post: Object,
  },
});

@Component({})
export default class PostItem extends Props {}
</script>

<style lang="scss">
.post {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  padding: 5px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;

  .title {
    font-size: 1rem;
  }

  .subtitle {
    font-size: 0.8rem;
    text-overflow: ellipsis;
  }
}
</style>

