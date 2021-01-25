import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import back from '../../assets/img/back.jpg'
import { myTimeToLocal } from '../../util/date'
import './topic.less'
export default class Topic extends Component {
	goToDetail = (item) => {
		Taro.navigateTo({ url: '/pages/detail/index?topicId=' + item.id })
	}
	render() {
		const { item } = this.props
		return (
			// <View className="topicList_topic" onClick={this.goToDetail.bind(this,item)}>
			<View className="topicList_topic" onClick={() => this.goToDetail(item)}>
				{/* <Image src={item.author ? item.author.avatar_url : ''} /> */}
				<Image src={back} className="topic_image" />
				<View className="right">
					<View className="topic-top">
						{item.top ? (
							<Text className="topic-up">置顶</Text>
						) : item.tab == 'ask' ? (
							<Text className="topic-up blue">问答</Text>
						) : (
							<Text className="topic-up blue">分享</Text>
						)}

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
