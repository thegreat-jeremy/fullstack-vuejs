<template>
  <div>
    <div>
      <input type="text" name="" id="" v-model="firstName" />
      <input type="text" name="" id="" v-model="lastName" />
    </div>
    <h1>{{ fullName }}</h1>
    <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
    <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
    <p>{{ title }} {{ firstName }}, {{ lastName }}</p>
    <div>
      <select name="" id="" v-model="selected">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Mr.',
      fullName: '',
      selected: '',
      changeHistory: []
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      this.fullName = this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    lastName(newValue, oldValue) {
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      this.fullName = this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
