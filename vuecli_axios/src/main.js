import Vue from 'vue';
import App from './App.vue';
import axios from 'axios'; 

Vue.config.productionTip = false

axios.defaults.baseURL = 
"https://firestore.googleapis.com/v1/projects/vuejs-http-254e0/databases/(default)/documents";
// axios.defaults.headers.common["authorization"] =
// "jijijijijojjkjojj";
// axios.defaults.headers.get["Accept"] = 
// "application/json";

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    console.log('intercepters request', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

console.log(interceptorsRequest)
axios.interceptors.request.eject(interceptorsRequest);

new Vue({
  render: h => h(App),
}).$mount('#app')
