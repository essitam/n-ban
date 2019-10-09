

// create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add(listener);

// create a global audio source
var arp = new THREE.Audio(listener);
var arpLoader = new THREE.AudioLoader();
arpLoader.load("assets/buffers/arp.mp3", function(buffer) { arp.setBuffer(buffer); });

function trigSound(buf){
	buf.setVolume( 1.0 );
	buf.play();
}



arp = loadSound("assets/buffers/arp.mp3");
buoys = loadSound("assets/buffers/buoyverse.mp3");
crispy = loadSound("assets/buffers/crispykeys.mp3");
globbin = loadSound("assets/buffers/globz.mp3");
maap = loadSound("assets/buffers/maap.mp3");
