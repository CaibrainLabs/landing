import '@/assets/styles/normalize.scss';
import '@/assets/styles/fonts.scss';
import '@/assets/styles/vars.scss';
import '@/assets/styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#cabrApp');
