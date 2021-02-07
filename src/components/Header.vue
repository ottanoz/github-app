<template>
  <header>
    <div class="row">
      <div class="avatar col-2">
        <img
          v-show="hasUser"
          :src="userData.avatar_url"
          class="img-thumbnail rounded float-start"
          alt="User Avatar"
        />
      </div>
      <div class="col">
        <h1>
          Welcome<span v-if="hasUser">, {{ userData.name }}</span>
        </h1>
        <div v-if="!hasUser" class="user-form">
          <form @submit="setGithubUser()">
            <div class="input-group mb-3">
              <input
                type="text"
                name="githubUser"
                id="githubUser"
                v-model.trim="githubUser"
                class="form-control"
                placeholder="GitHub Username"
              />
              <button class="btn btn-primary" type="submit">Go!</button>
            </div>
          </form>
        </div>
      </div>
      <div class="avatar col-2">
        <a v-show="hasUser" :href="userData.html_url" target="_blank">Go to GitHub!</a>
      </div>
    </div>
  </header>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Home',

  data() {
    return {
      githubUser: '',
    };
  },

  computed: {
    ...mapState(['user', 'userData']),
    ...mapGetters([
      'hasUser',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchUserData',
    ]),

    setGithubUser() {
      this.fetchUserData(this.githubUser);
    },
  },
};
</script>

<style scoped>
header {
  padding: 40px;
  text-align: center;
  margin: 0 auto;
}

.avatar > img {
  width: 200px;
}

.user-form {
  margin: 0 auto;
  margin-top: 20px;
  width: 400px;
}

.btn-primary {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
