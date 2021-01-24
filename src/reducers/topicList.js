const TOPIC_STATE = {
	page: 1,
	limit: 20,
	list: []
}
export default function topicList(prevState = TOPIC_STATE, action) {
	switch (action.type) {
		case 'getTopicList':
			return { ...prevState, list: action.list }
		default:
			return { ...prevState }
	}
}
