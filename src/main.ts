import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'assets/index.css';
import 'scss/main.scss';
import "@egjs/vue-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

Vue.config.productionTip = false;
Vue.prototype.$eventBus = new Vue()

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
