
let health = 100;
let hits = 0;

let creatureOne = {
  health: 100,
  hits: 0,
  /*items: [{
    "name": "shovel",
    "modifier": 0,
    "description": "can you dig it?"
  },
  {
    "name": "axe",
    "modifier": 0,
    "description": "chop, chop!"
  },
  {
    "name": "shotgun",
    "modifier": 0,
    "description": "ouchy"
  }
  ]*/
}

/*let items = {
  shovel: { name: "shovel", modifier: 1, description: "can you dig it?!" },
  axe: { name: "axe", modifier: 2, description: "chop chop!" },
  shotgun: { name: "shotgun", modifier: 4, description: "ouchy!" }
}
function giveShovel() {
  creatureOne.items.push(items.shovel)
}
function giveAxe() {
  creatureOne.items.push(items.axe)
}
function giveShotgun() {
  creatureOne.items.push(items.shotgun)
}*/

function update() {
  document.getElementById("health").innerText = creatureOne.health.toString()
  document.getElementById("hitId").innerText = creatureOne.hits.toString()
}
function reset() {
  creatureOne.health = 100
  creatureOne.hits = 0
  document.getElementById("mainImg").innerHTML = `<img src="assets/zombie-head.png"></img>`
  update()
}

function resetWhenHealthIsZero() {
  if (creatureOne.health <= 0) {
    creatureOne.health = 100
    creatureOne.hits = 0
  }
  document.getElementById("mainImg").innerHTML = `<img src="assets/zombie-head.png"></img>`
  update()
}

function baseballBat() {
  creatureOne.health -= 1
  creatureOne.hits++
  resetWhenHealthIsZero()
  update()
  document.getElementById("mainImg").innerHTML = `<img src="assets/pow-zombie.png"></img>`
}
function axe() {
  creatureOne.health -= 5
  creatureOne.hits++
  resetWhenHealthIsZero()
  update()
  document.getElementById("mainImg").innerHTML = `<img src="assets/wham-zombie.png"></img>`
}

function shotgun() {
  creatureOne.health -= 10
  creatureOne.hits++
  resetWhenHealthIsZero()
  update()
  document.getElementById("mainImg").innerHTML = `<img src="assets/bam-zombie.png"></img>`
}

function ateFinger() {
  //creatureOne.items[0].modifier += 2
  if (creatureOne.health <= 98) {
    creatureOne.health += 2
  } else if (creatureOne.health < 100 && creatureOne.health >= 99) {
    creatureOne.health += 1
  }
  document.getElementById("mainImg").innerHTML = `<img src="assets/zombie-like-face.png"></img>`
  update()
}

function ateArm() {
  //creatureOne.items[1].modifier += 4
  if (creatureOne.health <= 96) {
    creatureOne.health += 4
  } else if (creatureOne.health < 100 && creatureOne.health == 97) {
    creatureOne.health += 3
  } else if (creatureOne.health < 100 && creatureOne.health == 98) {
    creatureOne.health += 2
  } else if (creatureOne.health < 100 && creatureOne.health == 99) {
    creatureOne.health += 1
  }
  document.getElementById("mainImg").innerHTML = `<img src="assets/zombie-like-face.png"></img>`
  update()
}
function ateLeg() {
  // creatureOne.items[2].modifier += 10
  if (creatureOne.health <= 94) {
    creatureOne.health += 6
  } else if (creatureOne.health < 100 && creatureOne.health == 95) {
    creatureOne.health += 5
  } else if (creatureOne.health < 100 && creatureOne.health == 96) {
    creatureOne.health += 4
  } else if (creatureOne.health < 100 && creatureOne.health == 97) {
    creatureOne.health += 3
  } else if (creatureOne.health < 100 && creatureOne.health == 98) {
    creatureOne.health += 2
  } else if (creatureOne.health < 100 && creatureOne.health == 99) {
    creatureOne.health += 1
  }
  document.getElementById("mainImg").innerHTML = `<img src="assets/zombie-like-face.png"></img>`

  update()
}


var mods = 0
function addMods() {

}