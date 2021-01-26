import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getTopicInfo } from '../../actions/topicList'
import TopicInfo from '../../components/topicInfo/topicInfo'
import Replies from '../../components/topicInfo/replies'
@connect(
	(store) => {
		return {
			topicInfo: store.topicList.topicInfo,
			replies: store.topicList.replies
		}
	},
	(dispatch) => {
		return {
			getTopicInfo(params) {
				dispatch(getTopicInfo(params))
			}
		}
	}
)
export default class Detail extends Component {
	componentDidMount() {
		const { topicId } = getCurrentInstance().router.params
		console.info(topicId, 'topicId')
		const params = {
			id: topicId,
			mdrender: true
		}
		this.props.getTopicInfo && this.props.getTopicInfo(params)
	}
	render() {
		const { topicInfo, replies } = this.props
		return (
			<View>
				<TopicInfo topicInfo={topicInfo} />
				<Replies replies={replies} />
			</View>
		)
	}
}
