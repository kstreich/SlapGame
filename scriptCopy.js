/*var health = 100;
var opponent = "Zombie"
var hits = 0;

var fire = {
  name: "fire",
  modifier: 2,
  description: "it burns!"
}

function slap() {
  health -= 1
  update()
  hitsCount()

}

function update() {
  document.getElementById("health").innerText = health.toString()
  document.getElementById("hitId").innerText = hits.toString()

}

function punch() {
  health -= 5
  update()
  hitsCount()

}

function kick() {
  health -= 10
  update()
  hitsCount()

}

function reset() {
  if (health <= 0) {
    health = 100
    hits = 0
  }
  update()
}

function hitsCount() {
  hits += 1
}