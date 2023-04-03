<template>
  <div class="container">
    <button class="btn btn-primary me-1" @click="doSearch">조회</button>
    <button class="btn btn-danger" @click="doDelete">삭제</button>
    <!-- <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>제품코드</th>
          <th>제품명</th>
          <th>제품가격</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="drink.drinkId" v-for="drink in drinkList">
          <td>{{ drink.drinkId }}</td>
          <td>{{ drink.drinkName }}</td>
          <td>{{ drink.price }}</td>
        </tr>
      </tbody>
    </table> -->
    <simple-grid
      :headers="headers"
      :items="drinkList"
      :selectType="selectType"
      checkedKey="drinkId"
      checkedEventName="change-item2"
      @change-item2="changeCheckedValue"
    />
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'
// import SimpleGrid from '../../components/fragments/SimpleGrid.vue'
export default {
  components: { SimpleGrid },
  data() {
    return {
      selectType: 'checkbox',
      sampleData: '',
      headers: [
        { title: '제품코드', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '제품가격', key: 'price' }
      ],
      drinkList: [],
      checkedItems: [],
      checkedItem: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      this.drinkList = [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '물',
          price: 700,
          qty: 1
        },
        {
          drinkId: '5',
          drinkName: '보리차',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '6',
          drinkName: '포카리',
          price: 1000,
          qty: 1
        },
        {
          drinkId: '7',
          drinkName: '뽀로로',
          price: 1300,
          qty: 1
        }
      ]
    },
    doDelete() {
      // 삭제 실행 - 삭제할 아이템에 대한 제품번호는 this.checkedItems
    },
    changeCheckedValue(data) {
      console.log('선택된 아이템', data)
      if (this.selectType === 'checkbox') {
        this.checkedItems = data
      } else if (this.selectType === 'radio') {
        this.checkedItem = data
      }
    }
  }
}
</script>
