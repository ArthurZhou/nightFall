let clockContainer = document.querySelector('#clock')
let dateContainer = document.querySelector('#date')

function updateTime() {
    const d = new Date()
    let hour = fillZero(d.getHours(), 2)
    let minute = fillZero(d.getMinutes(), 2)
	let second = fillZero(d.getSeconds(), 2)
	clockContainer.textContent = `${hour}:${minute}:${second}`
	if (`${hour}:${minute}:${second}` == '12:00:00' || `${hour}:${minute}:${second}` == '00:00:00') {
		updateDate()
	}
}

function updateDate() {
	const d = new Date()
	let month = fillZero(d.getMonth(), 2)
	let date = fillZero(d.getDate(), 2)
	let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
	let day = days[d.getDay()]
	let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	dateContainer.textContent = `${d.getFullYear()}/${month}/${date} ${day}  ${timeZone}`
	debug('Date updated.')
}

function fillZero(number, digits){
	number = String(number);
	let length = number.length;
	if(number.length<digits){
		for(let i=0;i<digits-length;i++){
			number = "0"+number;
		}
	}
	return number;
}

debug("Setting up timer updater...")
if (clockContainer != null || dateContainer != null) {
	updateDate()
	setInterval(updateTime, 100)
	debug("Timer is ready now.")
} else {
	warn('timer.js was called but could not find an object with id \'#clock\' or \'#date\'!')
}
