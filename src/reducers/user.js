const USER_STATE = {
	access_token: null,
	loginname: '',
	avatar_url: ''
}

export default function user(prevState = USER_STATE, action) {
	switch (action.type) {
		case 'loginSuccess':
			return {
				...prevState,
				...action
			}
		case 'loginFail':
			return {
				...prevState,
				...action
			}
		default:
			return { ...prevState }
	}
}
