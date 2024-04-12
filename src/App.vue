<template>
  <div id="app">
    <router-link class="list-group-item"
                 active-class="active"
                 to="/modelGraphics">基础图形</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/areaPolylineCityLink">城市道路线</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/circleScan">圆形扫描</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/phaseControlMaterial">相控材质</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/polylineCityLink">发光线</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/postProcessStages">后置场景处理</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/radarScan">雷达扫描</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/satelliteCoverage">相控跟随</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/drawPlot">标会</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/coneControl">锥体图元控制</router-link>
    <router-link class="list-group-item"
                 active-class="active"
                 to="/fanShapeScan">扇形扫描</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.list-group-item {
  margin: 5px;
}
</style>
