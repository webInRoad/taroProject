import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { myTimeToLocal } from '../../util/date'
import './index.less'
export default class Panel extends Component {
	jumpTopicDetail = (item) => {
		Taro.navigateTo({ url: '/pages/detail/index?topicId=' + item.id })
	}
	render() {
		const { title, data } = this.props
		return (
			<View className="user-wrapper">
				<View className="panel-title">{title}</View>
				<View className="topic-wraper">
					{data.map((item) => {
						return (
							<View
								onClick={() => this.jumpTopicDetail(item)}
								className="topic-content"
								key={item.id}
							>
								<Image
									className="topic-content-image"
									src={item.author ? item.author.avatar_url : null}
								/>
								<Text className="topic-content-title">{item.title}</Text>
								<Text className="topic-content-time">
									{myTimeToLocal(item.last_reply_at)}
								</Text>
							</View>
						)
					})}
				</View>
			</View>
		)
	}
}
