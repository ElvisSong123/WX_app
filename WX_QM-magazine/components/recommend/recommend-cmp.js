// components/recommend/recommend-cmp.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        recommend: Object,
        magazineId: {
            type: Number,
            vaule: 0,
            observer: 'getIndex'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        magazineTypeList: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂']
    },
    attached() {
        this.getDate()
    },
    /**
     * 组件的方法列表
     */
    methods: {
        getDate() {
            const monthArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
            const dayArr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十", "三十一"]
            const month = new Date().getMonth();
            const day = new Date().getDate();
            const date = monthArr[month] + '月' + dayArr[day - 1] + '日';
            this.setData({
                date: date
            })
        },
        getIndex() {
            this.setData({
                magazineId: this.properties.magazineId
            })
        }
    }
})