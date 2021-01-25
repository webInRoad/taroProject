import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
export default class Detail extends Component {
	componentDidMount() {
		const { topicId } = getCurrentInstance().router.params
		console.info(topicId, 'topicId')
	}
	render() {
		return <View>detail</View>
	}
}
