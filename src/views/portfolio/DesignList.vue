<template>
    <div class="designList">
        <topNav :bgColor="'white'" :textColor="'rgba(16,18,23,1)'"/>
        <div class="list-bar">
            <div class="list-title">
                <div class="big-title">设计/DESIGN</div>
                <div class="resume">设计作品</div>
            </div>
        </div>
        <div class="content">
            <div class="nav-bar">
                <div class="nav-content">
                    <div @click="changeType('全部')" :class="[ activeType == '全部'? 'active nav' : 'nav']">
                        <span>全部</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                    <div @click="changeType('移动端')" :class="[ activeType == '移动端'? 'active nav' : 'nav']">
                        <span>移动端UI设计</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                    <div @click="changeType('web端')" :class="[ activeType == 'web端'? 'active nav' : 'nav']">
                        <span>web端UI设计</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                    <div @click="changeType('大屏')" :class="[ activeType == '大屏'? 'active nav' : 'nav']">
                        <span>大屏设计</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                    <div @click="changeType('运营设计')" :class="[ activeType == '运营设计'? 'active nav' : 'nav']">
                        <span>运营设计</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                    <div @click="changeType('品牌设计')" :class="[ activeType == '品牌设计'? 'active nav' : 'nav']">
                        <span>品牌设计</span>
                        <img src="./img/ic-花体-黑.png">
                    </div>
                </div>
            </div>
            <div class="content-bar">
                <div class="list-content">
                    <div class="rec-item" v-for="item of activeData">
                        <div class="fengmian">
                            <img :src="item.img">
                        </div>
                        <div class="biaoti">
                            <span>{{ item.designName }}</span>
                        </div>
                        <div class="shijian">
                            {{ item.time }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import topNav from './widgets/topNav.vue';
import designData from './js/data/designData';

export default {
    components:{
        topNav,
    },
    data(){
        return{
            designData: [],
            activeType: '全部',
            activeData: [],
        }
    },

    mounted(){
        Object.keys(designData).forEach((i) => {
            this.designData.push(designData[i])
        })
        console.log(this.designData)
        
        this.activeData = this.designData;
    },

    methods:{
        changeType(type){
            this.activeType = type;
            if(type != '全部'){
                this.activeData = this.designData.filter( item => item.type == type)
                console.log(this.activeData)
            }else{
                this.activeData = this.designData;
            }
        }
    }
}
</script>

<style lang="scss">
body{
    margin: 0;
    padding: 0;
    line-height: 1;
    background-color: #F2F4F8;
}
.designList{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.list-bar{
    width: 100%;
    margin-top: 6rem;
}

.list-title{
    width: 100%;
    height: 8rem;
    background: url("./img/二级页面bg.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    .big-title{
        margin-left: 15%;
        font-size: clamp(1rem, 20vw, 2rem);
        color: white;
        font-weight: bold;
    }
    .resume{
        color: white;
        opacity: 0.5;
        margin-top: 1rem;
        margin-left: 15%;
    }
}

.content{
    width: 100%;
    height: calc(100% - 14rem );
    display: flex;
    flex-direction: row;
}

.nav-bar{
    width: 20%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-content{
    width: 80%;
    margin-top: 2rem;
}

.nav{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #101217;
    margin-top: 1rem;
    background-color: white;
    pointer-events: auto;
    cursor: pointer;
    span{
        font-size: clamp(1rem, 1vw, 2rem);
        font-weight: 400;
        color: #101217;
    }
    img{
        height: 30%;
        width: auto;
        transform-style: preserve-3d;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
    }

    &.active{
        background-color: rgba(65,115,243,0.1);
        border-bottom: 1px solid #4173F3;
        span{
            color: #4173F3;
            font-weight: bold;
        }
        img{
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(30deg) skew(0deg, 0deg);
        } 
    }
}

.nav:hover{
    border-bottom: 1px solid #4173F3;
    span{
        color: #4173F3;
        font-weight: bold;
    }
    img{
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(30deg) skew(0deg, 0deg);
    }
}

.content-bar{
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.list-content{
    width: 90%;
    height: 95%;
    display: grid;
    justify-content: space-between;
    grid-template-columns: 24% 24% 24% 24%;
}

.rec-item{
    margin: 5vh 0;
    pointer-events: auto;
    cursor: pointer;
    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 2s ease-in-out;
    .fengmian{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
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
            font-size: clamp(1rem, 1vw, 2rem);
            color: #101217;
            font-weight: bold;
        }
    }
    .shijian{
        width: 100%;
        height: auto;
        font-size: clamp(1rem, 1vw, 2rem);
        font-weight: 400;
        color: #101217;
        opacity: 0.3;
        text-align: left;
        margin-top: 0.5rem;
        line-height: 1.4;
    }
}

.rec-item:hover{
    transform: translate3d(0px, -1vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    .fengmian{
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        img{
            width: 100%;
            height: auto;
            opacity: 0.5;
        }
    }
}

</style>