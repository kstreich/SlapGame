var health = 100;

function slap(num) {
  return (num - 1)
}

function update(healthAmount) {
  document.getElementById("health").innerHTML = healthAmount
}

update(health);