const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.ConeGeometry( 10, 30, 42 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/view-of-white-crumpled-paper.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFAF502} ) );
scene.add( cone );
camera.position.z = 50;



function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    cone.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
}
animate();