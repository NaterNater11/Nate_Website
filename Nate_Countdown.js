function BirthdayUpdate(){
	
	/*Basic Variables*/
	var message
	var dif = 0
	var remaining
	
	/*How many days into the year my brthday takes place, and how many days in each month*/
	var birthday = 363
	var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	
	/*Used to update the clock's time*/
	var time = new Date();
	
	/*Updating date infromation to countdown to my birthday*/
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	
	/*Adding the extra day before my birthday on gap years*/
	if (year % 4 == 0) {
		birthday += 1;
	}
	
	/*Tallying how many days we are into the year, from previous month totals*/
	while (month > 0) {
		dif += monthDays[month];
		month -= 1;
	}
	
	/*Adding how many days to are into the current month to the total*/
	dif += day;
	
	/*Calculating the difference between the current date and my birthday, one subtracted to represent my birthday*/
	remaining = birthday - dif - 1;
	
	/*If we passed my birthday already this year, we subtract how many days past we are from the total amount of days in a year*/
	if (remaining < 0) {
		remaining += 365;
		/*adds one extra day on leap years*/
		if ((year + 1) % 4 == 0) {
			remaining += 1;
		}
	}
	
	/*Constructing the message that will be displayed on my website*/
	message = "There is " + remaining + " days until Nate's birthday"
	
	/*Birthday is less than a month away and text is displayed in red*/
	if (remaining <= 30) {
		document.getElementById("Countdown").style.color = "red";
	}
	
	/*Birthday is between a month and six months away, is displayed in green text (assignment said 2-6 months, but changed it to 1 because of the otherwise gap)*/
	if (30 < remaining & remaining <= 184) {
		document.getElementById("Countdown").style.color = "green";
	}
	
	/*Birthday is more than six months away, and text is displayed in blue*/
	if (184 < remaining){
		document.getElementById("Countdown").style.color = "blue";
	}
	
	/*Special message if its December 29th, changes font to black*/
	if (remaining == 0) {
		document.getElementById("Countdown").style.color = "black";
		message = "Today is Nate's birthday!! Time to Celebrate";
	}
	
	/*Updating the website's text with the message in the correct colour*/
	document.getElementById("Countdown").innerText = message;
	setTimeout(BirthdayUpdate, 1000);
}

BirthdayUpdate();