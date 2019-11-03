// component/position/position-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        location: String
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
        chooseCity() {
            console.log(111);
            wx.navigateTo({
                url: "/pages/type/type"
            })
        }
    }
})