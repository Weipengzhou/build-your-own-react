function createElement(tag, props, ...childElements) {
  if (typeof tag === 'function') {
    return tag()
  }
  let element = document.createElement(tag);
  childElements.forEach(item => {
     if (typeof item === 'string') {
       element.innerHTML += item;
     } else if (typeof item === 'object') {
       element.appendChild(item);
     }
  })
  return element;
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

const parent = React.createElement('div', null, helloWorld1, helloWorld2,'我是文本内容', divEle);
ReactDOM.render(parent, document.getElementById('root'));