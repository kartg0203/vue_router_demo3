<template>
  <div>id：{{ $route.params.id }}</div>
  <h4>computed回來的id：{{ pageid }}</h4>
</template>

<script>
export default {
  name: "MyPage",
  computed: {
    pageid() {
      return this.$route.params.id;
    },
  },
};
</script>

<style>
</style>
