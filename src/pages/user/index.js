import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { getUserInfo } from '../../actions/user'
import Header from '../../components/LoginHeader'
import Panel from '../../components/Panel'
import './index.less'
@connect((store) => {
	return {
		...store.user
	}
})
export default class User extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: {
				recent_topics: [],
				recent_replies: []
			}
		}
	}
	async componentDidMount() {
		const { loginname } = this.props
		const { data: user } = await getUserInfo(loginname)
		console.info(user, 'data')
		this.setState({
			user
		})
	}

	jumpPublishPage = () => {
		// Taro.navigateTo({ url: '/pages/publish/index' })
		Taro.redirectTo({ url: '/pages/publish/index' })
	}
	render() {
		const { loginname, avatar_url } = this.props
		const { user } = this.state
		const { recent_topics: recentTopics, recent_replies: recentReplies } = user
		return (
			<View>
				<Header loginname={loginname} avatar_url={avatar_url} />
				<Panel data={recentTopics || []} title="最近创建的话题" />
				<Panel data={recentReplies || []} title="最近参与的话题" />
				<Button onClick={this.jumpPublishPage} className="publish-btn">
					发布话题
				</Button>
			</View>
		)
	}
}
