<template>
  <div class="post-container">
    <PostItem
      v-for="(item, index) in list"
      :key="index"
      :post="item"
    ></PostItem>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostItem from '../components/post.vue';
import { posts } from '../store';

@Component({
  components: { PostItem },
})
export default class Home extends Vue {
  get list() {
    return posts.state.posts;
  }

  public loadPosts() {
    posts.loadPosts();
  }

  public mounted() {
    this.loadPosts();
  }
}
</script>

<style lang="scss" scoped>
.post-container {
  overflow-y: auto;
}
</style>

