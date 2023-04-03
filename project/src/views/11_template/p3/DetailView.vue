<template>
  <div class="mt-3">
    <div class="row mb-3">
      <label for="customerName" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        {{ customer.name }}
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerCompany" class="col-sm-2 col-form-label"
        >Company</label
      >
      <div class="col-sm-10">
        {{ customer.company }}
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerEmail" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        {{ customer.email }}
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerPhone" class="col-sm-2 col-form-label">Phone</label>
      <div class="col-sm-10">
        {{ customer.phone }}
      </div>
    </div>
    <div class="row mb-3">
      <label for="customerAddress" class="col-sm-2 col-form-label"
        >Address</label
      >
      <div class="col-sm-10">
        {{ customer.address }}
      </div>
    </div>
    <button class="btn btn-secondary me-1" @click="goToList">List</button>
    <button class="btn btn-primary" @click="goToEdit">Edit</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      id: '',
      customer: {
        name: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  },
  setup() {},
  created() {
    // console.log(this.$route.query.id)
    this.id = this.$route.query.id
    // console.log(this.$route.params)
    // this.id = this.$route.params.id
  },
  mounted() {
    this.getCustomer()
  },
  unmounted() {},
  methods: {
    async getCustomer() {
      this.customer = await this.$get(`/customers/${this.id}`)
      console.log(this.customer)
    },
    goToList() {
      this.$router.push({ path: '/template/p3/list' })
    },
    goToEdit() {
      this.$router.push({ name: 'EditView', params: { id: this.id } })
    }
  }
}
</script>
