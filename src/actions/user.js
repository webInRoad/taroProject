import { getJson, postJson } from '../util/request'
import apiObject from '../constants/api'
import Taro from '@tarojs/taro'

export function accessUserToken(params) {
	return async (dispatch) => {
		const result = await postJson(apiObject.checkUserToken, params)
		if (result && result.data && result.data.success) {
			dispatch({
				type: 'loginSuccess',
				accesstoken: params.accesstoken,
				loginName: result.data.loginname
			})
			return result.data
		} else {
			dispatch({
				type: 'loginFail',
				accesstoken: null,
				loginName: null
			})
		}
		return false
	}
}
