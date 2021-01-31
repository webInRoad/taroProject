import { showActionSheet } from '@tarojs/taro'
import apiObject from '../constants/api'
import { getJson, postJson } from '../util/request'
import Taro from '@tarojs/taro'

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

export function getTopicInfo(params) {
	return async (dispatch) => {
		const result = await getJson(apiObject.getTopicInfo + params.id, {
			accesstoken: params.accesstoken
		})
		if (result && result.data && result.data.success) {
			dispatch({ type: 'detailInfo', topicInfo: result.data.data })
		}
	}
}

export async function admireTopic(params) {
	// return async (dispatch) => {
	// 	const result = await postJson(apiObject.upReply + params.replyId + '/ups', {
	// 		accesstoken: params.accesstoken
	// 	})
	// 	if (result && result.data && result.data.success) {
	// 		dispatch({ type: 'admireSuccess' })
	// 	} else {
	// 		Taro.showToast({ title: '点赞失败！', icon: 'none' })
	// 	}
	// }

	const result = await postJson(apiObject.upReply + params.replyId + '/ups', {
		accesstoken: params.accesstoken
	})
	if (result && result.data && result.data.success) {
		return result.data
	} else {
		Taro.showToast({ title: '点赞失败！', icon: 'none' })
	}
}

export function replyContent(params) {
	return async (dispatch) => {
		const data = { ...params, topicId: undefined }
		const result = await postJson(
			apiObject.replyTopic + params.topicId + '/replies',
			data
		)
		if (result && result.data && result.data.success) {
			dispatch({ type: 'replyContent' })
		} else {
			Taro.showToast({ title: '评论失败', icon: 'none' })
		}
	}
}

export async function publishTopic(params) {
	const result = await postJson(apiObject.createTopic, params)
	if (result && result.data && result.data.success) {
		return result.data
	} else {
		Taro.showToast({ title: '发布失败', icon: 'none' })
	}
}
