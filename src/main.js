import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vscodeRouterFile from "@kummy/vscode-router-file";

Vue.config.productionTip = false;

Vue.use(vscodeRouterFile);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
