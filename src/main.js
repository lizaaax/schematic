import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'; 
import 'jquery-ui/ui/widgets/draggable'
import 'jquery-ui/ui/widgets/droppable'
import draw2d from 'draw2d';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App);

// 为了在组件中使用全局 jQuery
app.config.globalProperties.$ = $;

// 为了在组件中使用 draw2d
app.config.globalProperties.$draw2d = draw2d;
app.use(ElementPlus)
app.mount('#app');
