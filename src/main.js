import Vue from 'vue'
import App from './App.vue'
//完整引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//关闭提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
