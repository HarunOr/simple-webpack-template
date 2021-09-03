function component() {
  const element = document.createElement('div');
  element.textContent = 'Hello Webpack!';
  return element;
}

document.body.appendChild(component());
