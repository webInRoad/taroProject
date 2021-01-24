import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'
import MenuComponent from '../../components/menu/menu'
import './index.less'

@connect(
	({ counter }) => ({
		counter
	}),
	(dispatch) => ({
		add() {
			dispatch(add())
		},
		dec() {
			dispatch(minus())
		},
		asyncAdd() {
			dispatch(asyncAdd())
		}
	})
)
class Index extends Component {
	componentWillReceiveProps(nextProps) {
		console.log(this.props, nextProps)
	}
	componentDidMount() {}
	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	render() {
		return (
			<View className="index">
				<MenuComponent />
			</View>
		)
	}
}

export default Index
