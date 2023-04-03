<template>
  <apexchart
    type="bar"
    :width="width"
    :height="height"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>
<script>
export default {
  components: {},
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    title: {
      type: String,
      default: ''
    },
    legendPosition: {
      type: String,
      default: 'bottom'
    },
    series: {
      type: Array,
      default: function () {
        return []
      }
    },
    categories: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      chartOptions: {
        plotOptions: {
          bar: {
            // borderRadius: 4,
            horizontal: true,
            dataLabels: {
              position: 'top'
            }
          }
        },
        // stroke: {
        //   width: 1,
        //   colors: ['#000000']
        // },
        xaxis: {
          categories: []
        },
        legend: {
          show: true,
          position: this.legendPosition
        },
        title: {
          text: this.title
        }
      }
    }
  },
  setup() {},
  created() {},
  mounted() {
    this.chartOptions.xaxis.categories = this.categories
  },
  unmounted() {},
  methods: {}
}
</script>
