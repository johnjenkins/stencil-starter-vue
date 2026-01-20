import { createApp } from 'vue';
import App from './App.vue';
import { StencilLibPlugin } from '@example/stencil-lib-vue';
import './style.css';

const app = createApp(App);
app.use(StencilLibPlugin);
app.mount('#app');
