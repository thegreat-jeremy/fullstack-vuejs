import { createStore } from 'vuex'

// Vuex는 모든 컴포넌트를 위한 중앙 집중식 저장소를 제공해 준다.
// 중앙 저장소에 저장된 데이터는 쉽게 바꿀 수 있는게 아니고,
// 특정 함수(mutations, actions)를 통해서만 데이터 변경이 가능하고,
// 변경 상태를 관리할 수 있다.

export default createStore({
  // 중앙 데이터 저장소
  state() {
    return {
      todos: [
        { id: 1, title: 'todo 1', done: true },
        { id: 2, title: 'todo 2', done: false },
        { id: 3, title: 'todo 3', done: false }
      ]
    }
  },
  // Store를 위한 computed라고 생각하면 됨.
  getters: {
    todosCount(state) {
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  // 상태(state)를 변경시킬 수 있는 유일한 방법(함수)
  mutations: {
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    doneYN(state, doneStatus) {
      state.todos.filter((todo) => todo.id === doneStatus.id)[0].done =
        doneStatus.done
    }
  },
  // mutations 하고 비슷한데,
  // actions에 정의된 함수에서는 결국은 mutations에 정의한 함수를 커밋(commit)시켜서 state를 변경
  // 비동기 처리가 가능
  actions: {
    add({ commit }, item) {
      // const {commit, state} = context
      // context.commit, context.state

      // 서버랑 통신. fetch, axios
      commit('add', item)
    }
    // add2: async ({ commit }, item) => {
    //   await fetch('', {})
    // }
  },
  modules: {}
})
