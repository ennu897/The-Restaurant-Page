export function loadContact() {
  const container = document.createElement('div');
  container.textContent = "Hey, this is Contact Tab!";
  container.style.padding = "20px";
  container.style.color = "red";
  document.querySelector('#content').appendChild(container);
}