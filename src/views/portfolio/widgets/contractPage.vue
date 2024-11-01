<template>
    <div class="contractPage">
        <div class="contract-container">
            <div class="contract-title">
                <div class="title">
                        <div class="title-text">CONTRACT</div>
                        <div class="title-resume">wechat：bluewood96</div>
                        <img src="../img/ic-箭头大.png">
                </div>
            </div>
            <div class="contract-href">
                <div class="href-item">
                    <img src="../img/logo/站酷logo.png">
                </div>
                <div class="href-item">
                    <img src="../img/logo/dribbble.png">
                </div>
                <div class="href-item">
                    <img src="../img/logo/小红书logo.png">
                </div>
                <div class="href-item">
                    <img src="../img/logo/语雀logo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contractPage{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #4173F3;
    position: sticky;
    z-index: 40;
}

.contract-container{
    width: 75%;
    height: auto;
    padding: 10vh;
    display: flex;
    flex-direction: row
}

.contract-title{
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
        font-size: clamp(1rem, 12vw, 4rem);
        font-family:'Times New Roman', Times, serif;
        font-weight: bolder;
        margin-top: 1rem;
        color: white;
    }
    .title-resume{
        font-size: clamp(1rem, 2vw, 2rem);
        font-weight: bold;
        margin-top: 1rem;
        color: white;
        opacity: 0.8;
    }
    img{
        width: clamp(2rem, 4vw, 3rem);
        height: auto;
        margin-top: 10vh;
    }
}

.contract-href{
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    .href-item{
        width: 4rem;
        height: 4rem;
        background-color: rgba(255,255,255);
        margin: 0 0.5rem;
        border-radius: 0.5rem;
        pointer-events: auto;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
            opacity: 0.5;
            border-radius: 0.5rem;
        }
    }

    .href-item:hover{
        img{
            opacity: 1;
        }
    }
}

/* 移动设备样式 */
@media only screen and (max-width: 767px) {
    .contractPage{
        width: 100%;
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #4173F3;
    }

    .contract-container{
        width: 75%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .contract-title{
        width: 100%;
        height: auto;
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
            font-weight: bold;
            margin-top: 1rem;
            color: white;
            opacity: 0.8;
        }
        img{
            width: clamp(2rem, 8vw, 4rem);
            height: auto;
            margin-top: 4vh;
        }
    }

    .contract-href{
        width: auto;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        margin-top: 4rem;
        .href-item{
            width: 4rem;
            height: auto;
            background-color: rgba(255,255,255,0.1);
            border-radius: 0.5rem;
            margin: 0 0.5rem;
        }
    }
}
</style>