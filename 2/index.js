function createElement(tag, props, text) {
  if (typeof tag === 'function') {
    return tag();
  }
  let element = document.createElement(tag);
  element.innerHTML = text;
  return element;
}

function render(childElement, parentElement) {
  parentElement.appendChild(childElement);
}

const React = {
  createElement,
}

const ReactDOM = {
  render,
}

const Hello = () => React.createElement('div', null, 'Hello Word')
const HelloWord = React.createElement(Hello, null, null)
ReactDOM.render(HelloWord, document.getElementById('root'))
