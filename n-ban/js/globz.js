class Glob {
 constructor(img, rad, xdet, ydet, xpos, ypos, xrate, yrate) {
   this.img = img;
   this.rad = rad;
   this.xdet = xdet;
   this.ydet = ydet;
   this.xpos = xpos;
   this.ypos = ypos;
   this.xrate = xrate;
   this.yrate = yrate;
 }
  gloop(){
    texture(this.img);
    noStroke();
    sphere(this.rad, this.xdet, this.ydet);
  }
   move() {
     translate((millis()*this.xrate)% 1200 - 600 + this.xpos, (millis()*this.yrate)% 1200 - 600 + this.ypos);
   }
   rot_ate(){
     rotateX((millis()/1000)*(PI / (30.0*(1+this.xrate))) + radians(180));
     rotateY((millis()/1000)*(PI / (3.0*(1+this.yrate))));
   }
}
