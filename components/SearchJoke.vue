<template>
  <div>
    <form action="" @submit.prevent="searchJokeData()">
      <input
        id="textSearch"
        v-model="searchKey"
        type="text"
        name="text"
        placeholder="Search Joke..."
      />
      <input type="submit" value="Search Jokes" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchJoke',
  data() {
    return {
      searchKey: '',
    };
  },
  methods: {
    searchJokeData() {
      // Kirim data kata kunci pencarian ke parent component
      if (this.searchKey && this.searchKey.length > 2) {
        this.$emit('onSearchSubmit', this.searchKey);
        this.searchKey = '';
      }
    },
  },
};
</script>

<style lang="scss"></style>
