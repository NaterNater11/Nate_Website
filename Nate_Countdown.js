function BirthdayUpdate(){
	
	var birthday = 363
	var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	var dif = 0
	var remaining = 0
	var time = new Date();
	
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	
	if (year % 4 == 0) {
		birthday += 1;
	}
	
	while (month > 0) {
		dif += monthDays[month];
		month -= 1;
	}
	
	dif += day;
	
	remaining = birthday - dif - 1;
	
	if (remaining < 0) {
		remaining += 365;
		if ((year + 1) % 4 == 0) {
			remaining += 1;
		}
	}
	
	document.getElementById("Countdown").innerText = remaining;
	setTimeout(BirthdayUpdate, 1000);
}

BirthdayUpdate();