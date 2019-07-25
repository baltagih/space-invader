class Targetline {
  constructor() {
    this.width = 2
    this.height = 250
    this.location = createVector(mouseX, mouseY)
  }

  display() {
    strokeWeight(1)
    stroke(71)
    line(this.location.x, this.location.y, this.location.x, this.location.y - this.height)
  }

  update() {
    this.location.x = mouseX
    this.location.y = mouseY - 15
  }
}
