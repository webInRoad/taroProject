import { setCache, getCache } from '../util/cache'
const USERCACHEKEY = 'user_cache_key'
const userCache = getCache(USERCACHEKEY)
// const USER_STATE = {
// 	access_token: null,
// 	loginname: '',
// 	avatar_url: ''
// }

const USER_STATE = {
	...userCache
}

export default function user(prevState = USER_STATE, action) {
	switch (action.type) {
		case 'loginSuccess':
			const newState = {
				...prevState,
				...action
			}
      let str = setCache(USERCACHEKEY, newState) //居然不会报错,按道理不应该有返回值的
      console.info(str)
			return newState
		case 'loginFail':
			const newFailState = {
				...prevState,
				...action
			} // 命名不能跟上面case分支里变量一样
			setCache(USERCACHEKEY, newFailState)
			return newFailState
		default:
			return { ...prevState }
	}
}
