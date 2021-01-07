<template>
  <div>
    <h2>Selamat Datang ke Jokes API</h2>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Welcome Jokes API',
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
