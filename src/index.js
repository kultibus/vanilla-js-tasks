// тут должна быть работа с DOM с использованием методов и свойст менеджера.

import { Manager } from './manager/manager';
import { AppComponents } from './manager/app-components';
import { AppElem } from './manager/app-elem';
import { Render } from './manager/render';

import './styles/fonts.scss';
import './styles/global.scss';
import './styles/colors.scss';

import { Container } from './components/container/index';
import { Title } from './components/title/index';
import { Button } from './components/button/index';
import { Icon } from './components/icon/index';
import { Form } from './components/form/index';
import { Input } from './components/form/input/index';

const tasksComponents = new AppComponents(
  new Container({ name: 'header', tag: 'header' }),
  new Container({ name: 'main', tag: 'main' }),
  new Container({ name: 'modal' }),
  new Title({ name: 'app', tag: 'h1' }),
  new Button({ name: 'app', tag: 'button' }),
  new Container({ name: 'tasks' }),
  new Title({ name: 'tasks', tag: 'h2' }),
  new Container({ name: 'modalContent' }),
  new Form({ name: 'createTask', tag: 'form' }),
  new Container({ name: 'formHeader' }),
  new Container({ name: 'formContent' }),
  new Title({ name: 'form', tag: 'h2' }),
  new Icon({ name: 'cross', tag: 'span' }),
  new Input({ name: 'app', tag: 'input' }),
);

// console.log(tasksComponents);

const tasksLayout = new AppElem(
  {elemHTML: tasksComponents.containers.header},
  {elemHTML: tasksComponents.titles.app, parentId: 'header-container'},
  {elemHTML: tasksComponents.buttons.app, parentId: 'header-container'},
  {elemHTML: tasksComponents.containers.main},
  {elemHTML: tasksComponents.containers.tasks, parentId: 'main-container'},
  {elemHTML: tasksComponents.titles.tasks, parentId: 'tasks-container'},
  {elemHTML: tasksComponents.titles.tasks, parentId: 'tasks-container', rep: 1},
  {elemHTML: tasksComponents.titles.tasks, parentId: 'tasks-title', rep: 1},
  {elemHTML: tasksComponents.titles.tasks, parentId: 'tasks-title'},
  

  // {elemHTML: tasksComponents.containers.tasks, parentId: 'main-container', rep: 2},
  // {elemHTML: tasksComponents.titles.tasks, parentId: 'tasks-container', rep: 2, spread: true},
)

console.log(tasksLayout);
// console.log(tasksLayout[0]);
// console.log(tasksLayout[1]);

// elems.containers.tasks.reRender({ mult: 2 });
// elems.titles.tasks.reRender({ placeIn: 'containerTasks0', text: 'Tasks in process' });
// elems.titles.tasks.reRender({ placeIn: 'containerTasks1', text: 'Tasks accomplished' });

// document.body.addEventListener('click', (e) => {
//   let target = e.target.closest('#button-page');
//   if (target) {
//     elems.layoutElems.modal.render();
//     elems.layoutElems.modal.node.style.opacity = 0;
//     elems.containers.form.render({ placeIn: 'layoutElemModal' });
//     elems.containers.header.render({ placeIn: 'containerForm' });
//     elems.titles.page.render({ placeIn: 'containerHeader' });
//     elems.buttons.page.reRender({ placeIn: 'containerHeader', once: true });
//     elems.buttons.page.reRender({ placeIn: 'containerHeader', once: true, mult: 3 });
//     elems.icons.cross.render({ placeIn: 'buttonPage0' });
//     elems.icons.cross.reRender({ placeIn: 'buttonPage1', once: true });
//     elems.icons.cross.reRender({ placeIn: 'buttonPage2', once: true });
//     elems.forms.createTask.render({ placeIn: 'containerForm' });
//     elems.inputs.text.render({ placeIn: 'formCreateTask', mult: 2 });
//     setTimeout(() => {
//       elems.layoutElems.modal.node.style.opacity = 1;
//     });
//     console.log(elems.buttons.page);
//   } else {
//     elems.layoutElems.modal.node.style.opacity = 0;
//     setTimeout(() => {
//       elems.layoutElems.modal.remove();
//     }, 500);
//     console.log(elems.buttons.page);
//   }
// });

// const tm = new Manager();
