import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheckboxView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingRadioView.vue'
      )
  },
  {
    path: '/databinding/attr',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingClassView.vue'
      )
  },
  {
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStyleView.vue'
      )
  },
  {
    path: '/event/click',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventChangeView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventKeyView',
    component: () =>
      import(
        /* webpackChunkName: "event", webpackPrefetch:true */ '../views/2_event/EventKeyView.vue'
      )
  },
  {
    path: '/extra/if',
    name: 'RenderingIfView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/RenderingIfView.vue'
      )
  },
  {
    path: '/extra/show',
    name: 'RenderingShowView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/RenderingShowView.vue'
      )
  },
  {
    path: '/extra/computed',
    name: 'ComputedView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/ComputedView.vue'
      )
  },
  {
    path: '/extra/watch',
    name: 'WatchView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/WatchView.vue'
      )
  },
  {
    path: '/extra/lifecycle',
    name: 'LifecycleHookView',
    component: () =>
      import(
        /* webpackChunkName: "extra", webpackPrefetch:true */ '../views/3_extra/LifecycleHookView.vue'
      )
  },
  {
    path: '/reuse/pagetitle',
    name: 'PageView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/PageView.vue'
      )
  },
  {
    path: '/reuse/parent',
    name: 'ParentView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/ParentView.vue'
      )
  },
  {
    path: '/reuse/list',
    name: 'ListView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/ListView.vue'
      )
  },
  {
    path: '/reuse/slot',
    name: 'SlotView',
    component: () =>
      import(
        /* webpackChunkName: "reuse", webpackPrefetch:true */ '../views/4_reuse/SlotView.vue'
      )
  },
  {
    path: '/advanced/provide',
    name: 'ProvideView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/ProvideView.vue'
      )
  },
  {
    path: '/advanced/directive',
    name: 'CustomDirectiveView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/CustomDirectiveView.vue'
      )
  },
  {
    path: '/advanced/mixin',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/MixinView.vue'
      )
  },
  {
    path: '/advanced/plugin',
    name: 'PluginView',
    component: () =>
      import(
        /* webpackChunkName: "advanced", webpackPrefetch:true */ '../views/5_advanced/PluginView.vue'
      )
  },
  {
    path: '/vuex/todo',
    name: 'TodoView',
    component: () =>
      import(
        /* webpackChunkName: "vuex", webpackPrefetch:true */ '../views/6_vuex/TodoView.vue'
      )
  },
  {
    path: '/vuex/login',
    name: 'LoginView',
    component: () =>
      import(
        /* webpackChunkName: "vuex", webpackPrefetch:true */ '../views/6_vuex/LoginView.vue'
      )
  },
  {
    path: '/composition/setup',
    name: 'SetupView',
    component: () =>
      import(
        /* webpackChunkName: "composition", webpackPrefetch:true */ '../views/7_composition/SetupView.vue'
      )
  },
  {
    path: '/composition/ref',
    name: 'RefView',
    component: () =>
      import(
        /* webpackChunkName: "composition", webpackPrefetch:true */ '../views/7_composition/RefView.vue'
      )
  },
  {
    path: '/composition/func',
    name: 'FuncView',
    component: () =>
      import(
        /* webpackChunkName: "composition", webpackPrefetch:true */ '../views/7_composition/FuncView.vue'
      )
  },
  {
    path: '/login/kakao',
    name: 'KakaoLoginView',
    component: () =>
      import(
        /* webpackChunkName: "login", webpackPrefetch:true */ '../views/8_login/KakaoLoginView.vue'
      )
  },
  {
    path: '/login/main',
    name: 'MainView',
    component: () =>
      import(
        /* webpackChunkName: "login", webpackPrefetch:true */ '../views/8_login/MainView.vue'
      )
  },
  {
    path: '/login/naver',
    name: 'NaverLoginView',
    component: () =>
      import(
        /* webpackChunkName: "login", webpackPrefetch:true */ '../views/8_login/NaverLoginView.vue'
      )
  },
  {
    path: '/module/postcode',
    name: 'DaumPostcodeView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/DaumPostcodeView.vue'
      )
  },
  {
    path: '/module/map',
    name: 'KakaoMapView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/KakaoMapView.vue'
      )
  },
  {
    path: '/module/font',
    name: 'FontawesomeView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/FontawesomeView.vue'
      )
  },
  {
    path: '/module/calendar',
    name: 'FullCalendarView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/FullCalendarView.vue'
      )
  },
  {
    path: '/module/sweetalert2',
    name: 'Sweetalert2View',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/Sweetalert2View.vue'
      )
  },
  {
    path: '/module/loading',
    name: 'LoadingOverlayView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/LoadingOverlayView.vue'
      )
  },
  {
    path: '/module/table',
    name: 'VueGoodTableView',
    component: () =>
      import(
        /* webpackChunkName: "module", webpackPrefetch:true */ '../views/9_module/VueGoodTableView.vue'
      )
  },
  {
    path: '/chart/bar',
    name: 'BarChartView',
    component: () =>
      import(
        /* webpackChunkName: "chart", webpackPrefetch:true */ '../views/10_chart/BarChartView.vue'
      )
  },
  {
    path: '/chart/bar2',
    name: 'BarChartView2',
    component: () =>
      import(
        /* webpackChunkName: "chart", webpackPrefetch:true */ '../views/10_chart/BarChartView2.vue'
      )
  },
  {
    path: '/chart/line',
    name: 'LineChartView',
    component: () =>
      import(
        /* webpackChunkName: "chart", webpackPrefetch:true */ '../views/10_chart/LineChartView.vue'
      )
  },
  {
    path: '/chart/donut',
    name: 'DonutChartView',
    component: () =>
      import(
        /* webpackChunkName: "chart", webpackPrefetch:true */ '../views/10_chart/DonutChartView.vue'
      )
  },
  {
    path: '/chart/column',
    name: 'ColumnChartView',
    component: () =>
      import(
        /* webpackChunkName: "chart", webpackPrefetch:true */ '../views/10_chart/ColumnChartView.vue'
      )
  },
  {
    path: '/template/p1/single',
    name: 'SingleViewEditView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p1/SingleViewEditView.vue'
      )
  },
  {
    path: '/template/p2/multiple',
    name: 'MultipleEditView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p2/MultipleEditView.vue'
      )
  },
  {
    path: '/template/p3/list',
    name: 'ListToDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/ListToDetailView.vue'
      )
  },
  {
    path: '/template/p3/detail',
    name: 'DetailView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/DetailView.vue'
      )
  },
  {
    path: '/template/p3/edit',
    name: 'EditView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/EditView.vue'
      )
  },
  {
    path: '/template/p3/create',
    name: 'CreateView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p3/CreateView.vue'
      )
  },
  {
    path: '/template/p4/master',
    name: 'MasterDetailView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p4/MasterDetailView.vue'
      )
  },
  {
    path: '/template/p4/master2',
    name: 'MasterDetailModalView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p4/MasterDetailModalView.vue'
      )
  },
  {
    path: '/template/p5/shuttle',
    name: 'ShuttleView',
    component: () =>
      import(
        /* webpackChunkName: "template", webpackPrefetch:true */ '../views/11_template/p5/ShuttleView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
