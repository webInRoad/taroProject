import Taro from '@tarojs/taro'
export function getJson(url, data) {
	Taro.showLoading()
	return Taro.request({ url, data, method: 'GET' }).then((result) => {
		Taro.hideLoading()
		return result
	})
}

export function postJson(url, data) {
	Taro.showLoading()
	return Taro.request({ url, data, method: 'POST' }).then((result) => {
		Taro.hideLoading()
		return result
	})
}
