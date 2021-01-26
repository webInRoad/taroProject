export function myTimeToLocal(inputTime) {
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

Date.prototype.format = function (fmt) {
	var o = {
		'M+': this.getMonth() + 1, //月份
		'd+': this.getDate(), //日
		'h+': this.getHours(), //小时
		'm+': this.getMinutes(), //分
		's+': this.getSeconds(), //秒
		'q+': Math.floor((this.getMonth() + 3) / 3), //季度
		S: this.getMilliseconds() //毫秒
	}
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(this.getFullYear() + '').substr(4 - RegExp.$1.length)
		)
	}
	for (var k in o) {
		if (new RegExp('(' + k + ')').test(fmt)) {
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			)
		}
	}
	return fmt
}
