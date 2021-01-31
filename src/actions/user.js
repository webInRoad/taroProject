import { getJson, postJson } from '../util/request'
import apiObject from '../constants/api'
import Taro from '@tarojs/taro'

export function accessUserToken(params) {
	return async (dispatch) => {
		const result = await postJson(apiObject.checkUserToken, params)
		if (result && result.data && result.data.success) {
			dispatch({
				type: 'loginSuccess',
				access_token: params.accesstoken,
				loginname: result.data.loginname,
				avatar_url: result.data.avatar_url
			})
			return result.data
		} else {
			dispatch({
				type: 'loginFail',
				access_token: null,
				loginname: null,
				avatar_url: null
			})
		}
		return false
	}
}

export async function getUserInfo(loginname) {
	const result = await getJson(apiObject.getUserInfo + loginname)
	if (result && result.data && result.data.success) {
		return result.data
	} else {
		Taro.showToast({ title: '获取用户信息失败', icon: 'none' })
	}
}
// export function validUser(params) { // 返回的只是个数据，不是个promise，用async弄下就是个promise
export async function validUser(params) {
	// async 函数返回一个 Promise 对象
	if (params && params.access_token) {
		return true
	} else {
		Taro.navigateTo({ url: '/pages/login/index' })
	}
	return false
}
