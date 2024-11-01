<template>
    <div class="designPage">
        <div class="design-title">
            <div class="title-text">DESIGN</div>
            <div class="title-resume">之前的一些设计作品，包含UI类，视觉支撑类，运营设计类，品牌设计类。</div>
        </div>
        <div class="design-list">
            <div class="design-item" v-for="item of designData" :key="item.name">
                <div class="fengmian">
                    <img :src="item.img">
                </div>
                <div class="biaoti">
                    <span>{{ item.designName }}</span>
                    <div class="biaoqian">{{ item.type }}</div>
                </div>
                <div class="jieshao">
                    {{ item.designResume }}
                </div>
            </div>
        </div>
        <div class="design-button">
            <span>查看更多</span>
            <img src="../img/箭头.png">
        </div>
    </div>
</template>

<script>
import designData from "../js/data/designData";

export default {
    data(){
        return{
            designData: {}
        }
    },

    mounted(){
        this.designData = designData;
    }
}
</script>

<style lang="scss" scoped>
.designPage{
    width: 100%;
    height: auto;
    background-color: #07090F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20vh 0;
    background-color: #07090F;
    position: sticky;
    z-index: 40;
}

.design-title{
    width: 75%;
    height: auto;
    margin-bottom: 4vh;
    .title-text{
        font-size: clamp(1rem, 14vw, 4rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bolder;
        margin-top: 1rem;
        color: white;
    }
    .title-resume{
        font-size: clamp(0.6rem, 2vw, 1rem);
        font-weight: 400;
        margin-top: 1rem;
        color: white;
        opacity: 0.5;
    }
}

.design-list{
    width: 75%;
    height: auto;
    margin-top: 6vh;
    display: grid;
    justify-content: space-between;
    grid-template-rows: auto auto;
    grid-template-columns: 48% 48%;
}

.design-item{
    margin: 5vh 0;
    pointer-events: auto;
    cursor: pointer;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 2s ease-in-out;
    .fengmian{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        img{
            width: 100%;
            height: 100%;
            opacity: 1;
            border-radius: 0.5rem;
        }
    }
    .biaoti{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: clamp(1rem, 1.5vw, 2rem);
            color: white;
            font-weight: bold;
        }
    }
    .jieshao{
        width: 100%;
        height: auto;
        font-size: clamp(1rem, 1vw, 2rem);
        font-weight: 400;
        color: white;
        opacity: 0.3;
        text-align: left;
        margin-top: 1rem;
        line-height: 1.4;
    }
    .biaoqian{
        width: auto;
        height: auto;
        padding: 0.5rem 1rem;
        background-color: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.4);
        border-radius: 10vw;
        font-size: clamp(1rem, 1vw, 2rem);
        color: rgba(255,255,255,0.6);
        font-weight: 400;
    }
}

.design-item:hover{
    transform: translate3d(0px, -1vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    .fengmian{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 2rem;
        img{
            width: 100%;
            height: auto;
            opacity: 0.5;
        }
    }
}

.design-button{
    width: auto;
    height: auto;  
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10vw;
    background-color: #101217;
    border: 1px solid #fff;
    margin-top: 10vh;
    pointer-events: auto;
    cursor: pointer;
    transition: background-color 1s ease;
    span{
        font-size: clamp(1rem, 1.5vw, 2rem);
        color: white;
        margin-right: 1vw;
    }
    img{
        width: clamp(0.6rem, 1vw, 2rem);
        height: auto;
    }
}

.design-button:hover{
    background-color: #4173F3;
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .designPage{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10vh 0;
        background-color: #07090F;
    }
    .design-title{
        width: 75%;
        height: auto;
        margin-bottom: 2vh;
        .title-text{
            font-size: 2.5rem;
            font-family:'Times New Roman', Times, serif;
            font-weight: bolder;
            margin-top: 1rem;
            color: white;
        }
        .title-resume{
            font-size: 1rem;
            font-weight: 300;
            margin-top: 1rem;
            color: white;
            opacity: 0.5;
            line-height: 1.2;
        }
    }

    .design-list{
        width: 75%;
        height: auto;
        margin-top: 4vh;
        display: grid;
        justify-content: space-between;
        grid-template-rows: auto auto;
        grid-template-columns: 100%;
    }
}
</style>