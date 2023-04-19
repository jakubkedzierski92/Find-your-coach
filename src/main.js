import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import BaseCard from './components/base/BaseCard.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseBadge from './components/base/BaseBadge.vue'
import BaseSpinner from './components/base/BaseSpinner.vue'

const app = createApp(App);
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.use(router);
app.use(store)
app.mount('#app');
