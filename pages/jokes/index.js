// Cara lain membuat komponen di Vue JS
// https://vuejs.org/v2/guide/single-file-components.html#What-About-Separation-of-Concerns
import JokeItem from '../../components/JokeItem';
import SearchJoke from '../../components/SearchJoke';

export default {
  components: {
    JokeItem,
    SearchJoke,
  },
  data() {
    return {
      listJokes: [],
      axiosConfig: {},
      searchKeyJoke: '',
    };
  },
  head() {
    // Untuk membuat meta tag dari SEO
    return {
      title: 'List Jokes',
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
    this.getDataJokes();
  },
  methods: {
    async getSearchTextJoke(searchkey) {
      this.searchKeyJoke = searchkey;
      try {
        const response = await this.$axios.$get(
          `https://icanhazdadjoke.com/search?term=${this.searchKeyJoke}`,
          this.axiosConfig
        );

        this.listJokes = response.results;
      } catch (err) {
        this.listJokes = [];
      }
    },
    async getDataJokes() {
      try {
        const response = await this.$axios.$get(
          'https://icanhazdadjoke.com/search',
          this.axiosConfig
        );

        this.listJokes = response.results;
      } catch (err) {
        this.listJokes = [];
      }
    },
  },
};
