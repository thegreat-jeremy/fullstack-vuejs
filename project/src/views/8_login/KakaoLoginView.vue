<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin">
      <img
        src="//k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
        width="222"
        alt="카카오 로그인 버튼"
      />
    </a>
    <button class="btn btn-danger" @click="kakaoLogout">카카오 로그아웃</button>
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
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender',
        success: this.getKakaoAccount,
        fail: function (err) {
          alert(JSON.stringify(err))
        }
      })
    },
    getKakaoAccount(authObj) {
      console.log(authObj)
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakao_account
          console.log('kakaoAccount', kakaoAccount)
          const nickname = kakaoAccount.profile.nickname
          const email = kakaoAccount.email
          const gender = kakaoAccount.gender

          console.log('nickname', nickname)
          console.log('email', email)
          console.log('gender', gender)

          //   this.$store.commit('user/setUserInfo', {
          //       nickname: nickname,
          //       email: email,
          //       gender: gender
          //   })

          this.$router.push({ path: '/login/main' })
        }
      })
    },
    kakaoLogout() {
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log('로그인 하지 않았습니다.')
        return
      }

      window.Kakao.Auth.logout((res) => {
        // 로그아웃
        console.log('access token', window.Kakao.Auth.getAccessToken())
        console.log('logout', res)
      })
    }
  }
}
</script>
