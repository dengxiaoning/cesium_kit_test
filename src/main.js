import { createApp } from 'vue'
import App from './App.vue'
import "cesium/Build/Cesium/Widgets/widgets.css"
import { setupElementPlus } from './utils/libs/element_invoke' // element UI
const app = createApp(App)
app.mount('#app')
  
setupElementPlus(app)