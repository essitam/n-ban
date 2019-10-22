
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
  ephem = loadSound('assets/tracks/Ephemeral U 17-12-08.mp3');
  latlm = loadSound('assets/tracks/Let A Thing Like Me.mp3');
  nban = loadSound('assets/tracks/Non-Being Ad Nauseam.mp3');
  ozone = loadSound('assets/tracks/Ozone Delicious 19-02-28.mp3');
  claggy = loadSound('assets/tracks/Claggy 18-12-07.mp3');
  edgeops = loadSound('assets/tracks/Edge Operators 19-10-21.mp3');
  hcs = loadSound('assets/tracks/Hiding Clump Spirit 19-10-21.mp3');
  ouro = loadSound('assets/tracks/Ouroboros 18-06-30-02.mp3');
  rooibos = loadSound('assets/tracks/Rooibos 19-10-21.mp3');
}

function setup() {
  var c = createCanvas(windowWidth, windowHeight);
  c.parent('p5Div');

  icons = [growth, ball, guavas, ip, ipp, octo, orange, sponge, limbo];
  tracks = [ephem, latlm, nban, ozone, claggy, edgeops, hcs, ouro, rooibos];
  grad = ["ephem", "latlm", "nban", "ozone", "claggy", "edgeops", "hcs", "ouro", "rooibos"];

  // ephem.onended(trigSound(latlm, "latlm"));
  // latlm.onended(trigSound(nban, "nban"));
  // nban.onended(trigSound(ozone, "ozone"));
  // ozone.onended(trigSound(claggy, "claggy"));
  // claggy.onended(trigSound(edgeops, "edgeops"));
  // edgeops.onended(trigSound(hcs, "hcs"));
  // hcs.onended(trigSound(ouro, "ouro"));
  // ouro.onended(trigSound(rooibos, "rooibos"));
  // rooibos.onended(trigSound(ephem, "ephem"));

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
