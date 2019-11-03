// components/more/more.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        content: String
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
            let content = this.properties.content;
            wx.showActionSheet({
                itemList: [`内容与${content}无关`, `内容过期了`, `不在显示来自${content}的内容`],
                success: (res) => {
                    var index = res.tapIndex;
                    if (index == 0 || index == 1) {
                        wx.showToast({
                            title: '已提交'
                        })
                    }
                }
            })
        }
    }
})