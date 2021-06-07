function init() {
  const scene = new THREE.Scene;

  const box = getBox(1, 1, 1);
  const plane = getPlane(4);
  box.position.y = box.geometry.parameters.height/2; //moving the box up by half of it's height(along y) will put bottom on plane
  plane.rotation.x = Math.PI/2; //three js uses radians. 90 degrees is not 90 degrees. Math.PI/2 is 90 degrees

  scene.add(box);
  scene.add(plane);

	const camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
  camera.position.x = 2; 
  camera.position.y = 1; 
  camera.position.z = 5;

  camera.lookAt(new THREE.Vector3(0, 0, 0));

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

function getBox(w, h, d) {
  const geometry = new THREE.BoxGeometry(w, h, d);
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  const mesh = new THREE.Mesh(
    geometry,
    material
  );
  return mesh
}

function getPlane(size) { //duplicated get box as it will use the same code
  const geometry = new THREE.PlaneGeometry(size, size); //only takes 2 args, w + d, can use same value if square
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(
    geometry,
    material
  );
  return mesh
}

init();