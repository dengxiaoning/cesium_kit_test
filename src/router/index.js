import modelGraphics from "../components/modelGraphics.vue";
import areaPolylineCityLink from "../components/areaPolylineCityLink.vue";
import circleScan from "../components/circleScan.vue";
import polylineCityLink from "../components/polylineCityLink.vue";
import postProcessStages from "../components/postProcessStages.vue";
import radarScan from "../components/radarScan.vue";
import semicircleSensor from "../components/semicircleSensor.vue";
import drawPlot from "../components/drawPlot.vue";
import fanShapeScan from "../components/fanShapeScan.vue";
import coneControl from "../components/coneControl.vue";
import analysis from "../components/analysisCtrl.vue";
import pathRoaming from "../components/pathRoaming.vue";
import aniSoldier from "../components/ani-soldier.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: modelGraphics,
  },
  {
    path: "/modelGraphics",
    component: modelGraphics,
  },
  {
    path: "/areaPolylineCityLink",
    component: areaPolylineCityLink,
  },
  {
    path: "/circleScan",
    component: circleScan,
  },
  {
    path: "/polylineCityLink",
    component: polylineCityLink,
  },
  {
    path: "/postProcessStages",
    component: postProcessStages,
  },
  {
    path: "/radarScan",
    component: radarScan,
  },
  {
    path: "/semicircleSensor",
    component: semicircleSensor,
  },
  {
    path: "/drawPlot",
    component: drawPlot,
  },
  {
    path: "/coneControl",
    component: coneControl,
  },
  {
    path: "/fanShapeScan",
    component: fanShapeScan,
  },
  {
    path: "/analysis",
    component: analysis,
  },
  {
    path: "/pathRoaming",
    component: pathRoaming,
  },
  {
    path: "/aniSoldier",
    component: aniSoldier,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
