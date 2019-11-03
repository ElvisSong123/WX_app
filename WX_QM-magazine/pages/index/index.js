// pages/index/index.js
import { RequestAll } from '../../module/request_all.js';
import { random } from '../../utils/randomStr.js';
const requestAll = new RequestAll();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        magazineid: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.getData();
        wx.showLoading({
            title: '请稍等'
        });
    },
    onNav(e) {
        let index = e.detail.index;
        this.setData({
            magazineid: index
        })
        this.getData(index)
    },
    onMark() {
        wx.switchTab({
            url: '../catalog/catalog'
        })
    },
    onReachBottom() {
        this.setData({
                moreList: random(20)
            })
            // console.log(this.data.moreList)
    },
    onPullDownRefresh: function() {
        console.log('pull down refresh')
    },
    getData: function(magazineId) {
        let recommend = requestAll.getRecommendData(magazineId);
        let markTypeList = requestAll.getMarkTypeListData(magazineId);
        let IndexArticleList = requestAll.geIndexArticleListData(magazineId)
        Promise.all([recommend, markTypeList, IndexArticleList]).then(res => {

            wx.hideLoading();
            this.setData({
                recommend: res[0],
                markTypeList: res[1],
                articleList: res[2]
            })
            console.log(res)

        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

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


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})