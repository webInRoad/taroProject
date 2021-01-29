import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'
export default class LoginHeader extends Component {
	render() {
		return (
			<View className="login-header">
				<Image
					className="login-header-loginBack"
					src={require('../../assets/img/loginBack.jpg')}
				/>
				<Image
					className="login-header-image"
					src={require('../../assets/img/head.png')}
				/>
			</View>
		)
	}
}
