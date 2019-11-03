// components/nineImage/nineImage-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        imgSrc: Array,
        mainText: String
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
        onTap: function(e) {
            console.log(e);
            const index = e.target.dataset.index;
            wx.previewImage({
                urls: this.properties.imgSrc,
                current: this.properties.imgSrc[index]
            })
        }
    }
})