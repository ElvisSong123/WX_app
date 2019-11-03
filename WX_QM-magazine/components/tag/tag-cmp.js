// components/tag/tag-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tagName: String
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap() {
            wx.showToast({
                title: '当前为测试版本，不可跳转',
                icon: 'none',
                duration: 1000,

            })
        }
    }
})