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

init();