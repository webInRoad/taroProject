import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
export default class Panel extends Component {
	render() {
		const { title, data } = this.props
		return (
			<View>
				{title}
				{data.length}条记录
			</View>
		)
	}
}
