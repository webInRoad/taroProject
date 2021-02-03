import Taro from '@tarojs/taro'
import { ICache } from './../interfaces/ICache.d';
export function setCache(key, value:ICache):void{
  var params:any = value
	if (typeof value == 'object') {
		params = JSON.stringify(value)
	}
	Taro.setStorageSync(key, params)
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
