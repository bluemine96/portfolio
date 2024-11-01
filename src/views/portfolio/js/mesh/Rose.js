import * as THREE from "three";
import gltfLoader from "@/three/gltfLoader";

export default class Rose{
    constructor(
        scene,
        camera,
        control,
        mixers,
    ){
        this.scene = scene;
        this.camera = camera;
        this.control = control;
        this.mixers = mixers;

        const glassMaterial = new THREE.MeshPhysicalMaterial({
            color: 0x81E8FF,
            metalness: 0.3,
            roughness: 0.1,
            reflectivity: 0.8,
            sheen: 0.5,
            sheenRoughness: 0.2,
            thickness: 0.8,
            transmission: 0.9,
            ior: 1.8,
        })

        // const geometry = new THREE.PlaneGeometry( 200, 200 );
		// const material = new THREE.MeshPhongMaterial( { 
        //     color: 0x0F1217,
        //     roughness: 0.3,
        //     metalness: 0.8 
        // } );

		// this.ground = new THREE.Mesh( geometry, material );
		// this.ground.position.set( 0, - 1, 0 );
		// this.ground.rotation.x = - Math.PI / 2;
		// this.ground.receiveShadow = true;
		// this.scene.add( this.ground );
        // this.ground.visible = false;

        gltfLoader.load("../../model/玫瑰3.glb",(gltf)=>{
            console.log("加入玫瑰")
            //模型分类
            gltf.scene.traverse((item)=>{
                //设置hdr强度
                if (item.isMesh) {
                    if(item.material.name == '玻璃'){
                        item.material = glassMaterial;
                    }
                    item.material.envMap = this.scene.environment
                    item.material.envMapIntensity = 1.5;
                }
                // 设置场景内物体开启投影
                if (item.castShadow !== undefined && shadowShow) {
                    // 开启投射影响
                    item.castShadow = true;
                    // 开启被投射阴影
                    item.receiveShadow = true;
                };
            });
            this.mesh = gltf.scene;
            this.mesh.scale.set(0.4,0.4,0.4)
            this.scene.add(this.mesh);

            // 动画
            this.mixer = new THREE.AnimationMixer(gltf.scene);
            const action = this.mixer.clipAction(gltf.animations[0]);
            action.play();
            action.timeScale = 0.1;
            this.mixers.push(this.mixer);
        })
    }
}