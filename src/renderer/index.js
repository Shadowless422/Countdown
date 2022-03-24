import './index.css';
import { createApp } from 'vue';
import Index from './pages/index';
import Countdown from './pages/countdown';
import App from './App';
import { createRouter, createWebHashHistory } from 'vue-router';

console.log('👋 This message is being logged by "index.js", included via webpack');

const routes = [
  { path: '/', component: Index },
  { path: '/countdown', component: Countdown },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router);
app.mount('#app')
