<template>
  <table class="table table-bordered table-striped">
    <thead>
      <tr>
        <th v-if="selectType === 'checkbox'">
          <input
            type="checkbox"
            class="form-check-input"
            @change="checkAll($event)"
          />
        </th>
        <th v-else-if="selectType === 'radio'"></th>

        <th :key="th.key" v-for="th in headers">
          {{ th.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <td v-if="selectType === 'checkbox'">
          <input
            type="checkbox"
            class="form-check-input"
            :value="item[checkedKey]"
            v-model="checkedItems"
            @change="doChecked"
          />
        </td>
        <td v-else-if="selectType === 'radio'">
          <input
            type="radio"
            class="form-check-input"
            :value="item[checkedKey]"
            v-model="checkedItem"
            @change="doChecked"
          />
        </td>
        <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    selectType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      default: ''
    },
    checkedEventName: {
      type: String,
      default: 'change-item'
    }
  },
  data() {
    return {
      sampleData: '',
      checkedItems: [],
      checkedItem: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChecked() {
      //   console.log(this.checkedItems)
      //   this.$emit('change-item', this.checkedItems)
      if (this.selectType === 'checkbox') {
        this.$emit(this.checkedEventName, this.checkedItems)
      } else if (this.selectType === 'radio') {
        this.$emit(this.checkedEventName, this.checkedItem)
      }
    },
    checkAll(event) {
      // console.log(event.target.checked)
      const checkedItems = []
      if (event.target.checked) {
        this.items.forEach((item) => {
          checkedItems.push(item[this.checkedKey])
        })
      }

      this.checkedItems = checkedItems
      // console.log(this.checkedItems)
    }
  }
}
</script>
