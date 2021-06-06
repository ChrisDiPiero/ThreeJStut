function init() {
	const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1); //basic shape in 3js, this is cube
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });//mesh basic material is unaffected by lighting

	const camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(
		scene,
		camera 
	);
}

init();