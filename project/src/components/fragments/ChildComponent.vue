<template>
  <div>
    <p>{{ str }}</p>
    <p>{{ str2 }}</p>
    <p>{{ num }}</p>
    <p>{{ isOk }}</p>
    <p>{{ arr }}</p>
    <p>{{ obj }}</p>
    <select name="" id="" @change="callParent" v-model="selectedNum">
      <option :value="num" :key="num" v-for="num in arr">{{ num }}</option>
    </select>
    <button @click="callParent">부모로 데이터 전달</button>
  </div>
</template>
<script>
export default {
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: function () {
        return []
      }
    },
    obj: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      selectedNum: 1,
      str2: 'Jeju'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    callParent() {
      this.$emit('change-num', this.selectedNum)
    },
    printMessage() {
      console.log('printMessage')
    }
  }
}
</script>
