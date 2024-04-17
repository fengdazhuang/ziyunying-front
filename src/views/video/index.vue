<template>
    <div class="contain-box" style="font-size: 14px;">
      <div style="height: 30px;border-bottom: 1px solid #b31e22;margin-top: 20px;display: flex;">
        <div style="width: 150px;background-color: #b31e22;line-height: 30px;color: #ffffff;text-align: center;">
          视频专区
        </div>
        <div style="flex: 1;text-align: right;">
          <el-button size="mini" :type="autoPlay?'danger':'warning'" @click="autoPlayFun">自动播放</el-button>
        </div>
      </div>
      <div>
        <div v-for="(item,index) in videos" class="video-box" @click="playModal(item)">
          <div style="height: 250px;">
            <img :src="item.img" style="width: 260px;height: 250px;">
          </div>
          <div style="font-size: 16px;line-height: 40px;margin-left: 10px;">
            {{item.title}}
          </div>
          <div style="color: #b31e22;margin-left: 10px;">
            {{item.des}}
          </div>
        </div>
      </div>

      <!--播放窗口-->
      <div>
        <el-dialog
          title=""
          top="20px"
          :visible.sync="playBox"
          :before-close="beforeClose"
          width="850px"
          center>
          <div>
            <video v-if="video" width="800" :src="video.videoPath" controls="" preload="metadata" ref="player" :poster="video.img"></video>
          </div>
        </el-dialog>
      </div>

    </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          videos: [
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')},
            {title: '紫云英学堂第一课',des:'免费学习',img: require('../../../public/img/ud/S-001-1_s.jpg'),videoPath:require('../../../public/video/video_1.mp4')}
          ],
          playBox: false,
          video: null,
          isPlay: 0,//默认0未自动播放  1播放  2暂停
          eleVideo: null,
          autoPlay: false,//自动播放
        };
      },
      mounted() {

      },
      methods: {
        autoPlayFun(){
          this.autoPlay = !this.autoPlay;
        },
        playModal(item){
          this.video = item;
          this.playBox = true;
          if(!this.eleVideo){
            let that = this;
            setTimeout(function(){
              that.eleVideo = that.$refs.player;
              that.eleVideo.addEventListener('waiting', function () { //加载
                console.log("加载中");
              });
              that.eleVideo.addEventListener('play', function () { //播放开始执行的函数
                console.log("开始播放");
                that.isPlay = 1;
                console.log(that.isPlay);
              });
              that.eleVideo.addEventListener('playing', function () { //播放中
                console.log("播放中");
                that.isPlay = 1;
                console.log(that.isPlay);
              });
              that.eleVideo.addEventListener('pause', function () { //暂停开始执行的函数
                console.log("暂停播放");
                that.isPlay = 2;
                console.log(that.isPlay);
              });
              if(that.autoPlay){
                that.playFun();//加载马上自动播放，有些浏览器已经不支持自动播放，可以先设置浏览器允许自动播放
              }
            },300);
          }else if(this.autoPlay){
            this.playFun();//加载马上自动播放，有些浏览器已经不支持自动播放，可以先设置浏览器允许自动播放
          }
        },
        playFun() {
          if (!this.$refs.player) {
            alert('播放资源不存在!');
            return;
          }
          if (this.isPlay === 1) { //暂停
            this.isPlay = 2;
            this.$refs.player.pause();
          } else if (this.isPlay === 0 || this.isPlay === 2) { //播放
            this.$refs.player.play();
          }
        },
        beforeClose(){
          this.isPlay = 2;
          this.$refs.player.pause();
          this.playBox = false;
        }
      }
    }
</script>

<style scoped>
  .video-box{
    /*width: 260px;*/
    /*height: 330px;*/
    display: inline-block;
    border: 1px solid #bababa;
    margin: 20px 5px 20px 0;
    padding-bottom: 10px;
  }
  .video-box:hover{
    cursor: pointer;
    box-shadow: 0 2px 10px 2px rgba(255, 60, 13, 0.64);
  }
</style>
