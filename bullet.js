class Bullet {
  constructor(x, y) {
    this.radius = 10
    this.speed = 10
    this.location = createVector(x, y)
    this.color = color(255, 0, 0)
    this.velocity = createVector(0, -this.speed)
  }
  display() {
    fill(this.color)
    ellipse(this.location.x, this.location.y, this.radius)
  }

  update() {
    this.location.add(this.velocity)
  }

  isColliding(monster) {
    if(monster.location.x > 0 && monster.location.x < width && monster.location.y > 0){
      return collideRectCircle(monster.location.x, monster.location.y, monster.width, monster.height, this.location.x, this.location.y, this.radius);
    }
    else{
      return false
    }
  }
}
