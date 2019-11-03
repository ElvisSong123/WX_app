// pages/mark/mark.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isauthSetting: false,
        likeArray: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        wx.getSetting({
            success: (res) => {
                console.log(res.authSetting);
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: (res) => {
                            const newuserInfo = res.userInfo;
                            // console.log(newuserInfo);
                            this.setData({
                                isauthSetting: true,
                                userInfo: newuserInfo
                            })
                            this.getStroageData();
                        }
                    })

                }
            }
        })

    },
    onGetuserinfo(res) {
        const userInfo = res.detail.userInfo;
        // console.log(userInfo)
        this.setData({
            userInfo: userInfo,
            isauthSetting: true
        })
        this.getStroageData();
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    getStroageData() {
        let likeArray = wx.getStorageSync('like') || [];
        this.setData({
            likeArray: likeArray
        })
    },
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log(this.data.isauthSetting)
        if (this.data.isauthSetting) {
            this.getStroageData();
        }

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})