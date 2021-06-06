function init() {
  const scene = new THREE.Scene;

  const box = getBox(1, 1, 1);
  scene.add(box);

	const camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
  camera.position.x = 2; 
  camera.position.y = 1; 
  camera.position.z = 5; //box wasn't showing up. all origins are at 0,0,0. X and y normal cartesian, z is "depth" from user perspective

  camera.lookAt(new THREE.Vector3(0, 0, 0)); //add method to make the camera look at a point in space (in this case, origin); 

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

function getBox(w, h, d) {
  const geometry = new THREE.BoxGeometry(w, h, d); //basic shape in 3js, this is cube if passing 1, 1, 1
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });//mesh basic material is unaffected by lighting
  const mesh = new THREE.Mesh(
    geometry, //pass geometry and material vars to mesh to create object
    material
  );
  return mesh
}

init();