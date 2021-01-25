import { showActionSheet } from '@tarojs/taro'
import apiObject from '../constants/api'
import { getJson } from '../util/request'

export function getTopicList(params) {
	return async (dispatch) => {
		const result = await getJson(apiObject.getTopics, params)
		if (result && result.data) {
			if (result.data.success) {
				dispatch({ type: 'getTopicList', list: result.data.data })
			}
		}
	}
}

export function getNextList(params) {
	return async (dispatch) => {
		const result = await getJson(apiObject.getTopics, params)
		if (result && result.data) {
			if (result.data.success) {
				if (result.data.data.length) {
					dispatch({
						type: 'appendList',
						list: result.data.data,
						page: params.page
					})
				}
			}
		}
	}
}
