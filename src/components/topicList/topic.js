import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import back from '../../assets/img/back.jpg'
import { myTimeToLocal } from '../../util/date'
import './topic.less'
export default class Topic extends Component {
	render() {
		const { item } = this.props
		return (
			<View className="topicList_topic">
				{/* <Image src={item.author ? item.author.avatar_url : ''} /> */}
				<Image src={back} className="topic_image" />
				<View className="right">
					<View className="topic-top">
						<Text className="topic-up">置顶</Text>
						<Text>{item.title}</Text>
					</View>
					<View className="topic-info">
						<Text>{item.author ? item.author.loginname : ''}</Text>
						<Text>{item.reply_count + '/' + item.visit_count}</Text>
						<Text>创建时间{myTimeToLocal(item.create_at)}</Text>
					</View>
				</View>
			</View>
		)
	}
}
