//index.js
//获取应用实例
import { Request } from '../../module/request.js'
const requestData = new Request();

Page({
    data: {
        now: 'now?location=长沙',
        forecast: 'forecast?location=长沙'
    },

    onLoad: function(options) {
        let searchWord = options.searchValue;
        // console.log(searchWord)
        let now = searchWord ? 'now?location=' + searchWord : this.data.now;
        let forecast = searchWord ? 'forecast?location=' + searchWord : this.data.forecast;
        // console.log(now, forecast)
        this.request(now, forecast)

    },
    request(now, forecast) {
        requestData.getData(now).then((res) => {
            console.log(res.data.HeWeather6[0]);

            const weatherData = res.data.HeWeather6[0];
            this.setData({
                weatherData
            })
        })
        requestData.getData(forecast).then((res) => {
            console.log(res.data.HeWeather6[0]);
            const moreWeatherData = res.data.HeWeather6[0];
            this.setData({
                moreWeatherData
            })
        })
    }
})