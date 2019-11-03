import { Request } from '../utils/request.js';
class searchArticle extends Request {
    getsearchRecommend(word) {
        return this.getData({
            url: `/searchArticleRecommend/${word}`
        })
    }
    getSearchArticleList(word, start = 0) {
        return this.getData({
            url: `/searchArticleList/${word}/${start}`,
        })
    }
}
export { searchArticle }