<template>
  <div>
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      const loader = this.$loading.show()
      // simulate AJAX
      setTimeout(() => {
        loader.hide()
      }, 5000)
    }
  }
}
</script>
