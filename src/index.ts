
import * as THREE from "three"
console.log('index');
class Threescene {
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    controls: any
    clock: THREE.Clock = new THREE.Clock()
    constructor() {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
        this.renderer = new THREE.WebGLRenderer()
        // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
        this.init()
        window.addEventListener('resize', this.onWindowResize, false)
    }
   
  
    private init() {
        this.camera.position.set(-40, 40, 40)
        this.camera.lookAt(this.scene.position)
        this.renderer.setClearColor(0x222222)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(this.renderer.domElement);
        this.scene.add(new THREE.AxesHelper(10))
        this.linght()
        this.animate()
    }
    private linght() {
        let light = new THREE.AmbientLight(0xFFFFFF, 1)
        this.scene.add(light)
    }
    private onWindowResize = () => {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    private render() {
        let delta = this.clock.getDelta()
        this.renderer.render(this.scene, this.camera)
        this.controls.update(delta);
       
    }
    private animate = () => {
        requestAnimationFrame(this.animate)
        this.render()
    }
}

