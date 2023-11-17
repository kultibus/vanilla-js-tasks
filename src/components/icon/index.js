import styles from './styles.module.scss';

import { AppComponent } from '@src/manager/app-component';
import { CamelHandler } from '@src/manager/camel-handler';

export class Icon extends AppComponent {
  constructor(props) {
    super(props);
    let [name] = new CamelHandler(this.name);
    Object.entries(styles).forEach(([selector, hash]) => {
      if (name === selector) this.elemHTML.classList.add(hash);
    });
    if (this.selector) {
      this.elemHTML.classList.add(styles[this.selector]);
      delete this.selector;
    }
    console.log(this);
  }
}
