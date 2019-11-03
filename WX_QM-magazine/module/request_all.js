import { Request } from '../utils/request.js';
class RequestAll extends Request {
    getRecommendData(magazineId = 0) {
        return this.getData({
            url: `/getRecommendInfo/${magazineId}`
        })
    }
    getMarkTypeListData(magazineId = 0) {
        return this.getData({
            url: `/getMarkTypeList/${magazineId}`
        })
    }
    geIndexArticleListData(magazineId = 0, start = 0) {
        return this.getData({
            url: `/getIndexArticleList/${magazineId}/${start}`,
        })
    }
}
export { RequestAll }