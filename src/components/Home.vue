<template>
  <div>User info {{ userData }}</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',

  computed: {
    ...mapState([
      'user',
      'userData',
    ]),
  },

  created() {
    this.getUserData();
  },

  methods: {
    ...mapActions([
      'getUserData',
    ]),
  },
};
</script>

<style>

</style>
