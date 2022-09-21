const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry( 15, 32, 16 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/summer-background-of-sea-water.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );
camera.position.z = 35;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff} ) );
scene.add( line );




function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    /*sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
    matcap.rotation.x += 0.01;
    matcap.rotation.y += 0.01;
    matcap.rotation.z += 0.01;*/
}
animate();