export function loadMenu() {
  const container = document.createElement('div');
  container.textContent = "Hey, this is Menu Tab!";
  container.style.padding = "20px";
  container.style.color = "green";
  document.querySelector('#content').appendChild(container);
}