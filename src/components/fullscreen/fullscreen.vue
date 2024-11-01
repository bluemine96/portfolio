<template>
  <div>
    <!--<svg-icon :icon-class="isFullscreen?'exit-fullscreen':'fullscreen'" @click="click" />-->
    <div class="fullscreen" @click="click">
      <img :src="imgFullSrc">   
    </div>
  </div>
</template>
 
<script>
import screenfull from 'screenfull'
 
export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false,
      imgFullSrc: '',
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
      if(this.isFullscreen){
        this.$store.commit('SET_FULL_SCREEN', true)
        this.imgFullSrc = require('../../assets/img/components/fullscreen_close.png');
      }else{
        this.$store.commit('SET_FULL_SCREEN', false)
        this.imgFullSrc = require('../../assets/img/components/fullscreen_open.png');
      }
    },
    init() {
      this.imgFullSrc = require('../../assets/img/components/fullscreen_open.png');
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
 
<style scoped lang="scss">
/*.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}*/
.fullscreen {
    position: absolute;
    right: 1px;
    top: 3px;
    font-size: 15px;
    color: rgb(209, 209, 209);
    img {
        width: 30px;
        height: 30px;
    }
}
</style>