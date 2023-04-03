<template>
  <div>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#userModal"
    >
      Show Modal
    </button>
    <button
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#userModal2"
    >
      Show Modal2
    </button>
    <slot-modal modalId="userModal">
      <template v-slot:title>모달창 타이틀</template>
      <template v-slot:body>
        <div class="row gy-2">
          <div class="col-3">
            <label for="" class="form-label">이메일주소</label>
          </div>
          <div class="col-9">
            <input type="email" name="" id="" class="form-control" />
          </div>
          <div class="col-3">
            <label for="" class="form-label">전화번호</label>
          </div>
          <div class="col-9">
            <input type="tel" name="" id="" class="form-control" />
          </div>
          <div class="col-3">
            <label for="" class="form-label">주소</label>
          </div>
          <div class="col-9">
            <input type="text" name="" id="" class="form-control" />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          닫기
        </button>
        <button type="button" class="btn btn-primary">저장</button>
      </template>
    </slot-modal>

    <slot-modal modalId="userModal2">
      <template v-slot:title>모달창 타이틀2</template>
      <template v-slot:body>
        <div class="row gy-2">
          <p>문장1</p>
          <p>문장2</p>
          <p>문장3</p>
        </div>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          닫기
        </button>
        <button type="button" class="btn btn-primary">저장</button>
      </template>
    </slot-modal>
  </div>
</template>
<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { SlotModal },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
