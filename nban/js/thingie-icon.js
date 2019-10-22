class Icon{
  constructor(img, buf, size, xpos, ypos, hit, grad){
  this.img = img;
  this.buf = buf;
  this.width = size;
  this.height = size;
  this.xpos = xpos;
  this.ypos = ypos;
  this.hit = false;
  this.grad = grad;
  }
  clicked(){
    this.offsetX = this.xpos - pmouseX;
    this.offsetY = this.ypos - pmouseY;
  }
  intersected() {
    if (pmouseX > this.xpos && pmouseX < (this.xpos + this.width) && pmouseY > this.ypos && pmouseY < (this.ypos + this.height)) {
      this.hit = true;
    } else {
      this.hit = false;
    }
  }
  display() {
    if (this.hit) {
      if (mouseIsPressed){
        this.xpos = pmouseX + this.offsetX;
        this.ypos = pmouseY + this.offsetY;
        if (ephem.isPlaying() || latlm.isPlaying() || nban.isPlaying() || ozone.isPlaying() || claggy.isPlaying() || edgeops.isPlaying() || hcs.isPlaying() || ouro.isPlaying() || rooibos.isPlaying() ){
        } else {
          this.buf.play(0, 1.0, 1.0, 0, this.buf.duration());
          var gradient = document.body;
          //var hex = String(this.buf);
          gradient.className = '';
          gradient.classList.add(this.grad);
        }
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
