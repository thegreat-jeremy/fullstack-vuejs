<template>
  <div>
    <bar-chart
      height="400px"
      :series="bar.series"
      :categories="bar.categories"
      title="Bar차트 타이틀"
      legendPosition="right"
    />
  </div>
</template>
<script>
import BarChart from '@/components/charts/BarChart.vue'
export default {
  components: {
    'bar-chart': BarChart
  },
  data() {
    return {
      bar: {
        series: [
          {
            name: '매출',
            data: [30, 40, 45, 50, 49, 60, 70, 91]
          },
          {
            name: '매입',
            data: [20, 30, 35, 40, 39, 50, 70, 91]
          }
        ],
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
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
