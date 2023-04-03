<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" />
      <span>+</span>
      <input type="text" v-model.number="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>
<script>
// import { ref, computed, toRefs } from 'vue'

// function plusNumber2() {
//   const state = ref({
//     // 실시간 변경사항에 대한 반응형
//     num1: 0,
//     num2: 0,
//     result: computed(() => state.value.num1 + state.value.num2)
//   })

//   return toRefs(state.value) // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서 toRefs를 사용해야함
// }

import { plusNumber2 } from '@/api/common'

export default {
  components: {},
  data() {
    return {
      //   num1: 0,
      //   num2: 0
      //   result: 0
    }
  },
  //   computed: {
  //     result() {
  //       return this.num1 + this.num2
  //     }
  //   },
  // Composition API
  // 컴포지션 API
  setup() {
    const { num1, num2, result } = plusNumber2() // 외부 function
    return {
      num1,
      num2,
      result
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
