<template>
  <div>
    <h1>
      {{ $translate(`${userInfo.lang}.welcome1`) }} {{ userInfo.name
      }}{{ $translate(`${userInfo.lang}.welcome2`) }}
    </h1>
    <h1>
      {{ $translate(`${userInfo.lang}.welcome`, userInfo) }}
    </h1>
    <h1>
      {{ $translate(`${userInfo.lang}.welcome3`, userInfo) }}
    </h1>
    <h1>{{ $translate(`${userInfo.lang}.hi`) }}</h1>
    <!-- <h1>{{ $translate('ko.hi') }}</h1> -->
    <!-- <button>{{ $translate('ko.search') }}</button> -->
    <button>{{ $translate(`${userInfo.lang}.search`) }}</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userInfo: {
        name: 'John Doe',
        email: 'john@gmail.com',
        lang: 'ko'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
