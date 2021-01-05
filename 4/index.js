function createElement(tag, props, ...childElements) {
   if (typeof tag === 'function' && tag.toString().startsWith('class')) {
     let element = new tag();
     return element.render();
   }
   if (typeof tag === 'function') {
     return tag()
   }
   let element = document.createElement(tag);
   childElements.forEach(item => {
     if (typeof item === 'string') {
       element.innerHTML += item;
     } 
     if (typeof item === 'object') {
       element.appendChild(item);
     }
   }) 
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

class Hello {
  render() {
      return React.createElement('div', null, `版本四，类组件的实现`);
  }
}
  
const helloWorld = React.createElement(Hello, null, null);
ReactDOM.render(helloWorld, document.getElementById('root'));