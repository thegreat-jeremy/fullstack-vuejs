<template>
  <div class="row">
    <div class="col-lg-3 col-md-5">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="우편번호"
          aria-label="우편번호"
          aria-describedby="postcode"
          v-model="zonecode"
          readonly
        />
        <button
          class="btn btn-outline-secondary"
          id="postcode"
          @click="openPostcode"
        >
          검색
        </button>
      </div>
    </div>
    <div class="col-12">
      <input
        type="text"
        class="form-control"
        v-model="roadAddress"
        placeholder="주소"
        readonly
      />
      <input
        type="text"
        class="form-control"
        v-model="detailAddress"
        placeholder="상세주소"
      />
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      zonecode: '',
      roadAddress: '',
      detailAddress: ''
    }
  },
  setup() {},
  created() {
    if (!window.daum) {
      this.loadScript()
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    loadScript() {
      const script = document.createElement('script')
      script.src =
        '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
      document.head.appendChild(script)
    },
    openPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
          // 예제를 참고하여 다양한 활용법을 확인해 보세요.
          console.log(data)
          this.zonecode = data.zonecode
          this.roadAddress = data.roadAddress
        }
      }).open()
    }

    // 카카오페이
    // https://developers.kakao.com/docs/latest/ko/kakaopay/common
    // https://developers.kakao.com/docs/latest/ko/kakaopay/ready
    // https://developers.kakao.com/docs/latest/ko/kakaopay/approve
    // https://developers.kakao.com/docs/latest/ko/kakaopay/cancel
    // https://developers.kakao.com/docs/latest/ko/kakaopay/ready-vbank
    // https://developers.kakao.com/docs/latest/ko/kakaopay/approve-vbank
    // https://developers.kakao.com/docs/latest/ko/kakaopay/ready-escrow
    // https://developers.kakao.com/docs/latest/ko/kakaopay/approve-escrow
  }
}
</script>
