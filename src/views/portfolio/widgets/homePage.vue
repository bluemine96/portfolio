<template>
    <div class="homePage" id="homePage">
        <div class="home-container">
            <div class="home-left" id="title">
                <div class="left-top">
                    <span>可视化 · web3d · 移动端设计 · 网页设计 · 插画 </span>
                </div>
                <div class="home-title">
                    BLUE’S<br/>
                    <span>PORTFOLIO</span>
                </div>
                <div class="home-bottom">
                    June1996
                    <span>NANNING</span>
                </div>
                <div class="home-button" id="first-button">
                    Show More
                </div>
            </div>
        </div>
        <img class="bottom-dec" src="../img/circle_iSpt.png">
        <img class="top-dec" src="../img/小装饰.png">
        <div id="light"></div>
        <!-- <div class="bkg"></div> -->
    </div>
</template>

<script>
import eventHub from '@/assets/js/eventHub';
import gsap from 'gsap';

export default {
    data(){
        return{

        }
    },

    mounted(){
        // var light = document.getElementById('light');
        // var div = document.getElementById('homePage');
        // this.lightListener = div.addEventListener('mousemove',function(e) {
        //     var x = e.pageX
        //     var y = e.pageY
        //     if((x - 240) > div.clientWidth || (y - 240) > div.clientHeight){
        //         light.style.visibility = "hidden";
        //     }else{
        //         light.style.visibility = "visible";
        //     } 
        //     light.style.top=y - 240 + 'px'
        //     light.style.left=x - 240  + 'px'
        // })
    },
}
</script>

<style lang="scss" scoped>
/* 定义关键帧 */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translate(0,-10px);
    }
    to {
        opacity: 1;
        transform: translate(0,10px);
    }
}

.homePage{
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: -2;
    overflow: hidden;
    transform-style: preserve-3d;
}
.bkg{
    width: 100%;
    height: 100vh;
    background: url("../img/bkg.png") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    top:0;
    left: 0;
    z-index: -2;
}
.home-container{
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: row;  
}
.home-left{
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    margin-top: 20vh;
    animation: fadeIn 1s ease-in-out forwards;
}
.left-top{
    font-size: clamp(0.5rem, 3vw, 1rem);
    font-weight: 200;
    color: white;
    margin-bottom: 1rem;
    text-align: left;
    opacity: 0.6;
}
.home-title{
    font-size: clamp(2rem, 13vw, 7rem);
    font-weight: 800;
    font-family:'Times New Roman', Times, serif;
    color: #4173F3;
    text-align: left;
    span{
        color: white;
    }
}
.home-bottom{
    font-size: clamp(1.5rem, 4vw, 6rem);
    font-weight: 100;
    font-family:'Times New Roman', Times, serif;
    color: white;
    margin-top: 1rem;
    text-align: left;
}

.home-button{
    width: clamp(12rem,20vw,16rem);
    height: 5rem;
    color: white;
    font-size: 1.5rem;
    background-color: #101217;
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    font-family: 'Times New Roman', Times, serif;
    transform-style: preserve-3d;
    transition: background-color 0.5s ease;
    pointer-events: auto;
    cursor: pointer;
}

.home-button:hover {
    background-color: #4173F3;
    border: 1px solid #fff;
}

.bottom-dec{
    position: absolute;
    bottom: 8rem;
    right: 2rem;
    width: clamp(8rem, 20vw, 14rem);
    height: auto;
    z-index: 100;
    backdrop-filter: blur(20px);
    border-radius: 20rem;
}

.top-dec{
    position: absolute;
    top: 7rem;
    right: 20vw;
    width: clamp(8rem, 20vw, 16rem);
    height: auto;
    z-index: 100;
    backdrop-filter: blur(20px);
    border-radius: 20rem;
}

/* 平板设备样式 */
@media only screen and (max-width: 1024px) {
    .top-dec{
        top: 40vh;
        right: 10vw;
        width: clamp(8rem, 40vw, 16rem);
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .top-dec{
        display: none;
    }

    .home-button{
        width: 10rem;
        height: 4rem;
        color: white;
        font-size: 1.2rem;
        background-color: #101217;
        border-radius: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        font-family: 'Times New Roman', Times, serif;;
    }

}

// #light{
//     width: 40vw;
//     height: 40vw;
//     background: url('../img/流动光.png') no-repeat;
//     background-size: 100% auto;
//     background-position: center;
//     position: fixed;
//     pointer-events: none;
// }
</style>