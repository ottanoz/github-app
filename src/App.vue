<template>
  <div id="app">
    Welcome,
    <div v-if="!hasUser">
      <form @submit="setGithubUser()">
        <input type="text" name="githubUser" id="githubUser" v-model.trim="githubUser">
        <button type="submit">Go!</button>
      </form>
    </div>
    <div v-else>
      {{ user }}
    </div>
    <Home v-if="hasUser"/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Home from './components/Home.vue';

export default {
  name: 'App',

  components: {
    Home,
  },

  data() {
    return {
      githubUser: '',
    };
  },

  computed: {
    ...mapState([
      'user',
    ]),

    hasUser() {
      return this.user !== '';
    },
  },

  methods: {
    ...mapMutations([
      'setUser',
    ]),

    setGithubUser() {
      this.setUser(this.githubUser);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
