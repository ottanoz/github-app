import Vue from 'vue';
import Vuex from 'vuex';
import service from './service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    userData: {},
    userFollowers: {},
  },
  mutations: {
    setUser(state, user) {
      // eslint-disable-next-line no-param-reassign
      state.user = user;
    },
    setUserData(state, data) {
      // eslint-disable-next-line no-param-reassign
      state.userData = data;
    },
    setUserFollowers(state, data) {
      // eslint-disable-next-line no-param-reassign
      state.userFollowers = data;
    },
  },
  actions: {
    async fetchUserData({ state, commit, dispatch }, userName) {
      commit('setUser', userName);
      try {
        const { data } = await service.fetchUserData(state.user);
        commit('setUserData', data);
        dispatch('fetchUserFollowers');
      } catch (e) {
        throw new Error(e);
      }
    },
    async fetchUserFollowers({ state, commit }) {
      try {
        const { data } = await service.fetchUserFollowers(state.user);
        commit('setUserFollowers', data);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  getters: {
    getUserFollowers: (state) => state.userFollowers || [],
    hasUser: (state) => state.user !== '',
  },
});
