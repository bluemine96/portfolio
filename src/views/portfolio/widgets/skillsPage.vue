<template>
    <div class="skillsPage">
        <div class="skills-title">
            <img src="../img/skills-title.png">
            <span>My Skills</span>
        </div>
        <div class="skills-resume">
            擅长UI类设计技能，做过移动端、网页端、可视化大屏等的UI设计。
            掌握web3d全流程技法，擅长3d类设计与实现。
            利用blender进行建模及动画，通过three.js完成3d网页和数字孪生应用的搭建。
            运营类设计也完全OK，比较擅长插画类运营画面的绘制.<br/>
        </div>
        <div class="skills-animation">
            <div class="skillLine3">
                <div class="skill6">cesium</div>
                <img class="yellow" src="../img/yellow_iSpt.png">
                <div class="skill7" style="background-color: #4173F3;">UI/UX</div>
            </div>
            <div class="skillLine2">
                <div class="skill3" style="background-color: #FFCD4B;">Blender</div>
                <div class="skill4">
                    <img src="../img/figma图标.png">
                    Figma
                </div>
                <div class="skill5">illustrator</div>
            </div>
            <div class="skillLine1">
                <img class="blue" src="../img/blue_iSpt.png">
                <div class="skill1">Brand</div>
                <div class="skill2">Three.js</div>
            </div>
        </div>
    </div>
</template>

<script>
import eventHub from '@/assets/js/eventHub';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    data(){
        return{

        }
    },

    mounted(){
        this.t2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skillsPage",
                // toggleActions: "onEnter onLeave onEnterBack onLeaveBack"
                start: "top 40%",
                end: "bottom 100%",
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" // play,pause,resume,reverse,restart,reset,complete,none
            },
        }).addLabel('skills-title');
        this.t2.to(".skills-title",{
            y:-40,
            ease: 'none',
            opacity: 1,
            duration: 1,
            onComplete: ()=>{
                console.log("输出标题")
            }
        },0)
        this.t2.to(".skills-resume",{
            y:-40,
            ease: 'none',
            opacity: 1,
            duration: 1,
        },2)
        this.t2.to(".skillLine1",{
            y:'35vh',
            ease: 'bounce.out',
            opacity: 1,
            duration: 2,
        },4);
        this.t2.to(".skillLine2",{
            y:'30vh',
            ease: 'bounce.out',
            opacity: 1,
            duration: 2,
        },5);
        this.t2.to(".skillLine3",{
            y:'25vh',
            ease: 'bounce.out',
            opacity: 1,
            duration: 2,
        },6);

        // //初始检查
        // this.detectDevice();
        
        // // 窗口大小改变时重新检查
        // window.addEventListener('resize', this.detectDevice);
    },

    methods:{
        // detectDevice() {
        //     const width = window.innerWidth || document.documentElement.clientWidth;
        //     if (width < 768) {
        //         // 移动设备
        //         console.log(this.t2)
        //     } else if (width >= 768 && width < 1024) {
        //         // 平板设备
        //         this.t2.pause();
        //     } else {
        //         this.t2.play();
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
.skillsPage{
    width: 100%;
    height: 160vh;
    background-color: white;
    z-index: 101;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../img/底部圆.png");
    background-repeat: no-repeat;
    background-size: 130% auto;
    background-position: bottom center;
    position: sticky;
}
.skills-title{
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
    opacity: 0;
    img{
        width: clamp(2rem, 14vw, 6rem);
        height: auto;
    }
    span{
        font-size: clamp(1rem, 14vw, 4rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bolder;
        margin-top: 1rem;
        color: #101217;
    }
}
.skills-resume{
    width: 75%;
    height: auto;
    font-size: 1rem;
    color: #999;
    margin-top: 2rem;
    line-height: 1.2;
    opacity: 0;
}
.skills-animation{
    width: 75%;
    height: 140vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24vh;
}

.skillLine1{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: relative;
    bottom: 30vh;
}

.blue{
    width: clamp(5rem, 14vw, 10rem);
    height: auto;
    position: relative;
    right: 5vw;
}

.skill-item{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    color: #101217;
    border: 2px solid #101217;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: bold;
    background-color: white;
    margin: 0 1rem;
}
.skill1{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1rem, 4vw, 2rem);
    background-color: white;
    color: #101217;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-weight: bold;
    right: 4vw;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill1:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(5deg, -5deg);
}
.skill2{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1rem, 4vw, 3rem);
    background-color: #C2D3FF;
    color: #101217;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 2vw;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill2:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-5deg, 5deg);
}

.skillLine2{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    bottom: 30vh;
    opacity: 0;
}

.skill3{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1rem, 3vw, 3rem);
    background-color: #F3F3F3;
    color: #101217;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 2vw;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill3:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(5deg, -5deg);
}

.skill4{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem) clamp(2rem, 5vw, 4rem);
    font-size: clamp(1rem, 4vw, 3rem);
    background-color: white;
    color: #101217;
    font-weight: 400;
    border: 2px solid #101217;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
    img{
        width: 3rem;
        height: auto;
        margin-bottom: 1vh;
    }
}

.skill4:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1.05, 1.05, 1.05) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
}

.skill5{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1rem, 3vw, 2rem);
    background-color: white;
    color: #101217;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 3vw;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill5:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-5deg, 5deg);
}

.skillLine3{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 25vh;
    opacity: 0;
}

.yellow{
    width: clamp(4rem, 10vw, 10rem);
    height: auto;
    position: relative;
    left: 8vw;
    bottom: 6vh;
}

.skill6{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1rem, 4vw, 2rem);
    background-color: white;
    color: #101217;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    right: 8vw;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill6:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(5deg, -5deg);
}
.skill7{
    width: auto;
    height: auto;
    padding: clamp(1rem, 5vw, 1.6rem);
    font-size: clamp(1.5rem, 5vw, 3rem);
    background-color: #F3F3F3;
    color: #101217;
    font-weight: 400;
    border: 2px solid #101217;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 10vw;
    font-weight: bold;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
}

.skill7:hover{
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(-5deg, 5deg);
}

/* 平板设备样式 */
@media only screen and (max-width: 1024px) {
    .skillsPage{
        width: 100%;
        height: 100vh;
        background-color: white;
        z-index: 101;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../img/底部圆.png");
        background-repeat: no-repeat;
        background-size: 130% auto;
        background-position: bottom center;
    }

    .skillLine3{
        bottom:30vh;
    }
    .skillLine2{
        bottom:38vh;
    }
    .skillLine1{
        bottom:40vh;
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .skillsPage{
        width: 100%;
        height: 100vh;
        background-color: white;
        z-index: 101;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("../img/底部圆.png");
        background-repeat: no-repeat;
        background-size: 130% auto;
        background-position: bottom center;
    }

    .skills-animation{
        width: 75%;
        height: 140vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 15vh;
    }

    .skillLine2{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-end;
        position: relative;
        bottom: 35vh;
        opacity: 0;
    }
    
    .skillLine1{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        opacity: 0;
        position: relative;
        bottom: 38vh;
    }

    .skills-title{
        width: 75%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 16vh;
        // opacity: 0;
        img{
            width: clamp(2rem, 14vw, 6rem);
            height: auto;
        }
        span{
            font-size: 2.5rem;
            font-family:'Times New Roman', Times, serif;
            font-weight: bolder;
            margin-top: 1rem;
            color: #101217;
        }
    }
}
</style>