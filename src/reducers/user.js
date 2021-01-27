const USER_STATE = {
	access_token: 'b2d71875-844c-45ce-b639-de872e09c1e5'
}

export default function user(prevState = USER_STATE, action) {
	switch (action.type) {
		default:
			return { ...prevState }
	}
}
