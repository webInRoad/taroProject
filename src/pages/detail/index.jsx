import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentInstance } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import {
	getTopicInfo,
	admireTopic,
	replyContent
} from '../../actions/topicList'
import { validUser } from '../../actions/user'
import TopicInfo from '../../components/topicInfo/topicInfo'
import Replies from '../../components/topicInfo/replies'
import ReplyContent from '../../components/topicInfo/replyContent'
import './index.less'
@connect(
	(store) => {
		return {
			topicInfo: store.topicList.topicInfo,
			replies: store.topicList.replies,
			user: store.user,
			admireState: store.topicList.admireState,
			addReply: store.topicList.addReply
		}
	},
	(dispatch) => {
		return {
			getTopicInfo(params) {
				dispatch(getTopicInfo(params))
			},
			// admireTopic(params) {
			// 	dispatch(admireTopic(params))
			// }
			replyContent(params) {
				dispatch(replyContent(params))
			}
		}
	}
)
export default class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showReplyContent: false,
			currentReply: null
		}
	}
	componentDidMount() {
		this.getDetail()
	}
	componentWillReceiveProps(nextProps) {
		// 点赞功能方法一，用Redux方式，并且监听属性变化
		// if (nextProps.admireState != this.props.admireState) {
		// 	this.getDetail()
		// }
		if (nextProps.addReply != this.props.addReply) {
			this.getDetail()
			this.handleCancel()
		}
	}
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
		validUser(user).then((result) => {
			if (result) {
				const { user } = this.props
				const param = {
					replyId: reply.id,
					accesstoken: user.access_token
				}
				admireTopic(param).then(() => {
					this.getDetail()
				})
			}
		})
	}
	reply = () => {
		const { user } = this.props
		validUser(user).then((result) => {
			if (result) {
				this.setState({
					showReplyContent: true
				})
			}
		})
	}
	handleOk = (replyContent) => {
		const { user } = this.props
		const { topicId } = getCurrentInstance().router.params
		const { currentReply } = this.state
		const reply_id = currentReply ? currentReply.id : ''
		const preContent = currentReply
			? '@' + currentReply.author.loginname + '  '
			: ''
		const params = {
			accesstoken: user.access_token,
			content: preContent + replyContent.content,
			topicId,
			reply_id
		}
		this.props.replyContent(params)
	}
	handleCancel = () => {
		this.setState({
			showReplyContent: false
		})
	}
	replyToReply = (currentReply) => {
		const { user } = this.props
		validUser(user).then((result) => {
			if (result) {
				this.setState({
					currentReply
				})
				this.reply()
			}
		})
	}
	render() {
		const { topicInfo, replies } = this.props
		const { showReplyContent } = this.state
		return (
			<View className="detail">
				{showReplyContent ? (
					<ReplyContent
						handleOk={this.handleOk}
						handleCancel={this.handleCancel}
					/>
				) : null}
				<TopicInfo topicInfo={topicInfo} />
				<Replies
					replies={replies}
					admire={this.admire}
					replyToReply={this.replyToReply}
				/>
				<Button className="replyBtn" onClick={this.reply}>
					回复
				</Button>
			</View>
		)
	}
}
