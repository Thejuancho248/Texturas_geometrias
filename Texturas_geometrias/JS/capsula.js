const scene = new THREE.Scene();
scene.background = new THREE.Color('hsl(272, 72%, 57%)')
scene.fog = new THREE.Fog(0x1B32FF, 45, 45);
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
   
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/beautiful-closeup-shot-of-brown-fresh-black-coffee-beans.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;

const capsule = new THREE.Mesh( geometry, material);
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x920f84 } ) );
scene.add( capsule );
camera.position.z = 5;



function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    capsule.rotation.x += 0.05;
    capsule.rotation.y += 0.05;
    capsule.rotation.z += 0.05;
    line.rotation.x += 0.05;
    line.rotation.y += 0.05;
    line.rotation.z += 0.05;
}
animate();