import { createStore } from 'vuex'
import { todo } from './todo'
import { user } from './user'
import persistedstate from 'vuex-persistedstate'

// Vuex는 모든 컴포넌트를 위한 중앙 집중식 저장소를 제공해 준다.
// 중앙 저장소에 저장된 데이터는 쉽게 바꿀 수 있는게 아니고,
// 특정 함수(mutations, actions)를 통해서만 데이터 변경이 가능하고,
// 변경 상태를 관리할 수 있다.

export default createStore({
  modules: {
    todo: todo,
    user: user
  },
  plugins: [persistedstate({ paths: ['todo.todos'] })]
})
