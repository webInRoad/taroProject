import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu'
import { AtDrawer } from 'taro-ui'
import cata from '../../assets/img/cata.png'
import './menu.less'
// @connect(
// 	function (store) {
// 		return {
// 			menu: store.menu
// 		}
// 	},
// 	function (dispacth) {
// 		return {
// 			showMenu: function showMenu() {
// 				dispacth(showDrawer())
// 			}
// 		}
// 	}
// )
@connect(
	({ menu }) => ({ menu }),
	(dispacth) => {
		return {
			showMenu() {
				dispacth(showDrawer())
			},
			hideMenu() {
				dispacth(hideDrawer())
			},
			changeCata(cata) {
				dispacth(changeCata(cata))
			}
		}
	}
)
export default class Menu extends Component {
	getMenus(cataData) {
		return cataData && cataData.map((item) => item.value)
	}
	handleItemClick = (index) => {
		const { cataData, currentCata } = this.props.menu
		if (cataData[index]['key'] !== currentCata.key) {
			this.props.changeCata(cataData[index])
		}
	}
	jumpToLogin = () => {
		Taro.navigateTo({ url: '/pages/login/index' })
	}
	render() {
		const { showDrawer, cataData } = this.props.menu
		const menus = this.getMenus(cataData)
		return (
			<View className="topicList-menu">
				{/* <AtDrawer style={{ position: 'absolute' }} /> */}
				<View className="topicList-drawer">
					<AtDrawer
						onItemClick={this.handleItemClick}
						onClose={this.props.hideMenu}
						items={menus}
						show={showDrawer}
					/>
				</View>
				<Image onClick={this.props.showMenu} className="image" src={cata} />
				<Text>
					{this.props.menu.currentCata && this.props.menu.currentCata.value}
				</Text>
				<Image
					onClick={this.jumpToLogin}
					className="image"
					src={require('../../assets/img/login.png')}
				/>
			</View>
		)
	}
}
