import "../styles/style.css";
import "../styles/array.css";
import { DOMSelectors } from "./Dom";
import { deleteCards, insertAirForce, insertArmy, insertNavy, insertWeapons } from "./ribbon";


document.querySelector("#theme-button").addEventListener("click", function() {
  if(document.body.classList.contains("blue")) {
    document.body.classList.add("red");
    document.body.classList.remove("blue");
  }
  else {
    document.body.classList.add("blue");
    document.body.classList.remove("red");
  }
});

DOMSelectors.navy.addEventListener("click", function () {
  deleteCards();
  insertNavy();
});

DOMSelectors.army.addEventListener("click", function () {
  deleteCards();
  insertArmy();
});

DOMSelectors.air.addEventListener("click", function () {
  deleteCards();
  insertAirForce();
});

DOMSelectors.weapon.addEventListener("click", function () {
  deleteCards();
  insertWeapons();
});




/* import viteLogo from '/vite.svg' */

/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite?</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

/* setupCounter(document.querySelector('#counter')) 
 */