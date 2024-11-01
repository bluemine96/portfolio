<template>
    <div class="articlePage">
        <div class="article-container">
            <div class="article-title">
                <div class="title">
                        <div class="title-text">Articles</div>
                        <div class="title-resume">写一点点小教程</div>
                </div>
            </div>
            <div class="article-list">
                <div class="article-item">
                    <div class="title-style">
                        <span>Blender</span>
                    </div>
                    <div class="article-resume">
                        <span>b端常用3d表现登录页教程</span>
                        <img src="../img/ic-花体.png">
                    </div>
                </div>
                <div class="article-item">
                    <div class="title-style">
                        <span>Blender</span>
                    </div>
                    <div class="article-resume">
                        <span>b端常用3d表现登录页教程</span>
                        <img src="../img/ic-花体.png">
                    </div>
                </div>
                <div class="article-item">
                    <div class="title-style">
                        <span>Blender</span>
                    </div>
                    <div class="article-resume">
                        <span>b端常用3d表现登录页教程</span>
                        <img src="../img/ic-花体.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },

    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
.articlePage{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 40;
    background-color: #07090F;
}

.article-container{
    width: 75%;
    height: 100%;
}

.article-title{
    width: 100%;
    height: auto;
    margin-top: 10vh;
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

.article-list{
    width: 100%;
    height: auto;
    margin-top: 10vh;
}

.article-item{
    width: 100%;
    height: clamp(2rem, 6vw, 4rem);
    margin: 4vh 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #fff;
    .title-style{
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        span{
            font-size: clamp(1rem, 6vw, 2.2rem);
            font-family: 'Times New Roman', Times, serif;
            color: white;
            margin-top: 1vh;
        }
    }
    .article-resume{
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        span{
            font-size: clamp(0.8rem, 2vw, 1.2rem);
            color: white;
            opacity: 0.6;
            margin-right: 2rem;
        }
        img{
            width: clamp(1rem, 3vw, 2rem);
            height: auto;
            transform-style: preserve-3d;
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) 1s ease-in-out;
        }
    }
}

.article-item:hover{
    .title-style{
        span{
            color: #4173F3;
        }
    }
    .article-resume{
        span{
            color: #4173F3;
        }
        img{
            transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(30deg) skew(0deg, 0deg);
        }
    }
}

/* 平板设备样式 */
@media only screen and (max-width: 1024px) {
    .articlePage{
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .articlePage{
        width: 100%;
        height: 80vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .article-title{
        width: 100%;
        height: auto;
        margin-top: 12vh;
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