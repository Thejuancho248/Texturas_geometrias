const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8214F7)
var loader = new THREE.TextureLoader();
loader.load(
    '../wallpeper-ff7.jpeg',function(texture){
        scene.background = texture;
    }
);   

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2.5, 2.5, 2.5 );
const TextureLoader = new THREE.TextureLoader
const matcap = TextureLoader.load('../texturas-geometrias/background-made-from-bricks.jpg')
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatshading = true;

const cube = new THREE.Mesh( geometry, material);
scene.add( cube );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000} ) );
scene.add( cube );

camera.position.z = 5;


function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.03;
    cube.rotation.y += 0.03;
    cube.rotation.z += 0.03;
    line.rotation.x += 0.03;
    line.rotation.y += 0.03;
    line.rotation.z += 0.03;
}
animate();

