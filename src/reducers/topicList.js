const TOPIC_STATE = {
	page: 1,
	limit: 20,
	list: [],
	topicInfo: {},
	replies: []
}
export default function topicList(prevState = TOPIC_STATE, action) {
	switch (action.type) {
		case 'getTopicList':
			return { ...prevState, list: action.list, page: 1 }
		case 'appendList':
			return {
				...prevState,
				list: prevState.list.concat(action.list),
				page: action.page
			}
		case 'detailInfo':
			return {
				...prevState,
				replies: action.topicInfo.replies,
				topicInfo: { ...action.topicInfo, replies: null }
			}
		default:
			return { ...prevState }
	}
}
