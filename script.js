/*let health = 100
let hits = 0

var zombie = {
  health: 100,
  hits: 0,
  items: []
}

var items = {
  shovel: { name: "shovel", modifier: 1, description: "it burns!" },
  axe: { name: "axe", modifier: 2, description: "chop chop!" },
  shotgun: { name: "shotgun", modifier: 4, description: "ouchy!" },
  flamethrower: { name: "flame thrower", modifier: 10, description: "cripy-fried!" }
}

function slap() {
  zombie.health -= 1
  zombie.hits += 1
  if (zombie.health <= 0) {
    reset()
  }
  update()
}

function update() {
  document.getElementById("health").innerText = zombie.health.toString()
  document.getElementById("hitId").innerText = zombie.hits.toString()
}

function punch() {
  zombie.health -= 5
  zombie.hits += 1
  if (zombie.health <= 0) {
    reset()
  }
  update()
}

function kick() {
  zombie.health -= 10
  zombie.hits += 1
  if (zombie.health <= 0) {
    reset()
  }
  update()
}

function reset() {
  zombie.health = 100
  zombie.hits = 0
  update()
}

/*function specialOne() {
  
}

function specialTwo() {
  
}

function specialThree() {

}