<template>
  <div>
    <provide-inject />
  </div>
</template>
<script>
import ProvideInject from '@/components/fragments/ProvideInject.vue'
export default {
  components: { ProvideInject },
  provide() {
    return {
      size: 5,
      str: this.sampleData
    }
  },
  data() {
    return {
      sampleData: 'AAA'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
