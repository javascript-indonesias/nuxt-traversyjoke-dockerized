<template>
  <div class="joke" @click="navigateDetailJoke()">
    <p>{{ joke }}</p>
  </div>
</template>

<script>
export default {
  name: 'JokeItem',
  props: {
    id: {
      type: String,
      default: '0',
    },
    joke: {
      type: String,
      default: 'Tidak tersedia',
    },
  },
  methods: {
    navigateDetailJoke() {
      // Navigasi ke halaman joke dengan dynamic route
      this.$router.push({ path: `/jokes/${this.id}` });
    },
  },
};
</script>

<style lang="css">
.joke {
  padding: 1rem;
  border: 1px dotted #ccc;
  margin: 1rem 0;
}
</style>
