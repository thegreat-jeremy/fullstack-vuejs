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
    <p>{{ fullName }}</p>
    <div>
      <label for="age">당신의 나이는?</label>
      <input type="number" name="" id="age" v-model="age" />
    </div>
    <p>{{ age >= 20 ? '성인' : '미성년자' }}</p>
    <p>{{ isAdult }}</p>
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
      age: 0
    }
  },
  computed: {
    fullName() {
      return this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    isAdult() {
      return this.age >= 20 ? '성인' : '미성년자'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
