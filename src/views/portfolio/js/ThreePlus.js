import * as THREE from "three";
import gsap from "gsap";
import eventHub from "@/assets/js/eventHub";

import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

import Rose from "./mesh/Rose";
import LineRose from "./mesh/LineRose";

export default class ThreePlus{
    constructor(selector){
        this.progress = 0;
        this.domElement = document.querySelector(selector);
        this.clock = new THREE.Clock();
        //存放动画
        this.mixers = [];
        this.lights = [];
        this.width = this.domElement.clientWidth;
        this.height = this.domElement.clientHeight;
        this.init();
    }

    //初始化方法
    init(){
        this.initStats();
        this.initScene();
        this.initScene2();
        this.initCamera();
        this.initRenderer();
        this.initOrbitControls();
        //this.initEffect();
        this.render();
        this.onWindowResize();
    }

    //初始化场景
    initScene(){
        this.scene = new THREE.Scene();
    }

    initScene2(){
        this.scene2 = new THREE.Scene();
        const lights = [
            // { name: 'stationLight', obj: new THREE.DirectionalLight(0xffffff, 4)},
            { name: 'ambient', obj: new THREE.AmbientLight(0xffffff,5)},
        ];
        lights.map(item => {
            item.obj.name = item.name;
            item.position && item.obj.position.set(...item.position);
            // item.Helper = new THREE.PointLightHelper(item.obj);
            // this.scene.add(item.obj);
            this.scene2.add(item.obj);
        });
        this.addLineRose();
    }

    //初始化性能监视器
    initStats(){
        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.left = '0px';
        this.stats.domElement.style.top = '0px';
    }

    //初始化摄像机
    initCamera(){
        const camera = new THREE.PerspectiveCamera(
            45,//fov,相机视锥体竖直方向视野角度
            this.width / this.height,//aspect,相机视锥体水平方向和竖直方向长度比，一般设置为Canvas画布宽高比width / height
            0.1,//near,相机视锥体近裁截面相对相机距离
            2000,//far,相机视锥体远裁截面相对相机距离，far-near构成了视锥体高度方向
        )

        //更新camera的投影矩阵
        camera.updateProjectionMatrix();
        this.camera = camera;
    }

