import Taro from '@tarojs/taro'

export function setCache(key, value) {
	if (typeof value == 'object') {
		value = JSON.stringify(value)
	}
	Taro.setStorageSync(key, value)
}

export function getCache(key) {
	let result = Taro.getStorageSync(key)
	if (result) {
		result = JSON.parse(result)
	} else {
		return null
	}
	return result
}
