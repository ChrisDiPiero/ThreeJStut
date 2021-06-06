function init() {
const scene = new THREE.Scene(); //container for all objects this IS the world

  const camera = new THREE.PerspectiveCamera( //also need a camera for POV
    45, // field of view. how much of the Scene
    window.innerWidth/window.innerHeight, //aspect ratio
    1, // near clipping plane
    1000 // far clipping plane
  );

  const renderer = new THREE.WebGLRenderer(); //there are other renderers for browsers that don't support webgl, they suck
  renderer.setSize(window.innerWidth, window.innerHeight); //makes renderer size of the window
  document.getElementById('webgl').appendChild(renderer.domElement); //append renderer to the DOM

  renderer.render( //render the scene by passing the scene and camera to the renderer
    scene,
    camera
  )
}

init();