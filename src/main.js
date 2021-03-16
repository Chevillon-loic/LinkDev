import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faHome)
library.add(faPowerOff)
library.add(faSearch)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
