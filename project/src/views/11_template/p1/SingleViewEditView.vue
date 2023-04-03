<template>
  <div class="mt-3">
    <div class="row mb-3">
      <label for="selectCustomer" class="col-sm-2 col-form-label"
        >Customer</label
      >
      <div class="col-sm-10">
        <select
          class="form-select"
          id="selectCustomer"
          v-model="selectedCustomerId"
          @change="getCustomer"
        >
          <option value="">==Select Customer==</option>
          <option
            :value="customer.id"
            :key="customer.id"
            v-for="customer in customers"
          >
            {{ customer.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerName" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="customerName"
          v-model="customer.name"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerCompany" class="col-sm-2 col-form-label"
        >Company</label
      >
      <div class="col-sm-10">
        <input
          type="text"
          class="form-control"
          id="customerCompany"
          v-model="customer.company"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input
          type="email"
          class="form-control"
          id="customerEmail"
          v-model="customer.email"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerPhone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        <input
          type="tel"
          class="form-control"
          id="customerPhone"
          v-model="customer.phone"
          :disabled="!editMode"
        />
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerAddress" class="col-sm-2 col-form-label"
        >Address</label
      >
      <div class="col-sm-10">
        <!-- <input
          type="text"
          class="form-control"
          id="customerAddress"
          v-model="customer.address"
          :disabled="!editMode"
        /> -->
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="우편번호"
            aria-label="우편번호"
            aria-describedby="postcode"
            v-model="customer.zonecode"
            readonly
          />
          <button
            class="btn btn-outline-secondary"
            id="postcode"
            @click="openPostcode"
            :disabled="!editMode"
          >
            검색
          </button>
        </div>
        <input
          type="text"
          class="form-control"
          v-model="customer.roadAddress"
          placeholder="주소"
          readonly
        />
        <input
          type="text"
          class="form-control"
          v-model="customer.detailAddress"
          placeholder="상세주소"
        />
      </div>
    </div>

    <button
      class="btn btn-primary me-1"
      @click="editMode = true"
      v-show="!editMode"
      :disabled="selectedCustomerId === ''"
    >
      Edit
    </button>
    <button
      class="btn btn-secondary me-1"
      v-show="editMode"
      @click="editMode = false"
    >
      Cancel
    </button>
    <button class="btn btn-danger" v-show="editMode" @click="doSave">
      Save
    </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCustomerId: '',
      customers: [],
      customer: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        zonecode: '',
        roadAddress: '',
        detailAddress: ''
      },
      editMode: false
    }
  },
  setup() {},
  created() {
    this.getCustomerList()
    if (!window.daum) {
      this.loadScript()
    }
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getCustomerList() {
      this.customers = await this.$get('/customers')
    },
    async getCustomer() {
      this.editMode = false
      if (this.selectedCustomerId === '') {
        this.customer = {
          name: '',
          company: '',
          email: '',
          phone: '',
          address: ''
        }
      } else {
        const loader = this.$loading.show()
        this.customer = await this.$get(`/customers/${this.selectedCustomerId}`)
        loader.hide()
      }
    },
    async doSave() {
      if (this.customer.name === '') {
        return this.$swal(
          'Name을 입력하세요',
          'Name은 필수 입력값입니다',
          'info'
        )
      }

      if (this.customer.company === '') {
        return this.$swal(
          'Company을 입력하세요',
          'Company은 필수 입력값입니다',
          'info'
        )
      }

      if (this.customer.email === '') {
        return this.$swal(
          'Email을 입력하세요',
          'Email은 필수 입력값입니다',
          'info'
        )
      }

      if (this.customer.phone === '') {
        return this.$swal(
          'Phone을 입력하세요',
          'Phone은 필수 입력값입니다',
          'info'
        )
      }

      if (this.customer.zonecode === '') {
        return this.$swal(
          'Address을 입력하세요',
          'Address은 필수 입력값입니다',
          'info'
        )
      }

      // 정규식 - 이메일, 전화번호 체크 로직 추가
      const regexpTel = /^010-\d{4}-\d{4}$/
      const regexpEmail =
        /^([a-z]+\d*)+(\.?[a-z]+\d*)+@([a-z]+\d*)+(\.[a-z]{2,3})+$/

      if (!regexpTel.test(this.customer.phone)) {
        return this.$swal(
          'Phone을 올바른 형식으로 입력하세요',
          '010-0000-0000 과 같은 형식입니다',
          'info'
        )
      }

      if (!regexpEmail.test(this.customer.email)) {
        return this.$swal(
          'Email을 올바른 형식으로 입력하세요',
          '이메일은 @를 포함해야합니다',
          'info'
        )
      }

      this.$swal({
        title: '고객 정보를 저장 하시겠습니까?',
        // text: '삭제된 데이터는 복구할 수 없습니다!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '저장',
        cancelButtonText: '취소'
      }).then(async (result) => {
        if (result.isConfirmed) {
          // 저장 로직 구현
          const loader = this.$loading.show()

          this.customer.address =
            `(${this.customer.zonecode}) ${this.customer.roadAddress} ${this.customer.detailAddress}`.trim()

          const r = await this.$put(
            `/customers/${this.selectedCustomerId}`,
            this.customer
          )

          loader.hide()

          if (r.status === 200) {
            this.$swal(
              '저장 되었습니다.',
              '고객 정보가 수정 되었습니다',
              'success'
            )
            this.editMode = false
          }
        }
      })
    },
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
          this.customer.zonecode = data.zonecode
          this.customer.roadAddress = data.roadAddress
        }
      }).open()
    }
  }
}
</script>
