export default {
  created() {
    console.log('formatter의 created')
  },
  mounted() {
    console.log('formatter의 mounted')
  },
  unmounted() {},
  methods: {
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''
      // '20220601'
      // Date()
      if (typeof d === 'string' && d.length === 8) {
        year = d.substr(0, 4)
        month = d.substr(4, 2)
        day = d.substr(6, 2)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = (d.getDate() + 1).toString().padStart(2, 0)
      }

      // f - 'YYYY-MM-DD' 'MM-DD-YYYY'
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    }
  }
}
