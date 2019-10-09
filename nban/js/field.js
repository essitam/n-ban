var camera, renderer, scene, raycaster;
var radius = 100, theta = 0;
var mouse = new THREE.Vector2(), INTERSECTED;
init();
animate();

function init(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 2000 );
  // camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 2000 );


  var growth = new THREE.SphereGeometry( 1, 24, 24 );
  // const loader = new THREE.TextureLoader();
  // const material = new THREE.MeshBasicMaterial({
  //   map: loader.load("assets/growth-swirl.jpg"),
  // });
  // const material = ;

  for ( var i = 0; i < 100; i ++ ) {
      var glob = new THREE.Mesh( growth, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff }) );
      glob.position.x = Math.random() * 200 - 100;
      glob.position.y = Math.random() * 200 - 100;
      glob.position.z = (-100)*Math.random();
      glob.rotation.x = Math.random() * 2 * Math.PI;
      glob.rotation.y = Math.random() * 2 * Math.PI;
      glob.rotation.z = Math.random() * 2 * Math.PI;
      glob.scale.x = Math.random() + 1.5;
      glob.scale.y = Math.random() + 1.5;
      glob.scale.z = Math.random() + 1.5;
      scene.add(glob);
    }

    raycaster = new THREE.Raycaster();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setPixelRatio( window.devicePixelRatio );
    document.body.appendChild( renderer.domElement );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );

    // camera.position.set(0, 0, 200);


}
function onDocumentMouseMove( event ) {
event.preventDefault();
mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}


        function animate () {
  requestAnimationFrame(animate);

  // glob.rotation.x += 0.01;
  // glob.rotation.y += 0.01;
  //
  // glob.position.set(2*Math.sin(ts/1000), 2*Math.cos(ts/1000), 0);
          render();
}
function render () {
  theta += 0.1;
          camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
          camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
          camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
          camera.lookAt( scene.position );
          camera.updateMatrixWorld();
          raycaster.setFromCamera( mouse, camera );
                  var intersects = raycaster.intersectObjects( scene.children );
                  if ( intersects.length > 0 ) {
                    if ( INTERSECTED != intersects[ 0 ].glob ) {
                      if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                      INTERSECTED = intersects[ 0 ].glob;
                      INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                      INTERSECTED.material.emissive.setHex( 0xff0000 );
                    }
                  } else {
                    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
                    INTERSECTED = null;
                  }
  renderer.render(scene, camera);


}
