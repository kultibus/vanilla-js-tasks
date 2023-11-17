export class AppComponent {
  constructor(props) {
    let {tag, name, ...rest} = props
    this.name = name
    this.elemHTML = tag ? document.createElement(tag) : document.createElement('div');
    // this.props = rest
  }
}
