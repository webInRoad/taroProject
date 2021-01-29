const USER_STATE = {
	access_token: null,
	loginname: ''
}

export default function user(prevState = USER_STATE, action) {
	switch (action.type) {
		case 'loginSuccess':
			return {
				...prevState,
				accesss_token: action.accesstoken,
				loginname: action.loginname
			}
		case 'loginFail':
			return {
				...prevState,
				accesss_token: action.accesstoken,
				loginname: action.loginname
			}
		default:
			return { ...prevState }
	}
}
