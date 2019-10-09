let width = 1200;
let height = 1000;
let growth;
let splash;
let glooper;
let globz = [];
let thingies = [];

function preload(){
  growth = loadImage("assets/icons/growth-swirl.png");
  splash = loadImage("assets/icons/growthball.png");
  ip = loadImage("assets/icons/ip.png");

  teapot = loadModel('assets/teapot.obj', true);
}

function setup() {
  createCanvas(width, height, WEBGL);
  for(let i = 0; i < 5; i++) {
    globz[i] = new Glob(growth, random(50, 100), 24, 24, random(0, 20), random(0, 20), random(0.1, 0.3), random(0.1, 0.3));
    globz[i+5] = new Glob(splash, random(10, 25), 24, 24, random(0, 20), random(0, 20), random(0.1, 0.3), random(0.1, 0.3));
  }
  for(let j = 0; j < 3; j++) {
    thingies[j] = new Thingie(teapot, growth, random(0.2, 1.5), random(20, 40), random(10, 80), random(0.05, 0.3), random(0.05, 0.2));
  }
}

function draw() {
  background(0);


  for(let k = 0; k < 10; k++) {
    push();
    globz[k].move();
    globz[k].rot_ate();
    globz[k].gloop();
    pop();
  }

  for(let l = 0; l < 3; l++) {
    push();
    thingies[l].move();
    thingies[l].rot_ate();
    thingies[l].gloop();
    pop();
  }

}
