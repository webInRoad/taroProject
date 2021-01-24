export function showDrawer() {
	return (dispatch) => {
		dispatch({ type: 'showDrawer' })
	}
}
export function hideDrawer() {
	return (dispatch) => {
		dispatch({ type: 'hideDrawer' })
	}
}
export function changeCata(cata) {
	return (dispatch) => {
		dispatch({ type: 'changeCata', currentCata: cata })
	}
}
