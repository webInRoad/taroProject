import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Picker, Input, Textarea, Button } from '@tarojs/components'
import { publishTopic } from '../../actions/topicList'
import './index.less'
@connect((store) => {
	return { ...store.menu, ...store.user }
})
export default class Publish extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectCata: '',
			title: '',
			content: ''
		}
	}
	onChange = (event) => {
		console.info('value:' + event.detail.value)
		const value = event.detail.value
		const { cataData } = this.props
		this.setState({
			selectCata: cataData[value]
		})
	}
	onTitleChange = (event) => {
		const { value: title } = event.detail
		this.setState({ title })
	}
	onContentChange = (event) => {
		const { value: content } = event.detail
		this.setState({ content })
	}
	handleSubmit = () => {
		const { title, content, selectCata } = this.state
		const { access_token } = this.props
		const params = {
			title,
			content,
			accesstoken: access_token,
			tab: 'dev'
		}
		publishTopic(params).then(() => {
			console.info('成功')
			// Taro.navigateBack() //返回之后页面不会重新调用接口
			// Taro.navigateTo({ url: '/pages/user/index' }) //此时返回会到本页面
			Taro.redirectTo({ url: '/pages/user/index' })
		})
	}
	render() {
		const { cataData } = this.props
		const { selectCata } = this.state
		return (
			<View className="topic-publish-wrapper">
				<Input
					className="topic-publish-title"
					placeholder="请输入标题"
					onInput={this.onTitleChange}
				></Input>
				<Textarea
					className="topic-publish-content"
					placeholder="请输入内容"
					onInput={this.onContentChange}
				/>
				<Picker
					mode="selector"
					range={cataData}
					onChange={this.onChange}
					rangeKey="value"
				>
					<View className="topic-publish-selector"></View>
					{selectCata ? selectCata.value : '请选择'}
				</Picker>
				<Button className="topic-publish-btn" onClick={this.handleSubmit}>
					确定
				</Button>
			</View>
		)
	}
}
