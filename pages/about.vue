<template>
  <div>
    <h1>About Jokes API</h1>
    <p>Aplikasi dengan penggunaan Jokes API</p>
  </div>
</template>
<script>
export default {
  head() {
    // Untuk membuat meta tag dari SEO
    return {
      title: 'About Jokes API',
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
};
</script>
<style></style>
