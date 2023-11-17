import { CamelHandler } from '@src/manager/camel-handler';

// export class Render {
//   constructor(...elems) {
//     elems.forEach((elem) => {
//       elem.group = elem.constructor.name[0].toLowerCase() + elem.constructor.name.slice(1) + 's';
//       this[elem.group + elem.name[0].toUpperCase() + elem.name.slice(1)] = elem;
//       this[elem.group] = {};
//     });

//     Object.entries(this).forEach(([key, value]) => {
//       if (value.group) {
//         let { name, group, render, node } = value;
//         this[group][name] = {};
//         this[group][name].node = node;
//         this[group][name].cloneNodes = [];
//         this[group][name].reRenderCnt = 0;
//         this[group][name].multCnt = 0;
//         this[group][name].reRender = this.reRender.bind(this[group][name]);
//         this[group][name].render = this.renderDynamic.bind(this[group][name]);
//         this[group][name].remove = this.remove.bind(this[group][name]);

//         if (render) {
//           this.renderStatic.call(value);
//         }

//         delete this[key];
//       }
//     });
//   }

//   renderStatic() {
//     if (!this.placeIn) document.body.append(this.node);
//     else {
//       let parentId = new CamelHandler(this.placeIn)[0];
//       let parent = document.getElementById(parentId);
//       parent.append(this.node);
//     }
//   }

//   renderDynamic(options = {}) {
//     if (!options.placeIn) document.body.append(this.node);
//     else {
//       let parentId = new CamelHandler(options.placeIn)[0];
//       let parent = document.getElementById(parentId);
//       parent.append(this.node);
//     }
//   }

//   reRender(options = {}) {
//     const create = () => {
//       let elem = this.node.cloneNode(false);
//       elem.id += '-' + this.cloneNodes.length;
//       if (options.text) elem.innerHTML = options.text;
//       this.cloneNodes.push(elem);
//       this.reRenderCnt++;
//       return elem;
//     };

//     const render = (elem) => {
//       if (options.placeIn) {
//         let parentId = new CamelHandler(options.placeIn)[0];
//         let parent = document.getElementById(parentId);
//         parent.append(elem);
//       } else {
//         this.node.parentElement.append(elem);
//       }
//     };

//     if (!options.once && options.mult) {
//       while (options.mult > 0) {
//         render(create());
//         this.multCnt++;
//         options.mult--;
//       }
//     } else if (!options.once) {
//       render(create());
//     } else if (options.mult) {
//       while (this.multCnt !== options.mult) {
//         render(create());
//         this.multCnt++;
//       }
//       if (this.multCnt === options.mult) {
//         this.cloneNodes.forEach((node) => render(node));
//       }
//     } else if (this.reRenderCnt === this.multCnt) {
//       render(create());
//     } else if (this.reRenderCnt > this.multCnt) {
//       render(this.cloneNodes[this.cloneNodes.length - 1]);
//     }
//   }

//   remove() {
//     this.node.remove();
//   }

// }

export class Render {
  constructor(...elems) {
    elems.forEach((elem) => {
      elem.group = elem.constructor.name[0].toLowerCase() + elem.constructor.name.slice(1) + 's';
      this[elem.group + elem.name[0].toUpperCase() + elem.name.slice(1)] = elem;
      this[elem.group] = {};
    });
    Object.entries(this).forEach(([key, value]) => {
      if (value.group) {
        let { name, group, render, node } = value;
        this[group][name] = {};
        this[group][name].node = node;
        this[group][name].cloneNodes = [];
        this[group][name].reRender = this.reRender.bind(this[group][name]);
        this[group][name].render = this.renderDynamic.bind(this[group][name]);
        this[group][name].remove = this.remove.bind(this[group][name]);

        if (render) {
          this.renderStatic.call(value);
        }

        delete this[key];
      }
    });
  }

  renderStatic() {
    if (!this.placeIn) document.body.append(this.node);
    else {
      let parentId = new CamelHandler(this.placeIn)[0];
      let parent = document.getElementById(parentId);
      parent.append(this.node);
    }
  }

  renderDynamic(options = {}) {
    if (!options.placeIn) document.body.append(this.node);
    else {
      let parentId = new CamelHandler(options.placeIn)[0];
      let parent = document.getElementById(parentId);
      parent.append(this.node);
    }
  }

  reRender(options = {}) {
    let { mult, once } = options;
    this.mult = mult ? mult : 0;
    this.rendered = once ? once : false;

    const create = () => {
      let newNode = this.node.cloneNode(false);
      newNode.id += '-' + this.cloneNodes.length;
      if (options.text) newNode.innerHTML = options.text;
      this.cloneNodes.push(newNode);
      return newNode;
    };

    const render = (node) => {
      if (options.placeIn) {
        let parentId = new CamelHandler(options.placeIn)[0];
        let parent = document.getElementById(parentId);
        parent.append(node);
      } else {
        this.node.parentElement.append(node);
      }
    };

    if (!options.once && options.mult) {
      while (options.mult > 0) {
        render(create());
        this.mult++;
        options.mult--;
      }
    } else if (!options.once) {
      render(create());
    } else if (options.mult) {
      while (this.mult !== options.mult) {
        render(create());
        this.mult++;
      }
      if (this.mult === options.mult) {
        this.cloneNodes.forEach((clone) => render(clone));
      }
    } else {
      render(create());
    }
    // render(this.cloneNodes[this.cloneNodes.length - 1]);
  }

  remove() {
    this.node.remove();
  }
}

// const getElem = (elemsTree) => {
//   if (elemsTree.props && elemsTree.node) {
//     return elemsTree;
//   } else {
//     let arr = []
//     Object.values(elemsTree).forEach(value => {
//       arr.push(getElem(value))
//     })
//     return arr
//   }
// };
// getElem(elemsTree).forEach(elem => this.elemsArr.push(...elem))
// console.log(this.elemsArr);
