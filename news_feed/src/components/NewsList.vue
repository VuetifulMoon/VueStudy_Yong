<template>
  <div>
    <NewsItem v-for="item in $store.state.news.news" :key="item.title" :item="item"/>
  </div>
</template>

<script>
import NewsItem from './NewsItem.vue';
export default {
  components: {
    NewsItem
  }
}
</script>

<style>

</style>