<template>
  <!--<div class="m-progress" :style="`width:${width}px;`">-->
  <div class="m-progress" :style="`width: ${width}px;`">
    <div class="m-progress-outer">
      <div class="m-progress-inner">
        <div class="u-progress-bg" :style="`width: ${progress}%;`"></div>
      </div>
    </div>
    <p class="u-progress-text">{{ progress }}%</p>
  </div>
</template>
<script>
// Vue进度条（Progress）
// https://blog.csdn.net/Dandrose/article/details/124043767

export default {
  name: 'Progress',
  props: {
    width: { // 进度条总宽度
      type: Number,
      default: 600
    },
    progress: { // 当前进度
      type: Number,
      default: 36
    }
  }
}
</script>
<style lang="scss" scoped>
.m-progress {
  /*height: 24px;
  margin: 0 auto;*/
  width: 6rem;
  min-width: 2rem;
  height: 0.6rem;
  background-color: rgb(12, 30, 73);
  line-height: 0.1667rem;
  position: relative;
  border-radius: 1rem;
  border: 1px solid #fff;
  padding: 0.0333rem 0.1rem;
  .m-progress-outer {
    display: inline-block;
    /*width: calc(100% - 16px);*/
    width: calc(100%);
    .m-progress-inner {
      width: 100%;
      background-color: rgba(255,255,255,0.1);
      border-radius: 1.6667rem;
      .u-progress-bg {
        background-color: #fff;
        border-radius: 1.6667rem;
        height: 0.6rem;
        transition: all .3s cubic-bezier(.08,.82,.17,1) 0s;
      }
    }
  }
  .u-progress-text {
    /*display: inline-block;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    width: 48px;
    color: rgba(0,0,0,.45);
    text-align: right;
    vertical-align: middle;*/
    /*控制数字大小*/
    /*font-size: 11px;*/
    color: #fff;
    position: absolute;
    margin: auto;
    top: 2.4rem;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-weight: bold;
    line-height: 0.2333rem;
  }
}
</style>