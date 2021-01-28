import React, { Component } from 'react'
import { View, Text, Textarea, Button } from '@tarojs/components'
import './replyContent.less'
export default class ReplyContent extends Component {
	state = {
		content: ''
	}
	handleChangeContent = (event) => {
		const { value: content } = event.detail
		this.setState({
			content
		})
	}
	handleOk = () => {
		const { content } = this.state
		this.props.handleOk({ content })
	}
	render() {
		const { handleCancel } = this.props
		return (
			<View className="reply-content">
				<Textarea
					onInput={this.handleChangeContent}
					className="reply-content-text"
					placeholder="请输入回复内容"
				/>
				<View className="reply-content-btnGroup">
					<Button className="btn" onClick={this.handleOk}>
						确定
					</Button>
					<Button className="btn" onClick={handleCancel}>
						取消
					</Button>
				</View>
			</View>
		)
	}
}
