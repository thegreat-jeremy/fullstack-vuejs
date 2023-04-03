<template>
  <div>
    <column-chart
      height="400px"
      :series="bar.series"
      :categories="bar.categories"
      title="Column 차트 타이틀"
      legendPosition="bottom"
    />
  </div>
</template>
<script>
import ColumnChart from '@/components/charts/ColumnChart.vue'
export default {
  components: {
    'column-chart': ColumnChart
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
