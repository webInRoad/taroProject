import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu'
import topicList from './topicList'
import user from './user'
export default combineReducers({
	counter,
	menu,
	topicList,
	user
})
