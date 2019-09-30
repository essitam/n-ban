class Icon{
  constructor(img, size, xpos, ypos, hit){
  this.img = img;
  this.width = size;
  this.height = size;
  this.xpos = xpos;
  this.ypos = ypos;
  this.hit = false;
  }
  clicked(){
    this.offsetX = this.xpos - mouseX;
    this.offsetY = this.ypos - mouseY;
  }
  intersected() {
    if (mouseX > this.xpos && mouseX < (this.xpos + this.width) && mouseY > this.ypos && mouseY < (this.ypos + this.height)) {
      this.hit = true;
    } else {
      this.hit = false;
    }
  }
  display() {
    if (this.hit) {
      if (mouseIsPressed){
        this.xpos = mouseX + this.offsetX;
        this.ypos = mouseY + this.offsetY;
      }
      push();
      image(this.img, this.xpos, this.ypos, this.width, this.height);
      pop();
    } else {
      push();
      image(this.img, this.xpos, this.ypos, this.width, this.height);
      pop();
    }
  }
}
