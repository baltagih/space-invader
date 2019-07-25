// be able to shoot multiple bullets
// random speeds for monsters
let playerScore = 0
let weapon
let gameState
let monsters = []
let bullet = []
let targetLine
let randomness

function setup() {
  createCanvas(800, 650)
  gameState = 'playing'
  weapon = new Weapon()
  targetLine = new Targetline()
  randomness = 0.015
}

function createMonsters() {
  let x = (Math.random() * (width - 70) + 40)
  let y = -(Math.random() * 50) - 100
  let speed = (Math.random() + 1)
  return new Monster(x, y, speed)
}

function mouseClicked() {
  bullet.push(new Bullet(mouseX, mouseY))
}

function restart() {
  delete weapon
  delete bullet
  delete targetLine
  playerScore = 0
  weapon = new Weapon()
  gameState = 'playing'
  monsters = []
  bullet = []
  targetLine = new Targetline()
  randomness = 0.015
}


function draw() {
  if (gameState === 'playing') {
    background(0)

    if (Math.random() < randomness) {
      monsters.push(createMonsters())
    }



    weapon.display()
    weapon.update()
    targetLine.display()
    targetLine.update()


    for (var i = 0; i < monsters.length; i++) {
      monsters[i].display()
      monsters[i].update()
      if (monsters[i].belowBottom() || monsters[i].isColliding(weapon)) {
        gameState = 'Lose'
      }
      for (var j = 0; j < bullet.length; j++) {
        bullet[j].display()
        bullet[j].update()
        if (bullet[j].isColliding(monsters[i])) {
          monsters.splice(i, 1)
          bullet.splice(j,1)
          playerScore++
        }
        if (bullet[j] && bullet[j].location.y < -100) {
          bullet.splice(j, 1)
        }
      }
      if (monsters.length <= 2) {
        monsters.push(createMonsters())
      }
    }

    if (playerScore >= 100) {
      gameState = 'Win'
    }
    if (playerScore > 0 && playerScore % 10 == 0) {
      randomness = randomness * 1.07
      playerScore++
    }

    textSize(32)
    fill(169, 169, 169)
    text(`Score:${playerScore}`, width / 2 - width / 15, height / 2 + height / 3)


  } else {
    textSize(100)
    gameState === 'Lose' ? fill(255) : fill(0, 0, 255)
    text(`You ${gameState}!!!`, width / 2 - 220, height / 2 + height / 7)
  }
}
