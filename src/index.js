// тут должна быть работа с DOM с использованием методов и свойст менеджера.

import { Manager } from './manager';
import styles from './styles.module.scss';
import './global.scss';

document.getElementById('tasks-header').classList.add(styles.header);
document.getElementById('tasks-main').classList.add(styles.taskContainer);

const tm = new Manager();

console.log(cols);
