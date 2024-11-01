import * as THREE from "three";
import gltfLoader from "@/three/gltfLoader";
import eventHub from "@/assets/js/eventHub";

export default class machine{
    constructor(
        scene,
        camera,
    ){
        this.scene = scene;
        this.camera = camera;
        const objs = [];

        gltfLoader.load("../../model/0821.glb",(gltf)=>{
            //模型分类
            gltf.scene.traverse((item)=>{
                //设置hdr强度
                if(item.name == 'reflector'){
                    this.floor = item;
                    eventHub.emit("addReflector",this.floor);
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
            this.mesh.scale.set(1,1,1)
            this.scene.add(this.mesh);
        })
    }
}