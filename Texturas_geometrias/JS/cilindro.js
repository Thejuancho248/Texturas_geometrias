const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff)
var loader = new THREE.TextureLoader();
loader.load(
    '../pizza.jpeg',function(texture){
        scene.background = texture;
    }
);   


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.CylinderGeometry( 5, 5, 12, 30);
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/black-and-white-details-of-moon-texture-concept.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const geometry2 = new THREE.CylinderGeometry( 5, 5, 12, 30);
const TextureLoader2 = new THREE.TextureLoader
const matcap2 = TextureLoader.load('../texturas-geometrias/black-and-white-details-of-moon-texture-concept.jpg')
const material2 = new THREE.MeshMatcapMaterial();
material2.matcap = matcap;
material2.flatshading = true;
const cylinder2 = new THREE.Mesh( geometry, material );
scene.add( cylinder2 );

const geometry3 = new THREE.CylinderGeometry( 5, 5, 12, 30);
const TextureLoader3 = new THREE.TextureLoader
const matcap3 = TextureLoader.load('../texturas-geometrias/black-and-white-details-of-moon-texture-concept.jpg')
const material3 = new THREE.MeshMatcapMaterial();
material3.matcap = matcap;
material3.flatshading = true;
const cylinder3 = new THREE.Mesh( geometry, material );
scene.add( cylinder3 );

const geometry4 = new THREE.CylinderGeometry( 5, 5, 12, 30);
const TextureLoader4 = new THREE.TextureLoader
const matcap4 = TextureLoader.load('../texturas-geometrias/black-and-white-details-of-moon-texture-concept.jpg')
const material4 = new THREE.MeshMatcapMaterial();
material4.matcap = matcap;
material4.flatshading = true;
const cylinder4 = new THREE.Mesh( geometry, material );
scene.add( cylinder4 );


cylinder.position.x = 15;
cylinder2.position.y = -15;
cylinder3.position.y = 15;
cylinder4.position.x = -15;



const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( cylinder );

/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 3;
control.maxDistance = 10; */

let objects = [ cylinder, cylinder2, cylinder3, cylinder4 ];


/* const control = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById('boton').onclick = () => {
    control.lock();
}
 */
const controls = new THREE.DragControls( [cylinder, cylinder2, cylinder3, cylinder4], camera, renderer.domElement);

scene.add( cylinder, cylinder2, cylinder3)

camera.position.z = 40;

function animate() {
    requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cylinder.rotation.x += 0.05;
    cylinder.rotation.y += 0.05;
    cylinder.rotation.z += 0.05;
    cylinder2.rotation.x += 0.05;
    cylinder2.rotation.y += 0.05;
    cylinder2.rotation.z += 0.05;
    cylinder3.rotation.x += 0.05;
    cylinder3.rotation.y += 0.05;
    cylinder3.rotation.z += 0.05;
    cylinder4.rotation.x += 0.05;
    cylinder4.rotation.y += 0.05;
    cylinder4.rotation.z += 0.05;
    line.rotation.x += 0.05;
    line.rotation.y += 0.05;
    line.rotation.z += 0.05;
}
animate();