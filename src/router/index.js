import modelGraphics from "../components/modelGraphics.vue";
import areaPolylineCityLink from "../components/areaPolylineCityLink.vue";
import circleScan from "../components/circleScan.vue";
import phaseControlMaterial from "../components/phaseControlMaterial.vue";
import polylineCityLink from "../components/polylineCityLink.vue";
import postProcessStages from "../components/postProcessStages.vue";
import radarScan from "../components/radarScan.vue";
import satelliteCoverage from "../components/satelliteCoverage.vue";
import drawPlot from "../components/drawPlot.vue";
import fanShapeScan from "../components/fanShapeScan.vue";
import coneControl from "../components/coneControl.vue";
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
    path: "/phaseControlMaterial",
    component: phaseControlMaterial,
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
    path: "/satelliteCoverage",
    component: satelliteCoverage,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
