console.log("It's Working");

import { loadHome } from "./pageload.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

const actions = { Home: loadHome, Menu: loadMenu, Contact: loadContact };

// Load Home by default
loadHome();

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('#content').textContent = ""; // clear content
    const action = actions[btn.textContent];
    if(action) action();
  });
});