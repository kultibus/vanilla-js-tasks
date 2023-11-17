import { CamelHandler } from '@src/manager/camel-handler';

export class AppComponents {
  constructor(...components) {
    let componentsCache = {};
    components.forEach((component) => {
      let [componentName, constrName] = new CamelHandler(component.name, component.constructor.name);
      component.elemHTML.id = componentName + constrName;
      this[constrName.slice(1) + 's'] = {};
      componentsCache[component.name + component.constructor.name] = {
        name: component.name,
        parentId: constrName.slice(1) + 's',
        elemHTML: component.elemHTML,
      }
    });
    Object.values(componentsCache).forEach(component => {
      let {name, parentId, elemHTML} = component
      this[parentId][name] = elemHTML
    })
    return this;
  }
}
