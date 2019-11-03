import { RequestAll } from '../../module/request_all.js';
const requestAll = new RequestAll();
import { searchArticle } from '../../module/search.js';
const searchData = new searchArticle();
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        articleList: {
            type: Array,
            value: [],
        },
        more: {
            type: String,
            value: '',
            observer: 'loadMore'
        },
        magazineId: {
            type: Number,
            observer: 'onReset'
        },
        word: String
    },


    /**
     * 组件的初始数据
     */
    data: {
        loading: false,
        noMoreData: false
    },
    attached() {
        const currentPage = getCurrentPages();
        const index = currentPage.length - 1;
        let type = currentPage[index].route;
        console.log(type)
        this.setData({
            type
        })
    },
    /**
     * 组件的方法列表
     */
    methods: {
        onReset() {
            this.setData({
                noMoreData: false
            })
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            })
        },

        loadMore() {
            if (this.data.loading || this.data.noMoreData) { //加锁，当一个正在加载时，让再次请求无效
                return
            }
            this.setData({
                loading: true
            })
            if (this.data.type == 'pages/search/search') { //搜索界面请求数据方式
                const searchWord = this.properties.word;
                const start = this.properties.articleList.length;
                searchData.getSearchArticleList(searchWord, start).then(res => {
                    console.log(res)
                    this.displayData(res)
                })
            } else { //杂志界面请求数据方式
                const magazineid = this.properties.magazineId;
                const start = this.properties.articleList.length;
                requestAll.geIndexArticleListData(magazineid, start).then(res => {
                    this.displayData(res)
                })
            }

        },
        displayData(res) {
            const combineList = this.properties.articleList.concat(res);
            if (combineList.length == this.properties.articleList.length) {
                this.setData({
                    noMoreData: true,
                    loading: false
                })
                return false
            }
            this.setData({
                articleList: combineList,
                loading: false
            })
        }
    }
})