import { ref, computed, toRefs } from 'vue'

function plusNumber2() {
  const state = ref({
    // 실시간 변경사항에 대한 반응형
    num1: 0,
    num2: 0,
    result: computed(() => state.value.num1 + state.value.num2)
  })

  return toRefs(state.value) // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서 toRefs를 사용해야함
}

export { plusNumber2 }
