import "../styles/style.css";
import { stuff } from "./cards";
import { DOMSelectors } from "./Dom";


//uses map instead of matching button text with cards
document.querySelector(".theme-button").addEventListener("click", function() {
  if(document.body.classList.contains("blue")) {
    document.body.classList.add("red");
    document.body.classList.remove("blue");
  }
  else {
    document.body.classList.add("blue");
    document.body.classList.remove("red");
  }
});

function insertCard(stuff) {
  document.querySelector(".cards").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <h2 class = "text">${stuff.name}</h2>
      <img src=${stuff.image} alt="" class="card-img">
      <h2 class = "info"> Speed: ${stuff.speed} <br> Usage: ${stuff.usage}</h2>
    </div>`
  );
}

stuff.forEach((result) => {
  insertCard(result);
});

const remove = function () {
  document.querySelectorAll(".card").forEach((card) => card.remove());
};

const mapData = function () {
  stuff.map((connect) => ({
          name: connect.name,
          divison: connect.division,
          speed: connect.speed,
          usage: connect.usage,
          image: connect.image,
      })
    )
};

function order(type) {DOMSelectors[type].addEventListener("click", function () {
  remove();
  mapData();
  stuff.filter((el) => el.division.includes(type)).forEach((el) => {
    insertCard(el);
  });
})};

order("all");
order("army");
order("navy");
order("air");
order("weapon");


//second code (failed)
/* document.querySelector(".theme-button").addEventListener("click", function() {
  if(document.body.classList.contains("blue")) {
    document.body.classList.add("red");
    document.body.classList.remove("blue");
  }
  else {
    document.body.classList.add("blue");
    document.body.classList.remove("red");
  }
}); 

function addRibbon (arr) {
  arr.forEach(cards => {
    DOMSelectors.cards.insertAdjacentHTML( "beforeend",
    `<div class="card">
      <h2 class="card-name"> ${cards.name}</h2>
      <img src="${cards.image}" alt="${cards.name}" class="picture">
      <h3 class="info"> ${cards.speed}, ${cards.usage}</h3>
  </div>
  `)
})};

addRibbon(stuff);

function remove() {
    DOMSelectors.cards.innerHTML="";
}

let ribbon = document.querySelectorAll('button');

ribbon.forEach((choice) => choice.addEventListener("click", function () {
    let connect = choice.textContent;
    let display = stuff.filter((element) => element.division === connect);
    remove();
    addRibbon(display);
})); */



//first code, works but is very long
/* document.querySelector(".theme-button").addEventListener("click", function() {
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
  stuff.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
  `<div class="card" id="all">
    <h2 class="card-name">${item.name}</h2>
    <img src="${item.image}" alt="${item.name}" class="image">
    <h3 class="info">${item.speed}, ${item.usage}</h3>
  </div>
  `)
  );
}

function insertNavy() {
  const find = stuff.filter((item) => item.division.includes("navy"));
  find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="navy">
      <h2 class="card-name"> ${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="image">
      <h3 class="info"> ${item.speed}, ${item.usage}</h3>
  </div>
  `)
  );
}

function insertArmy() {
  const find = stuff.filter((item) => item.division.includes("army"));
  find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="army">
    <h2 class="card-name">${item.name}</h2>
    <img src="${item.image}" alt="${item.name}" class="image">
    <h3 class="info">${item.speed}, ${item.usage}</h3>
  </div>
  `)
  );
}

function insertAirForce() {
  const find = stuff.filter((item) => item.division.includes("air"));
  find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="air">
    <h2 class="card-name">${item.name}</h2>
    <img src="${item.image}" alt="${item.name}" class="image">
    <h3 class="info">${item.speed}, ${item.usage}</h3>
  </div>
  `)
  );
}

function insertWeapons() {
  const find = stuff.filter((item) => item.division.includes("weapon"));
  find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
  `<div class="card" id="weapons">
      <h2 class="card-name"> ${item.name}</h2>
      <img src="${item.image}" alt="${item.name}" class="picture">
      <h3 class="info"> ${item.speed}, ${item.usage}</h3>
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
 */