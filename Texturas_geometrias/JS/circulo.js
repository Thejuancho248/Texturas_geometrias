const scene = new THREE.Scene();
scene.background = new THREE.Color(0xDEEDF9)
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CircleGeometry( 15, 50 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/brown-wooden-flooring.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;

const circle = new THREE.Mesh( geometry, material );
scene.add( circle );
camera.position.z = 40;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( circle );



function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    circle.rotation.x += 0.01;
    circle.rotation.y += 0.01;
    circle.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
}
animate(); 