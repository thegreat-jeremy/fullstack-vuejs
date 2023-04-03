<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" @keyup="plusNumber" />
      <span>+</span>
      <input type="text" v-model.number="num2" @keyup="plusNumber" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
    <br />
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumber2" />
      <span>+</span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumber2" />
      <span>=</span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue'
export default {
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0
      //   result: 0
    }
  },
  computed: {
    result() {
      return this.num1 + this.num2
    }
  },
  // Composition API
  // 컴포지션 API
  setup() {
    const state = reactive({
      // 실시간 변경사항에 대한 반응형
      num1: 0,
      num2: 0,
      result: 0
    })

    // const n = reactive(5);

    function plusNumber2() {
      state.result = state.num1 + state.num2
    }

    return {
      state,
      plusNumber2
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    plusNumber() {
      //   this.result = this.num1 + this.num2
    }
  }
}
</script>
