const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
var loader = new THREE.TextureLoader();
;   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshStandardMaterial({color: 0x666666});
const torus = new THREE.Mesh(geometry, material)
material.metalness = 1;
material.roughness = 0.2;
const  DirectionalLight = new THREE.DirectionalLight(0xffffff, 250);
scene.add(DirectionalLight);
scene.background = new THREE.Color(0xeeeeee);
scene.add( torus );

camera.position.z = 35;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff} ) );
scene.add( line );


function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    torus.rotation.z += 0.01;
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
    line.rotation.z += 0.01;
    matcap.rotation.x += 0.01;
    matcap.rotation.y += 0.01;
    matcap.rotation.z += 0.01;
}
animate();