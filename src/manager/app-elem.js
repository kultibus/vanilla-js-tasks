export class AppElem {
  constructor(...components) {
    // this.rootsArr = components.filter((component) => !component.parentId).map((component) => component.elemHTML);

    {
      this.rootsArr = components
        .filter((item, i, arr) => {
          if (!item.parentId) {
            arr.splice(i, 1);
            return item;
          }
        })
        .map((item) => item.elemHTML);
    }

    let repElemHTML = new Map();
    
    // components.forEach((item) => {
    //   let { elemHTML, parentId } = item;
    //   let cnt = repElemHTML.get(elemHTML);
    //   repElemHTML.set(elemHTML, cnt ? cnt + 1 : 1);
    //   if (cnt >= 1) item.copy = repElemHTML.get(elemHTML) - 1;
    //   if (item.copy) {
      //     let clone = item.elemHTML.cloneNode(false);
      //     clone.id = item.elemHTML.id + '-' + item.copy;
      //     item.elemHTML = clone;
      //   }
      //   delete item.copy;
      // });


      components.forEach((item,i,arr) => {
        let { elemHTML, parentId, rep } = item;
        while (rep && rep > 0) {
          console.log(item, i, arr);
          // arr.splice(i, 0, item)
          rep--
        }
        // let cnt = repElemHTML.get(elemHTML);
        // repElemHTML.set(elemHTML, cnt ? cnt + 1 : 1);
        // if (cnt >= 1) item.copy = repElemHTML.get(elemHTML) - 1;
        // if (item.copy) {
        //   let clone = item.elemHTML.cloneNode(false);
        //   clone.id = item.elemHTML.id + '-' + item.copy;
        //   item.elemHTML = clone;
        // }
        // delete item.copy;
      });

      // console.log(repElemHTML);
      console.log(components);
      
      let parentId = new Map();
      
      // for (let elem of components) {
        //   let { elemHTML, parentId } = elem;
    //   let counter = elemsHTMLs.get(elemHTML);
    //   elemsHTMLs.set(elemHTML, counter ? counter + 1 : 1);
    // }

    // let uniqComps = [];
    // let repComps = [];

    // for (const [key, count] of elemsHTMLs.entries()) {
    //   console.log(key, count);
    //   if (count > 1) repComps.push(key, count);
    //   uniqComps.push(key);
    // }

    // console.log(repComps);
    // console.log(uniqComps);

    // console.log(elemsHTMLs);

    // console.log(this.rootsArr);

    // let elemsIdArr = components.map((item) => [item.elemHTML, item.parentId])
    // let elemsIdArr = components.map((item) => item.elemHTML.id)

    // console.log(elemsIdArr);

    // let elemHTMLsById = {};
    // let elemHTMLsByParentId = {};

    // components.forEach((component) => {
    //   let { elemHTML, parentId } = component;
    //   elemHTMLsById[elemHTML.id] = [];
    //   elemHTMLsByParentId[parentId] = [];
    // });

    // components.forEach((component) => {
    //   let { elemHTML, parentId } = component;
    //   if (elemHTMLsById[elemHTML.id]) elemHTMLsById[elemHTML.id].push(component);
    //   console.log(elemHTMLsById[elemHTML.id].length);
    // });

    // console.log(Object.values(elemHTMLsById));
    // console.log(elemHTMLsById);

    return this.rootsArr;
  }
}

// const parentHTML = (rootHTML) => {
//   if (!rootHTML.children.length) {
//     return rootHTML;
//   } else return parentHTML(rootHTML.firstElementChild);
// };

// const addElemHTML = (elemHTML, parentHTML, parentId) => {
//   if (parentHTML.id === parentId) parentHTML.append(elemHTML);
// };
