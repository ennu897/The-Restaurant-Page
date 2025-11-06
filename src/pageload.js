export function loadHome() {
  const container = document.createElement('div');
  container.textContent = "Welcome to the Home Page!";
  container.style.padding = "20px";
  container.style.color = "blue";
  document.querySelector('#content').appendChild(container);
}