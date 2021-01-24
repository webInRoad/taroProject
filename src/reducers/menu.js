const MENU_STATE = {
	cataData: [
		{
			key: 'all',
			value: '全部'
		},
		{
			key: 'good',
			value: '精华'
		},
		{
			key: 'share',
			value: '分享'
		},
		{
			key: 'ask',
			value: '问答'
		},
		{
			key: 'job',
			value: '招聘'
		},
		{
			key: 'dev',
			value: '客户端测试'
		}
	],
	currentCata: {
		key: 'all',
		value: '全部'
	},
	showDrawer: false
}

export default function menu(prevState = MENU_STATE, action) {
	switch (action.type) {
		case 'showDrawer':
			return { ...prevState, showDrawer: true }
		case 'hideDrawer':
			return { ...prevState, showDrawer: false }
		case 'changeCata':
			return { ...prevState, currentCata: action.currentCata }
		default:
			return { ...prevState }
	}
}
