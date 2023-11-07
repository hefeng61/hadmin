import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router/index.js'
import store from './store/index.js'
import './mock/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
