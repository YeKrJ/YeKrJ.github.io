class Button {
  constructor (x,y,w,h,imgA,imgP) {
  this.x = x*wX;
  this.y = y*wX;
  this.width = w*wX;
  this.height = h*wX;
  this.img = imgP;
  this.imgA = imgA;
  this.imgP = imgP;
}
  
  display() {
  image(this.img, this.x, this.y, this.width, this.height);
  }
  
  over() {
    if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height) {
      this.img = this.imgA;
    } else {
      this.img = this.imgP;
    }
  }
  
  click() {
    if(mouseX > this.x && mouseX < this.x+this.width && mouseY > this.y && mouseY < this.y+this.height) {
      return true;
    }
  }
  
}