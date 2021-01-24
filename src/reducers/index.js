import { combineReducers } from 'redux'
import counter from './counter'
import menu from './menu'
import topicList from './topicList'
export default combineReducers({
	counter,
	menu,
	topicList
})
