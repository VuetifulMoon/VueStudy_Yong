<template>
  <div>
    <span>제목: {{ item.title }}</span>
    <span>저자: {{ item.author }}</span>
    <hr>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style>

</style>