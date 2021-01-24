import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from '@tarojs/components'
import { getTopicList } from '../../actions/topicList'
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
			getTopicList() {
				dispacth(getTopicList())
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
	render() {
		const { list } = this.props
		return (
			<ScrollView>
				{list.map((item) => (
					<Topic item={item} />
				))}
			</ScrollView>
		)
	}
}
