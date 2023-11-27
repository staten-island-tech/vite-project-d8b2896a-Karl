import "../styles/style.css";
import { cards } from "./cards";
import { DOMSelectors } from "./Dom";

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


function insertAll() {
  cards.forEach((stuff) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
  `<div class="card" id="all">
      <h2 class="card-name"> ${stuff.name}</h2>
      <img src="${stuff.image}" alt="${stuff.name}" class="picture">
      <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
  </div>
  `)
  );
}

function insertNavy() {
  const find = cards.filter((stuff) => stuff.division.includes("navy"));
  find.forEach((stuff) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="navy">
      <h2 class="card-name"> ${stuff.name}</h2>
      <img src="${stuff.image}" alt="${stuff.name}" class="picture">
      <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
  </div>
  `)
  );
}

function insertArmy() {
  const find = cards.filter((stuff) => stuff.division.includes("army"));
  find.forEach((stuff) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="army">
      <h2 class="card-name"> ${stuff.name}</h2>
      <div>
      <img src="${stuff.image}" alt="${stuff.name}" class="picture">
      <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
  </div>
  `)
  );
}

function insertAirForce() {
  const find = cards.filter((stuff) => stuff.division.includes("air force"));
  find.forEach((stuff) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="air-force">
      <h2 class="card-name"> ${stuff.name}</h2>
      <img src="${stuff.image}" alt="${stuff.name}" class="picture">
      <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
  </div>
  `)
  );
}

function insertWeapons() {
  const find = cards.filter((stuff) => stuff.division.includes("weapon"));
  find.forEach((stuff) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="weapons">
      <h2 class="card-name"> ${stuff.name}</h2>
      <img src="${stuff.image}" alt="${stuff.name}" class="picture">
      <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
  </div>
  `)
  );
}

DOMSelectors.all.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  insertAll();
});

DOMSelectors.navy.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  insertNavy();
});

DOMSelectors.army.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  insertArmy();
});

DOMSelectors.air.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  insertAirForce();
});

DOMSelectors.weapon.addEventListener("click", function () {
  DOMSelectors.cards.innerHTML = '';
  insertWeapons();
});

insertAll();


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
/* `

/* setupCounter(document.querySelector('#counter')) 
 */