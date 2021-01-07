<template>
  <div>
    <h1>Joke Detail</h1>
    <nuxt-link to="/jokes">Back to Joke List</nuxt-link>
    <h2>{{ jokeDetail.joke }}</h2>
    <hr />
    <small>Joke ID : {{ idJoke }}</small>
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data() {
    return {
      idJoke: '',
      jokeDetail: {},
      axiosConfig: {},
    };
  },
  head() {
    return {
      title: 'Joke Detail',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aplikasi yang menggunakan Jokes API',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'special-meta',
          name: 'title-content',
          content: 'Contoh meta tags dengan nama title content',
        },
      ],
    };
  },
  created() {
    this.axiosConfig = {
      headers: {
        Accept: 'application/json',
      },
    };
  },
  mounted() {
    this.getDataRouter();
    this.getDataJokeDetail();
  },
  methods: {
    getDataRouter() {
      this.idJoke = this.$route.params.id;
    },
    async getDataJokeDetail() {
      // Ambil detail joke
      try {
        const response = await this.$axios.$get(
          `https://icanhazdadjoke.com/j/${this.idJoke}`,
          this.axiosConfig
        );
        this.jokeDetail = {
          id: response.id,
          joke: response.joke,
        };
      } catch (err) {
        this.jokeDetail = {
          id: '0',
          joke: 'Tidak tersedia',
        };
      }
    },
  },
};
</script>

<style></style>
