<template>
  <div class="followers">
    <h2>Followers</h2>
    <div class="list-group">
      <a
        v-for="user in getUserFollowers" :key="user.login"
        @click="setGithubUser(user.login)"
        href="#"
        class="list-group-item list-group-item-action"
      >{{ user.login }}</a>
    </div>
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

<style>
.followers {
  margin-top: 20px;
}
</style>
