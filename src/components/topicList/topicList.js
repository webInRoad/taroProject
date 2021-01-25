import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from '@tarojs/components'
import { getTopicList, getNextList } from '../../actions/topicList'
import Topic from './topic'
@connect(
	({ topicList, menu }) => {
		return {
			...topicList,
			currentCata: menu.currentCata
		}
	},
	(dispacth) => {
		return {
			getTopicList(params) {
				dispacth(getTopicList(params))
			},
			getNextList(params) {
				dispacth(getNextList(params))
			}
		}
	}
)
export default class TopicList extends Component {
	componentDidMount() {
		const { page, limit, currentCata } = this.props
		const params = {
			page,
			limit,
			tab: currentCata.key
		}
		this.props.getTopicList && this.props.getTopicList(params)
	}
	handleNextList = () => {
		const { page, limit, currentCata } = this.props
		console.info('到底部')
		const params = {
			page: page + 1,
			limit,
			tab: currentCata.key
		}
		this.props.getNextList && this.props.getNextList(params)
	}
	render() {
		const { list } = this.props
		return (
			<ScrollView
				style={{ height: '850PX' }}
				onScrollToLower={this.handleNextList}
				scrollY={true}
			>
				{list.map((item) => (
					<Topic item={item} />
				))}
			</ScrollView>
		)
	}
}
