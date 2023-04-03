<template>
  <div>
    {{ isLogin }}
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
  computed: {
    isLogin() {
      return this.$store.getters['user/isKakaoLogin']
    }
  },
  setup() {},
  created() {
    // if (!window.Kakao.Auth.getAccessToken()) {
    //   this.$router.push({ path: '/login/kakao' })
    // }
  },
  mounted() {
    console.log('access token', window.Kakao.Auth.getAccessToken())
  },
  unmounted() {},
  methods: {}
}
</script>
