function component() {
  console.log('running comp');
  const element = document.createElement('div');
  element.textContent = 'Hello Webpack!';
  return element;
}

document.body.appendChild(component());
