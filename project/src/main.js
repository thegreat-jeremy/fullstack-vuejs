/* eslint-disable */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueGoodTablePlugin from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueApexCharts from 'vue3-apexcharts'

library.add(faUserSecret)
library.add(faUserClock)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const i18nStrings = { en, ko }

// {
//   en: {
//     hi: 'Hello',
//     search: 'Search',
//     save: 'Save'
//   },
//   ko: {
//     hi: '안녕하세요',
//     search: '조회',
//     save: '저장'
//   }
// }

const app = createApp(App)
app.use(store)
app.use(router)
app.mixin(mixin)
app.component('page-title', PageTitle)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18nPlugin, i18nStrings)
app.use(VueSweetalert2)
app.use(VueLoading)
app.use(VueGoodTablePlugin)
app.use(VueApexCharts)

app.directive('focus', {
  mounted(el, binding) {
    el.focus()
  }
})

app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toLowerCase()
    })
  }
})

app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toUpperCase()
    })
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '')
    })
  }
})

app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
        ''
      )
    })
  }
})

app.mount('#app')
window.Kakao.init('74a30d4e03caf4f13afc2b5646a9b923')
