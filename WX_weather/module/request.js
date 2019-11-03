class Request {
    baseUrl = 'https://free-api.heweather.net/s6/weather/'
    key = '&key=a1c162b28abc4dc1bc3de5750e8da81c'
    getData(url = 'now?location=changsha', method = 'GET', data = {}) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseUrl + url + this.key,
                method: method,
                data: data,
                success: res => {
                    if (res.statusCode == 200) {
                        resolve(res)
                    } else {
                        this._showError()
                    }

                },
                fail: err => {
                    reject()
                    this._showError()
                }
            })
        })
    }


    _showError() {
        wx.showToast({
            title: "请求错误",
            icon: "none"
        })
    }
}

export { Request }