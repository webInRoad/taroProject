import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { accessUserToken } from '../../actions/user'
import Header from '../../components/LoginHeader'

import './index.less'
@connect(
	(store) => {
		return { user: store.user }
	},
	(dispatch) => {
		return {
			accessUserToken(params) {
				//dispatch(accessUserToken(params))
				return dispatch(accessUserToken(params))
			}
		}
	}
)
export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			accessToken: ''
		}
	}
	handleAccessTokenChange = (event) => {
		const { value: accessToken } = event.detail
		this.setState({
			accessToken
		})
	}
	handleLogin = () => {
		const { accessToken } = this.state
		if (!accessToken) {
			Taro.showToast({ title: '请输入accessToken', icon: 'none' })
		}
		const params = {
			accesstoken: accessToken
		}
		this.props.accessUserToken(params).then((result) => {
			console.info(result, 'result')
			Taro.redirectTo({ url: '/pages/user/index' })
		})
	}
	render() {
		return (
			<View className="login-wrapper">
				<Header />
				<Input
					className="accessToken-login"
					onInput={this.handleAccessTokenChange}
					placeholder="请输入accessToken"
				/>
				<Button onClick={this.handleLogin} className="btn-login">
					登录
				</Button>
			</View>
		)
	}
}
