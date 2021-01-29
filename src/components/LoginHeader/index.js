import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
export default class LoginHeader extends Component {
	render() {
		const { loginname, avatar_url } = this.props
		return (
			<View className="login-header">
				<Image
					className="login-header-loginBack"
					src={require('../../assets/img/loginBack.jpg')}
				/>
				<Image
					className="login-header-image"
					src={avatar_url ? avatar_url : require('../../assets/img/head.png')}
				/>
				{loginname ? (
					<View className="header-loginname">{loginname}</View>
				) : null}
			</View>
		)
	}
}
