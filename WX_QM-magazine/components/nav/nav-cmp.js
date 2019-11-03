// components/nav/nav-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        magazineTypeList: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂'],
        magazineId: 0,
        magazineIndex: 'magazine0'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap(e) {
            var index = e.currentTarget.dataset.index;
            this.setData({
                magazineId: index,
                magazineIndex: `magazine${index == 0 ? 0 : index - 1}`
            })
            this.triggerEvent('myNav', {
                index
            })
        }
    }
})