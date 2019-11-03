// components/search/search-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        searchValue: String
    },

    /**
     * 组件的初始数据
     */
    data: {
        value: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {

        bindconfirm(e) {
            const value = e.detail.value || this.data.value;
            if (value !== '读书') {
                wx.showToast({
                    title: '只能搜索“读书”哦',
                    icon: 'none'
                })
                return false
            }
            wx.navigateTo({
                url: `../../pages/search/search?searchValue=${value}`
            })
        },
        onblur(e) {
            const value = e.detail.value;
            this.setData({
                value
            })
        }
    }
})