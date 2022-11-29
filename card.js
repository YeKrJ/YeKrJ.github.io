class Card {
  constructor(igD, igA, igS) {
    this.scale = 0.7;
    this.width = 105*this.scale;
    this.height = 185*this.scale;
    this.x = -this.width/2;
    this.y = -this.height/2;
    this.igD = igD;
    this.igA = igA;
    this.igS = igS;
    this.ig = igD;
  }
  
  display() {
    image(this.ig, this.x, this.y, this.width, this.height);
  }
  
  move(rot, pos, i, j) {
    this.x = -this.width/2;
    this.y = -this.height/2;
    push()
    translate(pos[j], pos[j+1])
    rotate(rot[i]);
    image(this.ig, this.x, this.y, this.width, this.height);
    pop();
  }
  
  over(pos, j) {
    this.x += pos[j];
    this.y += pos[j+1]
    if (mouseX > this.x && mouseX < this.x+this.width/2 && mouseY > this.y && mouseY < this.y+this.height) {
      this.ig = this.igA;
    } else {
      this.ig = this.igD;
    }
  }
  
  click() {
      this.ig = this.igS;
  }
}