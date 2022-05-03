// Scene
const scene = new THREE.Scene()

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Camera
const sizes = {
  width: 800,
  height: 500
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl")
})
renderer.setSize(sizes.width, sizes.height);

// Add things to scene
scene.add(mesh)
scene.add(camera)

// Renderer
renderer.render(scene, camera)


