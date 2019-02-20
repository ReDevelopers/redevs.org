import Vue from "vue";
import App from "./App.vue";
import Argon from "./plugins/argon-kit";
import VueScrollTo from 'vue-scrollto';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faThumbsUp, faSignal, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faSmile } from '@fortawesome/free-regular-svg-icons'

Vue.config.productionTip = false;

Vue.use(Argon);
Vue.use(VueScrollTo, {
  duration: 1000
});

library.add(faGithub, faDiscord);
library.add(faDollarSign, faThumbsUp, faSmile, faSignal)
dom.watch();

new Vue({
  render: h => h(App)
}).$mount("#app");
