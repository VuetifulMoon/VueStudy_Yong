<template>
  <div>
    <button :disabled="i===currentPage" v-for="i in totalPages" :key="i" @click="clickBtn(i)">{{ i }}</button>
  </div>
</template>

<script>
export default {
  name: 'PaginationBtn',

  computed: {
    totalPages() {
      return this.$store.getters['totalPages'];
    },
    currentPage() {
      return this.$store.state.news.currentPage;
    }
  },
  methods: {
    clickBtn(i) {
      this.$store.dispatch('fetchNews', {page: i});
    }
  }
}

</script>

<style>

</style>