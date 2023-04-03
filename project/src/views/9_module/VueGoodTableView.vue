<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :line-numbers="true"
      :row-style-class="rowStyleClassFn"
      v-on:row-click="onRowClick"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        placeholder: 'Search this table'
      }"
      :sort-options="{
        enabled: true,
        multipleColumns: true,
        initialSortBy: [
          { field: 'name', type: 'asc' },
          { field: 'age', type: 'desc' }
        ]
      }"
      :pagination-options="{
        enabled: true,
        mode: 'pages',
        perPage: 2,
        perPageDropdownEnabled: true
      }"
    >
      <template #table-actions>
        <button class="btn btn-info btn-sm">엑셀저장</button>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '', score: 0.03343 },
        {
          id: 2,
          name: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343
        },
        {
          id: 3,
          name: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343
        },
        {
          id: 4,
          name: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343
        },
        {
          id: 5,
          name: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343
        },
        {
          id: 6,
          name: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343
        }
      ]
    }
  },
  methods: {
    rowStyleClassFn(row) {
      return row.age > 18 ? 'green' : 'red'
    },
    onRowClick(params) {
      console.log(params)
    }
    // myFunc(row, col, cellValue, searchTerm) {
    //   console.log('row', row)
    //   console.log('col', col)
    //   console.log('cellValue', cellValue)
    //   console.log('searchTerm', searchTerm)
    //   return cellValue.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    // }
  }
}
</script>

<style>
.green {
  background-color: green;
}

.red {
  background-color: red;
}
</style>
