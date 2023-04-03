<template>
  <div>
    <div id="naverIdLogin">
      <a id="naverIdLogin_loginButton" href="#" role="button"
        ><img src="https://static.nid.naver.com/oauth/big_g.PNG" width="320"
      /></a>
    </div>
    <button class="btn btn-danger" @click="naverLogout($event)">
      로그아웃
    </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      email: '',
      naverLogin: null
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.naverLogin = new window.naver.LoginWithNaverId({
      clientId: 'aaiqLtDt9WeEHl5ZSpgi',
      callbackUrl: 'http://localhost:8080/login/naver',
      isPopup: true,
      loginButton: { color: 'green', type: 3, height: 60 }
    })
    /* (4) 네아로 로그인 정보를 초기화하기 위하여 init을 호출 */
    this.naverLogin.init()

    /* (4-1) 임의의 링크를 설정해줄 필요가 있는 경우 */
    // $("#gnbLogin").attr("href", naverLogin.generateAuthorizeUrl());

    /* (5) 현재 로그인 상태를 확인 */
    this.naverLogin.getLoginStatus((status) => {
      if (status) {
        /* (6) 로그인 상태가 "true" 인 경우 로그인 버튼을 없애고 사용자 정보를 출력합니다. */
        // setLoginStatus();
        console.log(this.naverLogin.user.getEmail())
        console.log(this.naverLogin.user.getNickName())
        console.log(this.naverLogin.user.getGender())
        this.email = this.naverLogin.user.getEmail()
      }
    })
  },
  unmounted() {},
  methods: {
    naverLogout(event) {
      event.preventDefault()
      this.naverLogin.logout()
    }
  }
}
</script>
