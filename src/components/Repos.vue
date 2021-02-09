<template>
  <div class="repos">
    <h2>Repositories</h2>
    <div class="list-group">
      <a
        v-for="(repo, index) in getUserRepos"
        :key="index"
        href="#"
        class="list-group-item list-group-item-action"
        aria-current="true"
      >
        <div class="d-flex w-100 justify-content-between repo-title">
          <h5 class="mb-1">{{ repo.name }}</h5>
        </div>
        <p class="mb-1" v-for="(value, key, i) in repo" :key="i"><b>{{ key }}:</b> {{ value }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Repos',

  computed: {
    ...mapGetters(['getUserRepos']),
  },
};
</script>

<style scoped>
.repos {
  margin-top: 60px;
}
.repos > .list-group {
  text-align: left;
}
.repo-title {
  margin-bottom: 16px;
}
</style>
