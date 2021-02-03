import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import { IHeadProps } from '../../interfaces/IHeader'
import './index.less'
export default class LoginHeader extends Component<IHeadProps> {
	render() {
		const { loginname, avatar_url } = this.props
		console.info(avatar_url, 'avatar_url')
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
