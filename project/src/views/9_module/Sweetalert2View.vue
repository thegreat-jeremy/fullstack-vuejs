<template>
  <button @click="showAlert">Hello world</button>
</template>

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2

      //   this.$swal('Any fool can use a computer')
      //   this.$swal('The Internet?', 'That thing is still around?', 'info')

      this.$swal({
        title: '정말 삭제하시겠습니까?',
        text: '삭제된 데이터는 복구할 수 없습니다!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '네, 삭제하겠습니다!',
        cancelButtonText: '취소'
      }).then((result) => {
        if (result.isConfirmed) {
          // 삭제 로직 구현
          this.$swal(
            '삭제되었습니다!',
            '선택한 데이터가 정상적으로 삭제되었습니다.',
            'success'
          )
        }
      })
    }
  }
}
</script>
