

//SETUP
const nearDist = 0.1;
const farDist = 5000;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	nearDist,
	farDist
);
camera.position.x = farDist * -2;
camera.position.z = 500;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#3d30c2"); // Backgrond Color - Blue
renderer.setPixelRatio(window.devicePixelRatio); // For HiDPI devices to prevent bluring output canvas
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#canvas-wrapper").appendChild(renderer.domElement);



// CREATE THINGIES
const cubeSize = 120;
const geometry = new THREE.SphereGeometry(cubeSize, cubeSize, cubeSize); // BufferAttribute allows for more efficient passing of data to the GPU

const growth = new THREE.TextureLoader();
const ball = new THREE.TextureLoader();
const guavas = new THREE.TextureLoader();
const ip = new THREE.TextureLoader();
const ipp = new THREE.TextureLoader();
const octo = new THREE.TextureLoader();
const orange = new THREE.TextureLoader();
const sponge = new THREE.TextureLoader();

const growthmat = new THREE.MeshBasicMaterial({
  map: growth.load("assets/icons/growth-swirl.png"), transparent: true
});
const ballmat = new THREE.MeshBasicMaterial({
  map: ball.load('assets/icons/growthball.png'), transparent: true
});
const guavasmat = new THREE.MeshBasicMaterial({
  map: guavas.load('assets/icons/guavas.png'), transparent: true
});
const ipmat = new THREE.MeshBasicMaterial({
  map: ip.load('assets/icons/ip.png'), transparent: true
});
const ippmat = new THREE.MeshBasicMaterial({
  map: ipp.load('assets/icons/ip2.png'), transparent: true
});
const octomat = new THREE.MeshBasicMaterial({
  map: octo.load('assets/icons/octo.png'), transparent: true
});
const orangemat = new THREE.MeshBasicMaterial({
  map: orange.load('assets/icons/orange-ip.png'), transparent: true
});
const spongemat = new THREE.MeshBasicMaterial({
  map: sponge.load('assets/icons/sponge-ip.png'), transparent: true
});

const skins = [growthmat, ballmat, guavasmat, ipmat, ippmat, octomat, orangemat, spongemat];

const material = new THREE.MeshNormalMaterial(); // Maps the normal vectors to RGB colors

const group = new THREE.Group();
for (let i = 0; i < 40; i++) {
	const mesh = new THREE.Mesh(geometry, skins[Math.floor(Math.random()*skins.length)]);
	const dist = farDist / 3;
	const distDouble = dist * 2;
	const tau = 2 * Math.PI; // One turn

	mesh.position.x = Math.random() * distDouble - dist;
	mesh.position.y = Math.random() * distDouble - dist;
	mesh.position.z = Math.random() * distDouble - dist;
	mesh.rotation.x = Math.random() * tau;
	mesh.rotation.y = Math.random() * tau;
	mesh.rotation.z = Math.random() * tau;
  let size = Math.random()*4 + 0.5;
  //mesh.scale(x : size, y : size, z : size);
  mesh.scale.x = size;
  mesh.scale.y = size;
  mesh.scale.z = size;

	// Manually control when 3D transformations recalculation occurs for better performance
	mesh.matrixAutoUpdate = false;
	mesh.updateMatrix();

	group.add(mesh);
}
scene.add(group);




// CREATE PART OF THE MOUSE/TOUCH OVER EFFECT
let mouseX = 0;
let mouseY = 0;
var movement;
const mouseFX = {
	windowHalfX: window.innerWidth / 2,
	windowHalfY: window.innerHeight / 2,
	coordinates: function(coordX, coordY) {
		mouseX = (coordX - mouseFX.windowHalfX) * 10;
		mouseY = (coordY - mouseFX.windowHalfY) * 10;
	},
	onMouseMove: function(e) {
		mouseFX.coordinates(e.clientX, e.clientY);
		movement = 10/(Math.sqrt( Math.pow(mouseX, 2) + Math.pow(mouseY, 2)));
		console.log(movement);
	},
	onTouchMove: function(e) {
		mouseFX.coordinates(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
	}
};
document.addEventListener("mousemove", mouseFX.onMouseMove, false);
document.addEventListener("touchmove", mouseFX.onTouchMove, false);



// RENDER 3D GRAPHIC
const render = (ts) => {
	requestAnimationFrame(render);

	// Works with onMouseMove and onTouchMove functions
	camera.position.x += (mouseX - camera.position.x) * 0.05;
	camera.position.y += (mouseY * -1 - camera.position.y) * 0.05;
	camera.lookAt(scene.position); // Rotates the object to face a point in world space

	const t = Date.now() * 0.001;
	const rx = Math.sin(t * 0.7) * 0.5;
	const ry = Math.sin(t * 0.3) * 0.5;
	const rz = Math.sin(t * 0.2) * 0.5;
	group.rotation.x = rx;
	group.rotation.y = ry;
	group.rotation.z = rz;
	group.scale.x = 1 + movement*Math.sin(ts/100);
	// textMesh.rotation.x = rx;
	// textMesh.rotation.y = ry;
	// textMesh.rotation.z = rx; // Happy accident :)

	renderer.render(scene, camera);
};
render();






// CREATE TYPOGRAPHY
// const loader = new THREE.FontLoader();
// const textMesh = new THREE.Mesh();
// const createTypo = font => {
// 	const word = "claggy";
// 	const typoProperties = {
// 		font: font,
// 		size: cubeSize,
// 		height: cubeSize / 2,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 6,
// 		bevelOffset: 1,
// 		bevelSegments: 8
// 	};
// 	const text = new THREE.TextGeometry(word, typoProperties);
// 	textMesh.geometry = text;
// 	textMesh.material = material;
// 	textMesh.position.x = cubeSize * -2;
// 	textMesh.position.z = cubeSize * -1;
// 	scene.add(textMesh);
// };
// loader.load(
// 	"https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
// 	createTypo
// );
