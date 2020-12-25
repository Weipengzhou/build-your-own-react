function createElement(parentEle, props, childEle) {
  let parentElement = document.createElement(parentEle);
  parentElement.innerHTML = childEle;
  return parentElement;
}

function render(insertEle, rootEle) {
  rootEle.appendChild(insertEle)
}
 
const React = {
  createElement
}

const ReactDOM = {
  render
}

const helloWord = React.createElement('div', null, 'Hello World');
ReactDOM.render(helloWord, document.getElementById('root'));
