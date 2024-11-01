<template>
    <div>
        <div class="canvas-container"></div>
    </div>
</template>

<script>
import * as THREE from "three";
import ThreePlus from "./js/ThreePlus";
import gsap from "gsap";
import eventHub from "@/assets/js/eventHub";

export default {
    data(){
        return{

        }
    },

    mounted(){
        const container = document.querySelector(".canvas-container");

        //控制投影的开启
        window.shadowShow = true;

        let threePlus = new ThreePlus(".canvas-container");
        window.threePlus = threePlus;

        // 设置相机和控制器
        threePlus.camera.position.set(10.93,10.2,-7.8);
        threePlus.control.target = new THREE.Vector3(0.96,2.57,-4.91); 
        threePlus.control.update();

        threePlus.setSunLight('sunLight',{x:0,y:30,z:12}, new THREE.Color(0xffffff), 6)
        threePlus.setHemisphereLight(new THREE.Color(0xffffff), 12);

        threePlus.addMachine();
    }
}
</script>

<style lang="scss">
body{
    margin: 0;
    padding: 0;
    line-height: 1;
    background-color: #07090F;
}
*,
:after,
:before {
  box-sizing: content-box;
}
.canvas-container{
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -99;
    opacity: 0.8;
}
</style>