
 import ElementPlus from'element-plus'

export function setupElementPlus(app ) {
// 设置语言
// locale.use(lang)
  // components.forEach((component: any) => {
  //   app.component(component.name, component)
  // })

  // plugins.forEach((plugin: any) => {
  //   app.use(plugin)
  // })

  app.use(ElementPlus);
  // 全局配置
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
}
