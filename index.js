function createElement(parentEle, props, ...childEles) {
  if (typeof parentEle === 'function') {
    return parentEle();
  }
  let parentElement = document.createElement(parentEle);
  childEles.forEach(child => {
    if (typeof child === 'string') {
      parentElement.innerHTML += child;
      return;
    }
    parentElement.appendChild(child);
  })
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





const HelloVersion3 = function() {
  return React.createElement('div', null, '版本3.0')
}
const helloWorld1 = React.createElement(HelloVersion3, null, null);
const helloWorld2 = React.createElement(HelloVersion3, null, null);
const divEle = React.createElement('div', null, '我被一个div标签包裹');

const parent = React.createElement('div', null, helloWorld1, helloWorld2, divEle, '我是文本内容');
ReactDOM.render(parent, document.getElementById('root'));