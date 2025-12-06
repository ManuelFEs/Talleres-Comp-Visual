import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

document.body.style.margin = '0';

// Canvas
const canvas = document.createElement('canvas');
canvas.id = 'three-canvas';
document.body.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.setClearColor(0x202020);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(3, 2, 4);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const materialCube = new THREE.MeshStandardMaterial({ color: 0x156289, emissive: 0x072534, roughness: 0.6, metalness: 0.1 });
const cube = new THREE.Mesh(geometry, materialCube);
scene.add(cube);
cube.position.set(0, 1, 0);


// Cone
const triGeometry = new THREE.ConeGeometry(1, 2);
const textureLoaderTri = new THREE.TextureLoader();
const triTexture = textureLoaderTri.load('./textures/metal.jpg');
triTexture.wrapS = triTexture.wrapT = THREE.RepeatWrapping;
triTexture.repeat.set(1, 1);
const materialTri = new THREE.MeshStandardMaterial({ map: triTexture, side: THREE.DoubleSide, metalness: 0.9 , roughness: 0.2 });
const triangle = new THREE.Mesh(triGeometry, materialTri);
scene.add(triangle);
triangle.position.set(-2, 1.8, 0);

// Ground texture
const grid = new THREE.GridHelper(10, 10, 0x444444, 0x222222);
scene.add(grid);
const planeGeometry = new THREE.PlaneGeometry(10, 10);
const textureLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load('./textures/floor.jpg');
floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(4, 4);

const planeMaterial = new THREE.MeshStandardMaterial({ map: floorTexture, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Light
const ambient = new THREE.AmbientLight(0x00ff2a, 0.6);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xff0000, 1.8);
dir.position.set(5, 8, 7);
dir.castShadow = true;
scene.add(dir);


// Resize handler
function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight, false);
}
window.addEventListener('resize', onWindowResize);

// Animation cube
const clock = new THREE.Clock();
function animate() {
	requestAnimationFrame(animate);
	const t = clock.getElapsedTime();
	cube.rotation.x = t * 0.5;
	cube.rotation.y = t * 0.7;
	controls.update();
	renderer.render(scene, camera);
}

// Animation cone
const clockCone = new THREE.Clock();

function animateCone() {
    requestAnimationFrame(animateCone);
    const t = clockCone.getElapsedTime();
    triangle.rotation.x = t * 0.3;
    triangle.rotation.y = t * 0.4;
    controls.update();
    renderer.render(scene, camera);
}

// Camera fixed positions
window.addEventListener('keydown', function(event) {
    if (event.key === 'e') {
        camera.position.set(5, 5, 5);
        camera.lookAt(0, 0, 0);
    }
});

window.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        camera.position.set(-5, 5, 5);
        camera.lookAt(0, 0, 0);
    }
});


// Initial camera position
camera.position.set(5, 5, 5);
camera.lookAt(0, 0, 0);



animateCone();

animate();

