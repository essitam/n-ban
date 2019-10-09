
function preload() {

arp = loadSound("assets/buffers/arp.mp3");
buoys = loadSound("assets/buffers/buoyverse.mp3");
crispy = loadSound("assets/buffers/crispykeys.mp3");
globbin = loadSound("assets/buffers/globz.mp3");
maap = loadSound("assets/buffers/maap.mp3");

}

function trigSound(buf) {
buf.play(0, 1.0, 1.0, 0, buf.duration());
}
