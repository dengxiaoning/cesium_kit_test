import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { setupElementPlus } from "./utils/libs/element_invoke"; // element UI
import * as Cesium from 'cesium'
// 演示站点专用 Ion token，仅用于本仓库 demo；业务项目请自行配置
const demoIonToken = process.env.VUE_APP_CESIUM_ION_TOKEN
if (demoIonToken) {
  Cesium.Ion.defaultAccessToken = demoIonToken
}
const app = createApp(App);
setupElementPlus(app);
app.use(router);
app.mount("#app");
