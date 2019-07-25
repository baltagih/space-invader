class Monster {
  constructor(x, y, speed) {
    this.width = 27
    this.height = 27
    this.speed = speed
    this.location = createVector(x, y)
    this.color = color(0, 255, 0)
    this.velocity = createVector(0, this.speed)

  }

  display() {
    fill(this.color)
    rect(this.location.x, this.location.y, this.width, this.height)
  }

  update() {
    this.location.add(this.velocity)
  }

  isColliding(weapon) {
    if(this.location.x > 0 && this.location.x < width && this.location.y > 0){
      return collideRectCircle(this.location.x, this.location.y, this.width, this.height, weapon.location.x, weapon.location.y, weapon.width,weapon.height);
    }
    else{
      return false
    }
  }

  belowBottom() {
    return this.location.y - this.height > height
  }
}