    //初始化渲染器
    initRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            antialias: true, //执行抗锯齿
            alpha: true, //背景色可以设置透明
            physicallyCorrectLights: true,//物理灯光
            logarithmicDepthBuffer: true,
            premultipliedAlpha: true,//像素深度
        })

        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setSize(this.width, this.height);
        //阴影贴图
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        //色彩映射
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;

        // 像素采样率
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.sortObjects = true;
        this.domElement.appendChild(this.renderer.domElement);  
    }

    initOrbitControls(){
        this.control = new OrbitControls(this.camera, this.renderer.domElement);
        //this.control.enableDamping = false;//缩放惯性
        this.control.dampingFactor = 0.2; //阻尼系数
        this.control.minDistance = 0; //最小缩放值
        this.control.maxDistance = 2000; //最大缩放值
        this.control.autoRotate = false; //自动旋转
        // this.control.zoomSpeed = 0.5; //平移速度
        this.control.enableZoom=false
        // this.control.minPolarAngle = - Math.PI /2;//上下旋转范围
        // this.control.maxPolarAngle = Math.PI / 2;
    }
    initEffect() {
        // 合成效果
        this.effectComposer = new EffectComposer(this.renderer);
        // this.effectComposer.setSize(window.innerWidth, window.innerHeight); // ???
        this.effectComposer.setSize(this.width, this.height);
        this.effectComposer.alpha =true;
    
        // 添加渲染通道
        const renderPass = new RenderPass(this.scene, this.camera);
        this.effectComposer.addPass(renderPass);
    
        //辉光
        const unrealBloomPass = new UnrealBloomPass(    
            // new THREE.Vector2( window.innerWidth, window.innerHeight ), // 影响泛光的画布大小
            new THREE.Vector2(this.width, this.height), // 影响泛光的画布大小
            0.2, // 泛光强度
            0.3, // 泛光半径
            0.3 // 泛光阈值
        );
        this.effectComposer.addPass(unrealBloomPass);
        
        // // 物体边界线条高亮处理
        // this.outLinePass = new OutlinePass(
        //     new THREE.Vector2(window.innerWidth, window.innerHeight),
        //     // new THREE.Vector2(this.width, this.height),
        //     // sceneModule.scene,
        //     this.scene,
        //     // cameraModule.activeCamera
        //     this.camera
        // );
    
        // this.outLinePass.edgeStrength = 10;
        // this.outLinePass.edgeGlow = 1;
        // this.outLinePass.edgeThickness = 2;
        // this.outLinePass.pulsePeriod = 5;
        // this.outLinePass.visibleEdgeColor = new THREE.Color(0xff3333);
        // this.outLinePass.hiddenEdgeColor = new THREE.Color(0xffffff);
    
        // this.outLinePass.patternTexture = new THREE.TextureLoader().load("../../textures/its/effect/tri_pattern.jpg", (texture)=>{
        //     texture.wrapS = THREE.RepeatWrapping;
        //     texture.wrapT = THREE.RepeatWrapping;
        //     this.outLinePass.patternTexture = texture;
        //     this.outLinePass.usePatternTexture = true;
        // });
    
        // this.effectComposer.addPass(this.outLinePass);
    
        // console.log(this.width, this.height);
    
    
        // 点效果
        // const dotScreenPass = new DotScreenPass();
        // dotScreenPass.enabled = false;
        // effectComposer.addPass(dotScreenPass);
    
        //   // 抗锯齿
        // const smaaPass = new SMAAPass(
        //   // window.innerWidth * this.renderer.getPixelRatio(),
        //   // window.innerHeight * this.renderer.getPixelRatio()
        //   this.width * this.renderer.getPixelRatio(),
        //   this.height * this.renderer.getPixelRatio()
        // );
        // this.effectComposer.addPass(smaaPass);
    
        //发光效果
        // this.unrealBloomPass = new UnrealBloomPass();
        // // this.unrealBloomPass.enabled = false;
        // this.unrealBloomPass.enabled = true;
        // // this.unrealBloomPass.strength = 1; // 发光强度
        // this.unrealBloomPass.strength = 0.6; // 发光强度
        // // this.unrealBloomPass.radius = 2; // 发光半径
        // this.unrealBloomPass.radius = 0; // 发光半径
        // // this.unrealBloomPass.threshold = 0.1; // 发光阈值
        // this.unrealBloomPass.threshold = 0.08; // 发光阈值
        // // this.renderer.toneMappingExposure = 0.1;  //设置场景曝光度
        // this.effectComposer.addPass(this.unrealBloomPass);
    
        // this.addReflectorPlane();
        // // SSR屏幕反射
        // const ssrPass = new SSRPass({
        //   renderer: this.renderer,
        //   scene: this.scene,
        //   camera: this.camera,
        //   width: this.width,
        //   height: this.height,
        //   groundReflector: this.groundReflector ? this.groundReflector : null,
        //   selects: this.groundReflector ? this.reflectorSelects : null,
        //   distanceAttenuation: true,
        // });
        // ssrPass.maxDistance = 1000000;
        // console.log(ssrPass);
    
        // this.effectComposer.addPass(ssrPass);
        // this.effectComposer.addPass(new ShaderPass(GammaCorrectionShader));
      }

    /*** 渲染方法 ***/
    render(){
        let deltaTime = this.clock.getDelta();
        this.stats && this.stats.update();
        this.control && this.control.update();

        //存在动画的情况更新mixers
        for(let i = 0; i<this.mixers.length; i++){
            this.mixers[i].update(deltaTime);
        }
        if(showPage == 2 || showPage == 3){
            this.renderer.render(this.scene2, this.camera);
            // this.css3dRenderer.render(this.scene2, this.camera);
        }else{
            this.renderer.render(this.scene, this.camera);
        }
        requestAnimationFrame(this.render.bind(this));
        //this.effectComposer && this.effectComposer.render();
        // console.log('camera:' + this.camera.position.x +','+this.camera.position.y +','+this.camera.position.z);
        // console.log('control:'+ this.control.target.x +','+this.control.target.y +','+this.control.target.z);
    }

    /*** 屏幕变化方法 ***/
    onWindowResize(){
        window.addEventListener("resize", () => {
            this.width = this.domElement.clientWidth;
            this.height = this.domElement.clientHeight;
            // 更新摄像机的投影矩阵
            this.camera.aspect = this.width / this.height;
            this.camera.updateProjectionMatrix();
            // 更新渲染器
            console.log(this.width)
            this.renderer.setSize(this.width, this.height);
        }); 
    }

    setAmbientLight(color, intensity){
        const ambient = new THREE.AmbientLight(color,intensity);
        this.scene.add(ambient);
        this.lights.push(ambient)
    }

    setSpotLight(){
        let spotLight, spotLightHelper;
        const loader = new THREE.TextureLoader().setPath( '../../textures/' );
        const filenames = [ 'disturb.jpg', 'colors.png', 'uv_grid_opengl.jpg' ];
        const textures = { none: null };
        
        for(let i=0; i<filenames.length; i++){
            const filename = filenames[ i ];
            const texture = loader.load( filename );
            texture.minFilter = THREE.LinearFilter;
			texture.magFilter = THREE.LinearFilter;
			texture.colorSpace = THREE.SRGBColorSpace;

            textures[ filename ] = texture;
        }

        spotLight = new THREE.SpotLight( 0xffffff, 2000 );
        spotLight.position.set( 2.5, 5, 2.5 );
        spotLight.angle = Math.PI / 6;
		spotLight.penumbra = 2;
		spotLight.decay = 2;
		spotLight.distance = 0;
		spotLight.map = textures[ 'disturb.png' ];

        spotLight.castShadow = true;
		spotLight.shadow.mapSize.width = 1024;
		spotLight.shadow.mapSize.height = 1024;
		spotLight.shadow.camera.near = 1;
		spotLight.shadow.camera.far = 50;
		spotLight.shadow.focus = 1;
		this.scene.add( spotLight );

        gsap.to(spotLight.position,{
            x: Math.cos(60)*2.5,
            z: Math.cos(60)*2.5,
            duration: 4,
            repeat:-1,
            yoyo: true
        })
    }

    /*** 设置灯光方法 ***/
    setSunLight(name,position,color,intensity){
        const sunlight = new THREE.DirectionalLight(color,intensity);
        sunlight.name = name;
        if(name == 'sunLight' && shadowShow){
            console.log("开启投影");
            sunlight.shadow.bias = -0.002;
            //设置灯光方向
            sunlight.position.set(position.x, position.y, position.z);
            sunlight.target.position.set(0,0,0);
            this.initShadow(sunlight);
            this.shadowBox(sunlight,-30,30,0,30,0.1,30);
            //this.shadowHelper(sunlight);
        }
        this.scene.add(sunlight);
        this.lights.push(sunlight)
    }


    /*** 产生阴影方法 ***/
    initShadow(light){
        light.castShadow = true;
        // 设置阴影参数
        light.shadow.mapSize.width = 2048;//阴影图的宽度
        light.shadow.mapSize.height = 2048;//阴影图的高度
        light.shadow.camera.near = 1; //阴影摄像机的近剪裁面
        light.shadow.camera.far = 40; //阴影摄像机的远剪裁面
        // 模型表面产生条纹影响渲染效果，可以改变.shadowMap.type默认值优化
        this.renderer.shadowMap.type = THREE.VSMShadowMap; 
        this.renderer.shadowMap.autoUpdate = true;//动态光影
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        light.shadow.radius = 3;
    }

    /*** 阴影范围 ***/
    shadowBox(light,left,right,top,bottom,near,far){
        // 设置三维场景计算阴影的范围
        light.shadow.camera.left = left;
        light.shadow.camera.right = right;
        light.shadow.camera.top = top;
        light.shadow.camera.bottom = bottom;
        light.shadow.camera.near = near;
        light.shadow.camera.far = far;
    }

    /*** 辅助可视化阴影 ***/
    shadowHelper(light){
        // 可视化平行光阴影对应的正投影相机对象
        const cameraHelper = new THREE.CameraHelper(light.shadow.camera);
        this.scene.add(cameraHelper);
        cameraHelper.visible = true;
        //平行光辅助对象
        // 参数2表示平行光.position附近方框的尺寸
        const dirHelper = new THREE.DirectionalLightHelper( light, 5);
        console.log("开启可视化相机");
        this.scene.add( dirHelper );
    }

    /*** 加载 ***/
    loadingManager(){
        let scope = this;
        THREE.DefaultLoadingManager.onProgress = function (item, loaded, total){
            let tmp = (parseInt(loaded/total*100));
            if(tmp > scope.progress){
                scope.progress = tmp;
                eventHub.emit("eventLoad",scope.progress);
            }
        }
    }

    /*** 加载hdr方法 ***/
    hdrLoader(url) {
        const hdrLoader = new RGBELoader();
        return new Promise((resolve, reject) => {
            hdrLoader.load(url, (hdr) => {
                resolve(hdr);
            });
        });
    }

    /*** 设置hdr背景 ***/
    setBg(url) {
        return new Promise((resolve, reject) => {
            this.hdrLoader(url).then((texture) => {
                texture.mapping = THREE.EquirectangularRefractionMapping;
                texture.anisotropy = 10;
                texture.format = THREE.RGBAFormat;
                texture.minFilter = THREE.NearestFilter;
                texture.magFilter = THREE.NearestFilter;
                texture.flipY = true;
                // let bgTexture = new THREE.TextureLoader().load('../../textures/bkg.png');
                // bgTexture.mapping = THREE.EquirectangularRefractionMapping;
                // bgTexture.anisotropy = 10;
                // bgTexture.format = THREE.RGBAFormat;
                // bgTexture.minFilter = THREE.NearestFilter;
                // bgTexture.magFilter = THREE.NearestFilter;
                // bgTexture.flipY = 10;
                // this.scene.background = bgTexture;
                this.scene.environment = texture;
                // let skySphere = new SkySphere(texture);
                // this.sky = skySphere.sky;
                // this.scene.add(skySphere.sky);
                resolve(texture);
            });
        });
    }


    addRose(){
        let rose = new Rose(this.scene, this.camera, this.control, this.mixers)
        this.rose = rose;
        return rose;
    }

    addLineRose(){
        let lineRose = new LineRose(this.scene2, this.camera, this.mixers);
        this.lineRose = lineRose;
        return lineRose;
    }

    clearLabel(){
        document.body.removeChild(this.css2dRenderer.domElement);
    }

    clearScene(){
        cancelAnimationFrame(this.animationId);
        this.scene.traverse((child) => {
            if (child.material) {
                //遍历所有子项并调用它们的几何形状，材质和纹理
                Object.keys(child.material).forEach(prop => {
                    if(!child.material[prop])
                        return         
                    if(typeof child.material[prop].dispose === 'function')                                  
                        child.material[prop].dispose()                                                        
                  })
                  child.material.dispose();
            }
            if (child.geometry) {
                child.geometry.dispose();
            }
            child = null;
        });
        this.domElement.innerHTML = '';
        this.renderer.forceContextLoss();
        this.renderer.dispose();
        this.renderer.content = null;
        this.scene.clear();
        this.renderer.domElement = null;
        this.domElement = null;
        console.log('clearScene');
    }
}