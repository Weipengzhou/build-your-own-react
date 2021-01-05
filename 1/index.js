function createElement(tag, props, text) {
  let element = document.createElement(tag);
  element.innerHTML = text;
  return element;
}
function render(childElement, parentElement){
  parentElement.appendChild(childElement);
}

const React = {
  createElement,
}
const ReactDOM = {
  render,
}

const HelloWord = React.createElement('div', null, 'Hello World');
ReactDOM.render(HelloWord, document.getElementById('root'));