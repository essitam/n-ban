
let rects = [];
let icons, tracks;
let growth, ball, guavas, ip, ipp, octo, orange, sponge, limbo;
let ephem, latlm, nban, ozone, claggy, edgeops, hcs, ouro, rooibos;

function preload(){
  growth = loadImage('assets/icons/growth-swirl.png');
  ball = loadImage('assets/icons/growthball.png');
  guavas = loadImage('assets/icons/guavas.png');
  ip = loadImage('assets/icons/ip.png');
  ipp = loadImage('assets/icons/ip2.png');
  octo = loadImage('assets/icons/octo.png');
  orange = loadImage('assets/icons/orange-ip.png');
  sponge = loadImage('assets/icons/sponge-ip.png');
  limbo = loadImage('assets/icons/limbo.png');
  //load soundfile
  ephem = loadSound('assets/tracks/01 Ephemeral U.mp3');
  latlm = loadSound('assets/tracks/02 Let A Thing Like Me.mp3');
  nban = loadSound('assets/tracks/03 Non-Being Ad Nauseam.mp3');
  ozone = loadSound('assets/tracks/04 Ozone Delicious.mp3');
  claggy = loadSound('assets/tracks/05 Claggy.mp3');
  edgeops = loadSound('assets/tracks/06 Edge Operators.mp3');
  hcs = loadSound('assets/tracks/07 Hiding Clump Spirit.mp3');
  ouro = loadSound('assets/tracks/08 Ouroboros.mp3');
  rooibos = loadSound('assets/tracks/09 Rooibos.mp3');
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  c.parent('p5Div');

  icons = [growth, ball, guavas, ip, ipp, octo, orange, sponge, limbo];
  tracks = [ephem, latlm, nban, ozone, claggy, edgeops, hcs, ouro, rooibos];
  grad = ["ephem", "latlm", "nban", "ozone", "claggy", "edgeops", "hcs", "ouro", "rooibos"];

  for (i = 0; i < icons.length; i++) {
    rects[i] = new Icon(icons[i], tracks[i], random(50, 80), random(50,windowWidth-80), random(50,windowHeight-80), null, grad[i]);
  }

  let newPatch = createDiv('non-being ad nauseam');
  newPatch.class('hangin');
  newPatch.position(random(200, windowWidth-200),random(200, windowHeight-200));
  newPatch.html('<a href="https://drive.google.com/open?id=1SmoPo8vcsw3cJuPEpkE2-K1JwC8OdcXl" target="_blank" style="text-decoration:none;">non-being ad nauseam<a>');
  newPatch.mousePressed(freshStart);

  let coverdiv = document.getElementById("cover");
  coverdiv.style.height = "0px";
  coverdiv.style.width = "0px";
  coverdiv.innerHTML = "";

  animate();
}

function trigSound(buf, grad) {
  buf.play(0, 1.0, 1.0, 0, buf.duration());
  var gradient = document.body;
  //var hex = String(this.buf);
  gradient.className = '';
  gradient.classList.add(grad);
}

function freshStart() {
  clear();
  for(i=0; i<tracks.length; i++){
    tracks[i].stop();
  }
}


function mousePressed(){
  for (j=0; j<rects.length; j++){
    rects[j].clicked();
    rects[j].intersected();
  }
}

function draw() {
  for (j=0; j<rects.length; j++){
    rects[j].display();
  }
}
