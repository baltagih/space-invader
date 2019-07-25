class Weapon {
  constructor() {
    this.width = 30
    this.height = 20
    this.color = color(255)
    this.location = createVector(mouseX, mouseY)

  }

  display() {
    fill(this.color)
    rect(this.location.x - 8, this.location.y - 8, this.width, this.height)
  }

  update() {
    this.location.x = mouseX - 8
    this.location.y = mouseY - 8
  }

}
