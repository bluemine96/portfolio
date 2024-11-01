<!-- 头部导航栏 -->
<template>
    <div class="top-bar" :style="{ background: bgColor }">
        <div class="nav-container">
            <svg width="168" height="48" viewBox="0 0 168 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo" :style="`fill: ${textColor};`">
                <path d="M13.0588 27.523L13.0588 39.8023C13.0588 40.3814 13.7852 40.7075 14.2844 40.3525L19.4144 36.7045C19.5772 36.5888 19.7843 36.5386 19.9882 36.5654L38.6321 39.0206C39.0901 39.0809 39.5 38.7553 39.5 38.3313V24.0695C39.5 23.7231 39.2223 23.4294 38.8483 23.3801L37.2758 23.1731V29.9085C37.2758 30.3325 36.8659 30.6581 36.408 30.5978L13.0588 27.523Z"/>
                <path d="M8.5 9.51068C8.5 9.08665 8.90997 8.76104 9.3679 8.82136L27.8488 11.2559C28.0481 11.2822 28.2506 11.2349 28.4118 11.1244L33.4987 7.63984C33.9997 7.29661 34.7134 7.62433 34.7134 8.19766V26.896C34.7134 27.32 34.3034 27.6456 33.8454 27.5853L9.15171 24.3323C8.77768 24.283 8.5 23.9893 8.5 23.643V9.51068Z"/>
                <path d="M162.457 12.913C162.674 12.913 162.884 12.8427 163.058 12.7126L166.399 10.2023C167.059 9.70719 168 10.1775 168 11.0019V17.1304C168 17.6827 167.552 18.1304 167 18.1304H149.465C148.913 18.1304 148.465 18.5782 148.465 19.1304V21.0435C148.465 21.5958 148.913 22.0435 149.465 22.0435H163.093C163.645 22.0435 164.093 22.4912 164.093 23.0435V26.2609C164.093 26.8132 163.645 27.2609 163.093 27.2609H149.465C148.913 27.2609 148.465 27.7086 148.465 28.2609V31.4783C148.465 32.0305 148.913 32.4783 149.465 32.4783H167C167.552 32.4783 168 32.926 168 33.4783V36.6957C168 37.2479 167.552 37.6957 167 37.6957H144.256C143.704 37.6957 143.256 37.2479 143.256 36.6957V13.913C143.256 13.3608 143.704 12.913 144.256 12.913H162.457Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M59.907 33.4497C59.907 33.6658 59.837 33.8761 59.7074 34.0491L57.1977 37.4006C56.704 38.0599 57.1744 39 57.9981 39H76.8372C81.1527 39 84.6512 35.4961 84.6512 31.1739C84.6512 29.1262 83.8659 27.2621 82.5805 25.8673C82.2321 25.4892 82.1614 24.9201 82.4065 24.4681C83.0075 23.3595 83.3488 22.0893 83.3488 20.7391C83.3488 16.4169 79.8504 12.913 75.5349 12.913H60.907C60.3547 12.913 59.907 13.3608 59.907 13.913V33.4497ZM66.1163 28.5652C65.564 28.5652 65.1163 29.0129 65.1163 29.5652V32.7826C65.1163 33.3349 65.564 33.7826 66.1163 33.7826H76.8372C78.2757 33.7826 79.4419 32.6147 79.4419 31.1739C79.4419 29.7332 78.2757 28.5652 76.8372 28.5652H66.1163ZM65.1163 22.3478C65.1163 22.9001 65.564 23.3478 66.1163 23.3478H75.5349C76.9734 23.3478 78.1395 22.1799 78.1395 20.7391C78.1395 19.2984 76.9734 18.1304 75.5349 18.1304H66.1163C65.564 18.1304 65.1163 18.5781 65.1163 19.1304V22.3478Z"/>
                <path d="M89.8605 13.913C89.8605 13.3608 90.3082 12.913 90.8605 12.913H94.0698C94.6221 12.913 95.0698 13.3608 95.0698 13.913V31.4783C95.0698 32.0305 95.5175 32.4783 96.0698 32.4783H109.047C109.599 32.4783 110.047 32.926 110.047 33.4783V36.6957C110.047 37.2479 109.599 37.6957 109.047 37.6957H90.8605C90.3082 37.6957 89.8605 37.2479 89.8605 36.6957V13.913Z"/>
                <path d="M114.302 12.913C113.75 12.913 113.302 13.3608 113.302 13.913V28.5652C113.302 34.3282 117.967 39 123.721 39H127.628C133.382 39 138.047 34.3282 138.047 28.5652V13.913C138.047 13.3608 137.599 12.913 137.047 12.913H133.837C133.285 12.913 132.837 13.3608 132.837 13.913V28.5652C132.837 31.4467 130.505 33.7826 127.628 33.7826H123.721C120.844 33.7826 118.512 31.4467 118.512 28.5652V13.913C118.512 13.3608 118.064 12.913 117.512 12.913H114.302Z"/>
            </svg>
            <div class="nav-list" :style="`color: ${textColor};`">
                <router-link class="nav-item" target="_blank" :to="{path:homePage}">首页</router-link>
                <router-link class="nav-item" target="_blank" :to="{path:designPage}">设计</router-link>
                <div class="nav-item">DEMO</div>
                <div class="nav-item">联系</div>
                <div class="nav-item" style="margin-right: 0;">文章</div>
            </div>
            <div class="nav-icon"></div>
        </div>
    </div>
</template>

<script>

export default {
    props:{
        bgColor: 'rgba(1,2,6,0)',
        textColor: 'white',
    },
    data(){
        return{
            homePage: '/',
            designPage: '/design',
        }
    },
}
</script>

<style lang="scss" scoped>
.top-bar{
    width: 100vw;
    height: 6rem;
    background: rgba(1,2,6,0);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
.nav-container{
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    backdrop-filter: blur(20px);
    padding: 0.5rem 2rem;
    border-radius: 12px;
    svg{
        width: 8rem;
        height: auto;
        fill: white;
    }
}


.nav-list{
    width: auto;
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    pointer-events: auto;
    color: white;
}

.nav-item{
    width: auto;
    margin-right: 2rem;
    font-size: clamp(1rem, 1.1vw, 2rem);
    font-weight: bold;
    pointer-events: auto;
    cursor: pointer;
    text-decoration: none;
}

.nav-item:visited{
    color: inherit;
}

.nav-item:hover{
    color: #4173F3;
}

.nav-icon{
    display: none;
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .nav-list{
        display: none;
    }

    .logo{
        width: 5rem;
        height: auto;
    }
    .nav-icon{
        display: block;
        width: 1rem;
        height: 1rem;
        background: url("../img/ic-菜单.png") no-repeat;
        background-size: 100% auto;
        background-position: center;
    }
}
</style>