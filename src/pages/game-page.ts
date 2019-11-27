import * as THREE from "three"
export default class GamePage {
    private callbacks: any;
    constructor(callbacks: any) {
        this.callbacks = callbacks;
    }
    public init() {
        console.log('game page init')
        var scene = new THREE.Scene();
        var aspect = window.innerWidth / window.innerHeight;
        var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);


        var geometry = new THREE.BoxGeometry(10, 10, 10);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);
        camera.position.z = 20;

        var render = function () {
            requestAnimationFrame(render);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        var onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        window.addEventListener('resize', onWindowResize, false)
        render();
        setTimeout(() => {
            this.callbacks.showGameOverPage();
        }, 2000);
    }
    restart() {
        console.log('game page restart')
    }
}