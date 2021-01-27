import React, { Component } from 'react'
import { View, Text, Image, RichText } from '@tarojs/components'
import { myTimeToLocal } from '../../util/date.js'
import './replies.less'
const isWeapp = process.env.TARO_ENV
export default class Replies extends Component {
	render() {
		const { replies } = this.props
		return (
			<View className="topicinfo-replies">
				{replies.map((reply, index) => {
					return (
						<View className="topicinfo-reply">
							<Image
								className="topicinfo-reply-image"
								src={require('../../assets/img/back.jpg')}
							/>
							<View className="topicinfo-reply-right">
								<View className="topicinfo-reply-body">
									<View className="topicinfo-reply-pie">
										<Text className="topicinfo-reply-pie-loginname">
											{reply.author ? reply.author.loginname : ''}
										</Text>
										<Text className="topicinfo-reply-pie-floor">
											{index + 1 + '楼'}
										</Text>
										<Text className="topicinfo-reply-pie-time">
											{myTimeToLocal(reply.create_at)}
										</Text>
									</View>
									<View className="topicinfo-reply-content">
										{isWeapp ? (
											<RichText nodes={reply.content} />
										) : (
											<View
												dangerouslySetInnerHTML={{ __html: reply.content }}
											></View>
										)}
									</View>
								</View>
								<View className="topicinfo-reply-zan">
									<Image
										onClick={() => this.props.admire(reply)}
										className="topicinfo-reply-image"
										src={
											reply.is_uped
												? require('../../assets/img/myzan.png')
												: require('../../assets/img/zan.png')
										}
									/>
									<Text>{reply.ups.length}</Text>
									<Image
										className="topicinfo-reply-image"
										src={require('../../assets/img/zhuan.png')}
									/>
								</View>
							</View>
						</View>
					)
				})}
			</View>
		)
	}
}
