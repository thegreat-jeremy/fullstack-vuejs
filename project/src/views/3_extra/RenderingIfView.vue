<template>
  <div>
    <div v-if="userRole === 'G'">
      <button>조회</button>
    </div>
    <div v-else-if="userRole === 'M'">
      <button>조회</button>
      <button>생성</button>
    </div>
    <div v-else>
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>

    <!-- <div v-if="userRole === 'A'">
      <button>조회</button>
      <button>생성</button>
      <button>삭제</button>
    </div>
    <div v-else-if="userRole === 'M'">
      <button>조회</button>
      <button>생성</button>
    </div>
    <div v-else>
      <button>조회</button>
    </div> -->
    <!-- <button v-if="userRole === 'A' || userRole === 'M' || userRole === 'G'">
      조회
    </button>
    <button v-if="userRole === 'A' || userRole === 'M'">생성</button>
    <button v-if="userRole === 'A'">삭제</button> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'M' // A(Admin) - 관리자, M(Manager) - 매니저, G(General) - 일반사용자
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
