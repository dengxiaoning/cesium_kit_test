import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { setupElementPlus } from "./utils/libs/element_invoke"; // element UI
const app = createApp(App);
setupElementPlus(app);
app.use(router);
app.mount("#app");
