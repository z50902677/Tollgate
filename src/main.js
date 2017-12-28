// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import 'vue-dialog-drag/dist/vue-dialog-drag.css'
import 'vue-dialog-drag/dist/drop-area.css'
import 'vue-dialog-drag/dist/dialog-styles.css'
import mapInit from './components/mapInit';

mapInit.initialize();

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

