import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { getTopicInfo, admireTopic } from '../../actions/topicList'
import TopicInfo from '../../components/topicInfo/topicInfo'
import Replies from '../../components/topicInfo/replies'
@connect(
	(store) => {
		return {
			topicInfo: store.topicList.topicInfo,
			replies: store.topicList.replies,
			user: store.user,
			admireState: store.topicList.admireState
		}
	},
	(dispatch) => {
		return {
			getTopicInfo(params) {
				dispatch(getTopicInfo(params))
			}
			// admireTopic(params) {
			// 	dispatch(admireTopic(params))
			// }
		}
	}
)
export default class Detail extends Component {
	componentDidMount() {
		this.getDetail()
	}
	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.admireState != this.props.admireState) {
	// 		this.getDetail()
	// 	}
	// }
	getDetail() {
		const { topicId } = getCurrentInstance().router.params
		const { user } = this.props
		const params = {
			id: topicId,
			mdrender: true,
			accesstoken: user.access_token
		}
		this.props.getTopicInfo && this.props.getTopicInfo(params)
	}
	admire = (reply) => {
		const { user } = this.props
		const param = {
			replyId: reply.id,
			accesstoken: user.access_token
		}
		admireTopic(param).then(() => {
			this.getDetail()
		})
	}
	render() {
		const { topicInfo, replies } = this.props
		return (
			<View>
				<TopicInfo topicInfo={topicInfo} />
				<Replies replies={replies} admire={this.admire} />
			</View>
		)
	}
}
