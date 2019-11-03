// components/article/article-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        type: Number,
        articleList: Object,

    },

    /**
     * 组件的初始数据
     */
    data: {
        isLike: false
    },

    attached() {
        let articleList = this.data.articleList;
        let artId = articleList.artId;
        let likeArray = wx.getStorageSync('like');
        if (likeArray) {
            likeArray.forEach((ele, index) => {
                if (ele.artId == artId) {
                    this.setData({
                        isLike: true
                    })
                }
            })
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        changeLike(e) {
            let isLike = e.detail.like;
            let articleList = this.data.articleList;
            let artId = articleList.artId;
            let likeArray = wx.getStorageSync('like') || [];
            if (isLike) {
                likeArray.unshift(articleList);
                wx.setStorageSync('like', likeArray)
            } else {
                likeArray.forEach((ele, index) => {
                    if (ele.artId == artId) {
                        likeArray.splice(index, 1);
                    }
                })
                if (likeArray.length) {
                    wx.setStorageSync('like', likeArray)
                } else {
                    wx.removeStorageSync('like')
                }

            }
        }
    }
})