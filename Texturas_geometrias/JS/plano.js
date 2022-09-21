const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
scene.fog = new THREE.Fog(0x1B32FF, 45, 45);
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.PlaneGeometry( 1, 1 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/Textura-de-las-hojas.jpeg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );
camera.position.z = 35;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( line );
camera.position.z = 2;



function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    plane.rotation.x += 0.01;
    plane.rotation.y += 0.01;
    plane.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
}
animate();