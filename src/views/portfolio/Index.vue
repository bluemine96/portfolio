<template>
    <div v-show="loadingProcess!==100" class="project-load-model">
        <div class="loading-gif">
            <img src="./img/loading.gif" alt="" />
        </div>
        <Progress :width="200" :progress="loadingProcess"/>
    </div>

    <topNav :bgColor="'rgba(1,2,6,0)'" :textColor="'white'"/>
    <homePage />
    <skillsPage />
    <aboutPage />
    <designPage />
    <demoPage />
    <articlePage />
    <contractPage />
    <div class="canvas-container"></div>
    <div class="bkg"></div>

</template>

<script>
import * as THREE from "three";
import ThreePlus from "./js/ThreePlus";
import eventHub from "@/assets/js/eventHub";
import gsap from "gsap";

import topNav from './widgets/topNav';
import homePage from './widgets/homePage';
import skillsPage from "./widgets/skillsPage";
import aboutPage from "./widgets/aboutPage";
import designPage from "./widgets/designPage";
import demoPage from "./widgets/demoPage";
import articlePage from "./widgets/articlePage";
import contractPage from "./widgets/contractPage";
import Progress from "@/components/Progress/Progress";
import { reactive,onMounted } from 'vue';

export default {
    components:{
        Progress,
        topNav,
        homePage,
        skillsPage,
        aboutPage,
        designPage,
        demoPage,
        articlePage,
        contractPage,
    },
    data(){
        return{
            loadingProcess: 0,
            roseCamera: {x:-3.795350674053534, y:4.2669721530658435, z:1.1840777696490392},
            roseControl: {x:0.55137549651213, y:2.6491870378697535, z:-1.7969211911647351},
            lineCamera: {x:-0.9108498725587582, y:2.715606508858488, z:0.5243288326128148},
            lineControl: {x:-0.6142936336899162, y:-0.8973372718304199, z:0.7925979386707125},
        }
    },
    mounted(){
        //根据屏幕尺寸设置3d模型的位置
        //初始检查
        this.detectDevice();
        
        // 窗口大小改变时重新检查
        window.addEventListener('resize', this.detectDevice);

        window.showPage = 0;
        const container = document.querySelector('.canvas-container');
        //控制投影的开启
        window.shadowShow = true;
        let threePlus = new ThreePlus(".canvas-container");
        window.threePlus = threePlus;

        // 设置相机和控制器
        threePlus.camera.position.set(this.roseCamera.x, this.roseCamera.y, this.roseCamera.z);
        threePlus.control.target = new THREE.Vector3(this.roseControl.x, this.roseControl.y, this.roseControl.z); 
        threePlus.control.update();
        // threePlus.control.enabled = false;

        threePlus.setSpotLight();
        threePlus.setSunLight('sunLight',{x:0,y:15,z:6.5}, new THREE.Color(0x4768FF), 14)
        threePlus.setAmbientLight(new THREE.Color(0x4768FF), 10);
        //设置世界环境
        let bgPromise = threePlus.setBg("../../textures/blue_photo_studio_1k.hdr");

        threePlus.addRose();
        threePlus.loadingManager();
        document.body.style.overflow = 'hidden';
        this.monitor();
    },

    methods:{
        monitor(){
            // 加载事件
            eventHub.on("eventLoad",(loadCount) => {
                this.loadingProcess = loadCount;
                if(this.loadingProcess == 100){
                    document.body.style.overflow = 'auto';
                    this.scrollerListener()
                }
            });
        },

        scrollerListener(){
            //设置当前页
            let currentPage = 0;
            //监听滚动事件
            window.addEventListener("scroll",()=>{
                const newPage = Math.round(window.scrollY/window.innerHeight);
                if(newPage != currentPage){
                    console.log("当前页面"+currentPage)
                    currentPage = newPage;
                    window.showPage = currentPage;
                    if(currentPage == 0){
                        threePlus.rose.mesh.visible = true;
                        threePlus.lineRose.mesh.visible = false;
                        threePlus.camera.position.set(this.roseCamera.x, this.roseCamera.y, this.roseCamera.z);
                        threePlus.control.target = new THREE.Vector3(this.roseControl.x, this.roseControl.y, this.roseControl.z); 
                    }else if(currentPage == 2 || currentPage == 3){
                        threePlus.lineRose.mesh.visible = true;
                        threePlus.camera.position.set(this.lineCamera.x, this.lineCamera.y, this.lineCamera.z);
                        threePlus.control.target = new THREE.Vector3(this.lineControl.x, this.lineControl.y, this.lineControl.z); 
                    }else{
                        threePlus.rose.mesh.visible = false;
                        threePlus.lineRose.mesh.visible = false;
                    }
                }   
            })
        },

        detectDevice() {
            const width = window.innerWidth || document.documentElement.clientWidth;
            if (width < 768) {
                //移动设备
                this.roseCamera = {x:-3.8860915970941887, y:4.670680207549038, z:4.433324924135482};
                this.roseControl = {x:0.55137549651213, y:2.6491870378697535, z:-1.7969211911647351};
                this.lineCamera = {x:0.5513738394224019, y:6.472200121916135, z:-1.796917745953178};
                this.lineControl = {x:0.55137549651213, y:2.6491870378697535, z:-1.7969211911647351};
            } else if (width >= 768 && width <= 1024) {
                //平板设备
                this.roseCamera = {x:-3.795350674053534, y:4.2669721530658435, z:1.1840777696490392};
                this.roseControl = {x:0.55137549651213, y:2.6491870378697535, z:-1.7969211911647351};
                this.lineCamera = {x:-0.9108498725587582, y:2.715606508858488, z:0.5243288326128148};
                this.lineControl = {x:-0.6142936336899162, y:-0.8973372718304199, z:0.7925979386707125};
            } else {
                //桌面设备
                this.roseCamera = {x:-3.795350674053534, y:4.2669721530658435, z:1.1840777696490392};
                this.roseControl = {x:0.55137549651213, y:2.6491870378697535, z:-1.7969211911647351};
                this.lineCamera = {x:-0.9108498725587582, y:2.715606508858488, z:0.5243288326128148};
                this.lineControl = {x:-0.6142936336899162, y:-0.8973372718304199, z:0.7925979386707125};
            }
        }
    },

    beforeDestroy(){
        console.log('bmap beforeDestroy start');
        threePlus.clearScene();
        console.log(threePlus.renderer.info)
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
    z-index: 10;
    opacity: 0.8;
}

.bkg{
    width: 100%;
    height: 100vh;
    background: url("./img/bkg.png") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top:0;
    left: 0;
    z-index: -100;
}

/* 移动设备样式 */
@media only screen and (max-width: 768px) {
    .canvas-container{
        width: 100vw;
        height: 100vh;
        background-color: transparent;
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: -99;
        opacity: 0.8;
    }
}

.project-load-model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #07090F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .loading-gif {
        position: fixed;
        width: 8rem;
        height: auto;
        text-align: center;
        transform: translate(0, -54%);
        img {
            width: 100%;
        }
    }
}
</style>