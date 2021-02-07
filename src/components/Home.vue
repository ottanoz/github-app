<template>
  <div>User info</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',

  computed: {
    ...mapState([
      'user',
    ]),
  },
};
</script>

<style>

</style>
