export const state = () => ({
  posts: [],
  post: [],
});

export const getters = {
  getPosts(state) {
    return state.posts;
  },
  getPost(state) {
    return state.post;
  },
};

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPost(state, post) {
    state.post = post;
  },
};

export const actions = {
  async fetchPosts({ commit }) {
    try {
      await this.$axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          commit("setPosts", response.data);
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
  async fetchPost({ commit },id) {
    try {
      await this.$axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          commit("setPost", response.data);
        });
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
};
