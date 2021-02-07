<template>
  <div>
    <ul>
      <li v-for="user in getUserFollowers" :key="user.login">
        <span @click="setGithubUser(user.login)">{{ user.login }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Followers',

  computed: {
    ...mapGetters([
      'getUserFollowers',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchUserData',
    ]),

    setGithubUser(userName) {
      this.fetchUserData(userName);
    },
  },
};
</script>

<style></style>
