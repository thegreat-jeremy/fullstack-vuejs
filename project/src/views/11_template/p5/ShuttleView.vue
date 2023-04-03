<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-5">
        <div class="row gx-3 gy-2 align-items-center">
          <div class="col-6">
            <label class="visually-hidden" for="customerName">Name</label>
            <input
              type="text"
              class="form-control"
              id="customerName"
              placeholder="Customer Name"
              v-model="searchName"
              @keyup.enter="doSearch"
            />
          </div>
          <div class="col-auto">
            <button class="btn btn-primary me-1" @click="doSearch">
              Search
            </button>
          </div>
        </div>
        <table class="table table-striped table-bordered mt-2">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="customer.id" v-for="customer in customers">
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  :value="customer.id"
                  v-model="checkedItems"
                />
              </td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-2">
        <div class="d-flex flex-column justify-content-center h-100">
          <button class="btn btn-danger mb-2" @click="doAdd">
            <i class="fa-solid fa-chevron-right"></i>
          </button>

          <button class="btn btn-danger" @click="doRemove">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
        </div>
      </div>
      <div class="col-5">
        <div class="row gx-3 gy-2 align-items-center">
          <div class="col-6">
            <select name="" id="" class="form-select">
              <option value="">재무팀</option>
              <option value="">영업팀</option>
              <option value="">인사팀</option>
            </select>
          </div>
          <div class="col-auto">
            <button class="btn btn-danger">Save</button>
          </div>
        </div>
        <table class="table table-striped table-bordered mt-2">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="customer.id" v-for="customer in customers2">
              <td>
                <input
                  type="checkbox"
                  class="form-check-input"
                  :value="customer.id"
                  v-model="checkedItems2"
                />
              </td>
              <td>{{ customer.name }}</td>
              <td>{{ customer.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      searchName: '',
      customers: [],
      customers2: [],
      checkedItems: [],
      checkedItems2: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async doSearch() {
      const loader = this.$loading.show()
      this.customers = await this.$get(
        `/customers?name_like=${this.searchName}`
      )
      loader.hide()
    },
    doAdd() {
      if (this.checkedItems.length > 0) {
        const selectedCustomers = []
        this.checkedItems.forEach((id) => {
          const item = this.customers.filter(
            (customer) => customer.id === id
          )[0]
          selectedCustomers.push(item)
        })

        const existCustomer = [...this.customers2]
        selectedCustomers.forEach((selectedCustomer) => {
          if (
            existCustomer.filter((c) => c.id === selectedCustomer.id).length ===
            0
          ) {
            existCustomer.push(selectedCustomer)
          }
        })

        this.customers2 = existCustomer
        this.checkedItems = []
      }
    },
    doRemove() {
      const existCustomer = [...this.customers2]
      this.checkedItems2.forEach((id) => {
        existCustomer.forEach((customer, idx) => {
          if (customer.id === id) {
            existCustomer.splice(idx, 1)
          }
        })
      })

      this.customers2 = existCustomer
      this.checkedItems2 = []
    }
  }
}
</script>
