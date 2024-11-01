<template>
    <div class="demoPage">
        <div class="demo-container">
            <div class="demo-title">
                <div class="title">
                    <div class="title-text">DEMO</div>
                    <div class="title-resume">之前自己做的数字孪生应用，开发技术vue+three.js，也有用到cesium的基础技术demo</div>
                    <div class="icon-bar">
                        <div class="leftpage"></div>
                        <div class="rightpage"></div>
                    </div>
                </div>
                <div class="demo-button">
                    demo演示
                </div>
            </div>
            <div class="demo-bkg">
                <div class="demo-list">
                    <div class="list-bar">
                        <div v-for="item of demoData" :key="item.name" @click="changeVideo(item.id,item.video)" :class="[activeDemo.id == item.id ? 'active list-item' : 'list-item']">
                            <img :src="item.img">
                        </div>
                    </div>
                    <div class="video-bar">
                        <video autoplay="autoplay" controlsList="nodownload" controls="controls" muted loop  class="title-video" :src="activeDemo.video" type="video/mp4" ></video>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import demoData from "../js/data/demoData";

export default {
    data(){
        return{
            demoData: {},
            activeDemo: {
                id: '001',
                video: null,
            },
        }
    },

    mounted(){
        this.demoData = demoData;

        this.activeDemo.id = this.demoData['001'].id;
        this.activeDemo.video = this.demoData['001'].video;
    },

    methods:{
        changeVideo(id, video){
            this.activeDemo.id = id;
            this.activeDemo.video = video;
        }
    }
}
</script>
<style lang="scss" scoped>
.demoPage{
    width: 100%;
    height: auto;
    background-color: #07090F;
    position: sticky;
    z-index: 40;
}

.demo-container{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.demo-title{
    width: 75%;
    height: auto;
    margin-top: 6vh;
    margin-bottom: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .title{
        height: auto;
        text-align: left;
    }
    .title-text{
        font-size: clamp(1rem, 14vw, 4rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bolder;
        margin-top: 1rem;
        color: white;
    }
    .title-resume{
        font-size: clamp(0.6rem, 2vw, 1rem);
        font-weight: 300;
        margin-top: 1rem;
        color: white;
        opacity: 0.5;
    }
}

.demo-button{
    width: auto;
    height: auto;  
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10vw;
    background-color: #101217;
    border: 1px solid #fff;
    font-size: clamp(1rem, 1.2vw, 2rem);
    color: white;
    margin-top: 4rem;
    pointer-events: auto;
    cursor: pointer;
    transition: background-color 1s ease;
}

.demo-button:hover{
    background-color: #4173F3;
}

.demo-bkg{
    width: 100%;
    height: auto;
    background: url("../img/demo-背景.png") no-repeat;
    background-size: 100% auto;
    background-position: bottom;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: clamp(2rem,20vw,6rem);
}

.demo-list{
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: clamp(16rem, 26vw,40rem);

    .list-bar{
        width: 20%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
    .list-item{
        width: 14vw;
        height: 6.4vw;
        opacity: 0.2;
        border-radius: 0.5rem;
        margin: 1.6vh 0;
        pointer-events: auto;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            border: 1px solid #fff;
        }
        &.active{
            opacity: 1;
        }
    }

    .list-item:hover{
        opacity: 0.5;
    }

    .video-bar{
        width: 80%;
        margin-left: 2%;
        background-color: #000;
        border-radius: 1rem;
        border: 4px solid rgba(255,255,255,0.1);
        video{
            width: 100%;
            height: 100%;
        }
    }
}

.icon-bar{
    display: none;
}

/* 平板设备样式 */
@media only screen and (max-width: 1024px) {
    .demo-button{
        display: none;
    }

    .demo-list{
        margin-bottom: clamp(12rem, 24vw, 20rem);
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .demo-button{
        display: none;
    }

    .icon-bar{
        display: flex;
        flex-direction: row;
        margin-top: 2rem;
        .leftpage{
            width: 2rem;
            height: 2rem;
            background: url("../img/左翻.png") no-repeat;
            background-size: 100% auto;
            background-position: center;
            margin-right: 0.5rem;
        }
        .rightpage{
            width: 2rem;
            height: 2rem;
            background: url("../img/右翻.png") no-repeat;
            background-size: 100% auto;
            background-position: center;
        }
    }

    .demo-bkg{
        width: 100%;
        height: auto;
        background: url("../img/demo-背景.png") no-repeat;
        background-size: 100% auto;
        background-position: bottom;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .demo-list{
        width: 75%;
        height: auto;
        display: flex;
        flex-direction: row;
        margin-bottom: 12vh;

        .list-bar{
            display: none;
        }

        .video-bar{
            width: 100%;
            height: 10rem;
            background-color: #000;
            border-radius: 0.5rem;
            border: 4px solid rgba(255,255,255,0.2);
        }
    }

    .demoPage{
        width: 100%;
        height: auto;
        background-color: #07090F;
        position: sticky;
        z-index: 40;
    }

    .demo-title{
        width: 75%;
        height: auto;
        margin-top: 16vh;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .title{
            height: auto;
            text-align: left;
        }
        .title-text{
            font-size: 2.5rem;
            font-family:'Times New Roman', Times, serif;
            font-weight: bolder;
            margin-top: 1rem;
            color: white;
        }
        .title-resume{
            font-size: 1rem;
            font-weight: 400;
            margin-top: 1rem;
            color: white;
            opacity: 0.5;
        }
    }
}
</style>