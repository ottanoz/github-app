<template>
  <div id="app">
    <Header/>
    <Followers v-if="hasUser"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header.vue';
import Followers from './components/Followers.vue';

export default {
  name: 'App',

  components: {
    Header,
    Followers,
  },

  computed: {
    ...mapGetters([
      'hasUser',
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
