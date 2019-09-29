class Thingie {
  constructor(modL, img, size, xpos, ypos, xrate, yrate) {
    this.modL = modL;
    this.img = img;
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.xrate = xrate;
    this.yrate = yrate;

  }
  gloop(){
    scale(this.size);
    texture(this.img);
    stroke(255);
    model(this.modL);
  }
  move() {
    translate((millis()*this.xrate)% 1200 - 600 + this.xpos, (millis()*this.yrate)% 1200 - 600 + this.ypos);
  }
  rot_ate(){
    rotateX((millis()/1000)*(PI / (4.0*(1+this.xrate))) + radians(180));
    rotateY((millis()/1000)*(PI / (3.0*(1+this.yrate))));
  }
}
