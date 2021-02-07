import Vue from 'vue';
import Vuex from 'vuex';
import service from './service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    userData: {},
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
  },
  actions: {
    async getUserData({ state, commit }) {
      try {
        const { data } = await service.fetchUserData(state.user);
        commit('setUserData', data);
      } catch (e) {
        throw new Error(e);
      }
    },
  },
});
