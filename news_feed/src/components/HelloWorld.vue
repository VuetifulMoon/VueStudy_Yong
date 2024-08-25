<template>
  <div>
    <select v-model="country">
      <option value="us">us</option>
      <option value="kr">kr</option>
      <option value="jp">jp</option>
      <option value="cn">cn</option>
    </select>
    <select v-model="category">
      <option value="general">general</option>
      <option value="technology">technology</option>
      <option value="sports">sports</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      country: 'us',
      category: 'general'
    }
  },
  watch: {
    country: function() {
      this.$store.dispatch('fetchNews', {country: this.country});
    },
    category:function() {
      this.$store.dispatch('fetchNews', {category: this.category});
    },
  },
  created() {
    this.$store.dispatch('fetchNews', {country: this.country, category: this.category});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
