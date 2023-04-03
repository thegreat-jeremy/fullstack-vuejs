<template>
  <h3>{{ title }}</h3>
</template>
<script>
export default {
  name: 'PageTitle',
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 제목'
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
