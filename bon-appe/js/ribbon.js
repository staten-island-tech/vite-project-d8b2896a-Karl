import {cards} from "./cards";
import { DOMSelectors } from "./Dom";

function insertNavy() {
    const find = cards.filter((stuff) => stuff.division.includes("navy"));
    find.forEach((stuff) => DOMSelectors.card.insertAdjacentHTML("beforeend",
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
    find.forEach((stuff) => DOMSelectors.card.insertAdjacentHTML("beforeend",
    `<div class="card" id="army">
        <h2 class="card-name"> ${stuff.name}</h2>
        <img src="${stuff.image}" alt="${stuff.name}" class="picture">
        <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
    </div>
    `)
    );
}

function insertAirForce() {
    const find = cards.filter((stuff) => stuff.division.includes("air force"));
    find.forEach((stuff) => DOMSelectors.card.insertAdjacentHTML("beforeend",
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
    find.forEach((stuff) => DOMSelectors.card.insertAdjacentHTML("beforeend",
    `<div class="card" id="weapons">
        <h2 class="card-name"> ${stuff.name}</h2>
        <img src="${stuff.image}" alt="${stuff.name}" class="picture">
        <h3 class="info"> ${stuff.speed}, ${stuff.usage}</h3>
    </div>
    `)
    );
}

function deleteCards () {
    const navy = document.querySelectorAll("#navy");
    const army = document.querySelectorAll("#army");
    const air = document.querySelectorAll("#air-force");
    const weapon = document.querySelectorAll("#weapons");
    navy.forEach((stuff) => stuff.remove());
    army.forEach((stuff) => stuff.remove());
    air.forEach((stuff) => stuff.remove());
    weapon.forEach((stuff) => stuff.remove());    
}

export { insertNavy, insertArmy, insertAirForce, insertWeapons, deleteCards }

