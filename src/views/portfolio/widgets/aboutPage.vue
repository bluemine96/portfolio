<template>
    <div class="aboutPage">
        <div class="about-content">
            <div class="about-left">
                <div class="about-title">
                    <span>About Me</span>
                </div>
                <div class="about-num">
                    <div class="num-item">
                        6+
                        <span>工作经验</span>
                    </div>
                    <div class="num-item">
                        10+
                        <span>项目经验</span>
                    </div>
                    <div class="num-item">
                        170+
                        <span>followers</span>
                    </div>
                </div>
                <div class="about-list">
                    <div class="list-item">
                        <div class="star-dec"></div>
                        <div class="list-text">
                            <div class="list-title">
                                UI/UX DESIGN
                            </div>
                            <div class="list-content">
                                本职工作，擅长各类UI及UX设计，做过多平台（小程序、APP、后台、企业官网、可视化大屏）的设计工作。运营设计类也能上手，比较擅长插画类型的运营设计
                            </div>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="star-dec"></div>
                        <div class="list-text">
                            <div class="list-title">
                                3D MODEL
                            </div>
                            <div class="list-content">
                                熟练上手blender。通常建模我运用在两个方面，视觉表现类和数字孪生应用。使用cycles渲染出图建立视觉图。使用eevee渲染器建立数字孪生场景及动画。
                            </div>
                        </div>
                    </div>
                    <div class="list-item">
                        <div class="star-dec"></div>
                        <div class="list-text">
                            <div class="list-title">
                                CODE
                            </div>
                            <div class="list-content">
                                掌握数字孪生应用全流程技法，能独立完成UI设计到场景建模再到three.js搭建网页应用。当然，cesium也是小小掌握了一下！这类可以往下翻我独自完成的demo！
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return{

        }
    },

    mounted(){
        
    },

    methods:{
        
    }
}
</script>

<style lang="scss" scoped>
.aboutPage{
    width: 100%;
    height: 140vh;
    background-color: #4173F3;
    z-index: -100;
    display: flex;
    justify-content: center;
    position: sticky;
}

.about-content{
    width: 75%;
    height: 100%;
    display: flex;
    justify-content: right;
}

.about-left{
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}
.about-title{
    width: 75%;
    height: auto;
    margin-top: 30vh;
    text-align: left;
    span{
        font-size: clamp(1rem, 14vw, 4rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bolder;
        margin-top: 1rem;
        color: white;
    }
}

.about-num{
    width: 100%;
    height: 16vh;
    display: flex;
    flex-direction: row;
    margin-top: 6vh;
}

.num-item{
    width: calc(100% / 3);
    font-size: clamp(2rem, 3vw, 3.6rem);
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    span{
        font-size: 1rem;
        opacity: 0.5;
        margin-top: 0.2rem;
        font-weight: 200;
    }
}

.about-list{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}

.list-item{
    width: 100%;
    height: auto;
    background-color: rgba(255,255,255,0.1);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 4vh 1vw;
    margin: 1vh 0;
}

.star-dec{
    width: 3vw;
    height: 3vw;
    background: url("../img/星星.png") no-repeat;
    background-size: auto 100%;
    background-position: center;
    margin-right: 3vw;
}

.list-text{
    width: 70%;
    height: auto;
    .list-title{
        width: fit-content;
        height: auto;
        font-size: clamp(1rem, 1.8vw, 2rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bold;
        color: white;
    }
    .list-content{
        width: fit-content;
        height: auto;
        color: white;
        text-align: left;
        opacity: 0.5;
        margin-top: 1vh;
    }
}

/* 平板设备样式 */
@media only screen and (max-width: 1024px) {
    .aboutPage{
        width: 100%;
        height: 100vh;
        background-color: #4173F3;
        z-index: -100;
        display: flex;
        justify-content: center;
        position: sticky;
    }

    .about-title{
        margin-top: 10vh;
        span{
            font-size: 3.2rem;
        }
    }

    .about-num{
        height: 10vh;
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .aboutPage{
        width: 100%;
        height: 140vh;
        background-color: #4173F3;
        z-index: -100;
        display: flex;
        justify-content: center;
        position: sticky;
    }

    .about-left{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
    }

    .about-title{
        width: 75%;
        height: auto;
        margin-top: 12vh;
        text-align: left;
        span{
            font-size: 2.5rem;
            font-family:'Times New Roman', Times, serif;
            font-weight: bolder;
            margin-top: 1rem;
            color: white;
        }
    }

    .about-num{
        width: 100%;
        height: 10vh;
        display: flex;
        flex-direction: row;
        margin-top: 6vh;
    }
    
}
</style>