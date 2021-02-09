import Vue from 'vue';
import Vuex from 'vuex';
import service from './service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    userData: {},
    userFollowers: [],
    userRepos: [],
    loading: false,
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
    setUserRepos(state, data) {
      // eslint-disable-next-line no-param-reassign
      state.userRepos = data;
    },
    setLoading(state, flag) {
      // eslint-disable-next-line no-param-reassign
      state.loading = flag;
    },
  },
  actions: {
    async fetchUserData({ state, commit, dispatch }, userName) {
      commit('setLoading', true);
      commit('setUser', userName);
      try {
        const { data } = await service.fetchUserData(state.user);
        commit('setUserData', data);
        await dispatch('fetchUserFollowers');
        await dispatch('fetchUserRepos');
      } catch (e) {
        throw new Error(e);
      } finally {
        commit('setLoading', false);
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
    async fetchUserRepos({ state, commit }) {
      try {
        const { data } = await service.fetchUserRepos(state.user);
        commit('setUserRepos', data);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
  getters: {
    hasUser: (state) => state.user !== '',
    getUserFollowers: (state) => state.userFollowers || [],
    getUserRepos: (state) => state.userRepos || [],
  },
});
