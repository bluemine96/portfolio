import * as THREE from "three";
import gltfLoader from "@/three/gltfLoader";

export default class Rose{
    constructor(
        scene,
        camera,
        mixers,
    ){
        this.scene = scene;
        this.camera = camera;
        this.mixers = mixers;

        // const lineMaterial = new THREE.LineBasicMaterial({
        //     color: '#ffffff',
        //     transparent: true,
        //     opacity: 0.4
        // });
        // this.line = new THREE.Group();


        gltfLoader.load("../../model/透明玫瑰.glb",(gltf)=>{
            console.log("加入线框玫瑰")
            //模型分类
            // gltf.scene.traverse((item)=>{
            //     //建立线框
            //     if(item.isMesh && item.material.name.indexOf('透明')!=-1){
            //         let edges = new THREE.EdgesGeometry(item.geometry);
            //         let lineS= new THREE.LineSegments(edges, lineMaterial);
            //         item.add(lineS)
            //     }
            // });
            this.mesh = gltf.scene;
            this.mesh.scale.set(0.4,0.4,0.4)
            this.scene.add(this.mesh);

            // 动画
            this.mixer = new THREE.AnimationMixer(gltf.scene);
            console.log(gltf.animations)
            const action = this.mixer.clipAction(gltf.animations[0]);
            const action2 = this.mixer.clipAction(gltf.animations[1]);
            action.play();
            action2.play();
            action.timeScale = 0.5;
            action2.timeScale = 0.5;
            this.mixers.push(this.mixer);
        })
    }
}