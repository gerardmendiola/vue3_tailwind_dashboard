import { createStore } from "vuex";

export default createStore({
  state: {
    theme: 'dark',

    navMenu: false,
    postList: [],
    commentList: [],

    selectedPost: {},
    isModalVisible: false
  },
  mutations: {
    UPDATE_THEME(state, payload) {
      state.theme = payload;
    },

    UPDATE_NAV_MENU(state, payload) {
      state.navMenu = payload;
    },
    GET_POST_LIST(state, payload) {
      state.postList = payload;
    },
    GET_POST_COMMENTS(state, payload) {
      state.commentList = payload;
    },
    UPDATE_SELECTED_POST(state, payload) {
      state.selectedPost = payload;
    },
    UPDATE_VISIBILITY(state, payload) {
      state.isModalVisible = payload;
    },
  },
  actions: {
    getPostList (context) {
      fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json()).then(data => {
        context.commit("GET_POST_LIST", data)
      })
    },
    getSpecificPost (context, id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(resp => resp.json()).then(data => {
        context.commit("GET_POST_COMMENTS", data)
      })
    },
    updateSelectedPost (context, payload) {
      context.commit("UPDATE_SELECTED_POST", payload.data)
      context.commit("UPDATE_VISIBILITY", payload.visibility)
    },
  }
});