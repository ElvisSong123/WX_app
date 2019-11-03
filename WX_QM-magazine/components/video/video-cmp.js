// components/video/video-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        videoSrc: String,
        posterSrc: String,
        duration: String,
        videoId: String,
        mainText: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        showPlay: true
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPlay: function() {
            this.triggerShowPlay();
            let video = wx.createVideoContext(this.properties.videoId, this);
            video.play();
        },
        onPause: function() {
            this.triggerShowPlay();
            let video = wx.createVideoContext(this.properties.videoId, this);
            video.pause();
            video.seek(0)
        },
        onEnd: function() {
            this.triggerShowPlay();
        },
        triggerShowPlay: function() {
            this.setData({
                showPlay: !this.data.showPlay
            })
        }
    }
})