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
    return tag(props)
  }
  
  let element = document.createElement(tag);
  // 绑定事件
  Object.keys(props).forEach(item => {
    switch (item){
      case 'onClick':
        element.addEventListener('click', props[item]);
          break;
        default:
          break;
    }
  })
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

class MyButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement('button', { onClick: this.props.onClick }, `Click me`);
  }
}
const myBtn = React.createElement(MyButton, { onClick: () => alert('点击事件触发') }, null);
ReactDOM.render(myBtn, document.getElementById('root'));