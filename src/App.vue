<template>
  <div id="app">
    <template v-if="loading">
      <img src="./assets/loading.gif" alt="">
    </template>
    <template v-else>
      <Header/>
      <Followers v-if="hasUser"/>
      <Repos v-if="hasUser"/>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Header from './components/Header.vue';
import Followers from './components/Followers.vue';
import Repos from './components/Repos.vue';

export default {
  name: 'App',

  components: {
    Header,
    Followers,
    Repos,
  },

  computed: {
    ...mapGetters([
      'hasUser',
    ]),

    ...mapState([
      'loading',
    ]),
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
