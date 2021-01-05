class Component {
  constructor(props) {
    this.props = props;
  }
}
function createElement(tag, props, ...childElements) {
  // 如果为函数类型，且是类组件
  if (typeof tag === 'function' && tag.toString().startsWith('class')) {
    let element = new tag(props);
    return element.render();
  }
  // 如果是函数组件
  if (typeof tag === 'function') {
    return tag()
  }
  
  let element = document.createElement(tag);
  childElements.forEach(item => {
    if (typeof item === 'string') {
      element.innerHTML += item;
    }
    if (typeof item === 'object') {
      element.appendChild(item)
    }
  })
  return element;
}

function render(childElement, parentElement) {
  parentElement.appendChild(childElement);
}
const React = {
  Component,
  createElement,
}
const ReactDOM = {
  render,
}
class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('div', null, `Hello ${this.props.world}`);
  }
}

const Hello = React.createElement(HelloWorld, { world: 'world' }, null)
ReactDOM.render(Hello, document.getElementById('root'));