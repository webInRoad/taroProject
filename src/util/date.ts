export function myTimeToLocal(inputTime):string {
	if (!inputTime && typeof inputTime !== 'number') {
		return ''
	}
	var localTime = ''
	inputTime = new Date(inputTime).getTime()
	const offset = new Date().getTimezoneOffset()
	// 转成ISO字符串2021-01-25T08:32:23.252Z，方便截取得到021-01-25 08:32:23
	localTime = new Date(inputTime - offset * 60000).toISOString()
	localTime = localTime.substr(0, localTime.lastIndexOf('.'))
	localTime = localTime.replace('T', ' ')
	return localTime
}