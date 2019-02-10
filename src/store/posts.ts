import { firestore } from 'firebase';
import { getStoreBuilder } from 'vuex-typex';

import { initFirebase } from '@/firebase';
import { Post, PostsStates, RootState } from '@/models';

const initialState: PostsStates = {
  posts: [],
};

const builder = getStoreBuilder<RootState>().module('posts', initialState);

// ======================== MUTATIONS =============================
async function loadPosts(state: PostsStates) {
  try {
    await initFirebase();
    const db = firestore().collection('bp-posts');
    const items = await db.orderBy('date', 'desc').limit(50).get();
    items.forEach(e => state.posts.push(<Post> e.data()));
  } catch (err) {
    console.error('err', err);
  }
}
// ======================== MUTATIONS =============================


export const posts = {
  get state() { return builder.state()(); },

  loadPosts: builder.commit(loadPosts),
};

export function getPostById(id: string) {
  return posts.state.posts.find(e => e.id === id);
}
