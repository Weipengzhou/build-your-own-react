function createElement(parentEle, props, childEle) {
  if (typeof parentEle === 'function') {
    return parentEle();
  }
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


const Hello = function() {
  return React.createElement('div', null, 'Hello');
}
const HelloWord = React.createElement(Hello, null, null);
ReactDOM.render(HelloWord, document.getElementById('root'));
