function TimeUpdate(){
	
	/*List containing all months, used to convert numbers to names*/
	var months = [ "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	/*Used to update the clock's time*/
	var time = new Date();

	/*Updating information for the calender time*/
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();

	/*Updating Information for the clock time*/
	var hour = time.getHours();
	var min = time.getMinutes();
	var sec = time.getSeconds();
	var session = "AM";

	/*Adding the PM for afternoon without making the clock read zero hours*/
	if(hour == 12){
		session = "PM";
	}
	/*Changing the zero in military time to twelve for digital time*/
	if(hour == 0){
		hour = 12;
	}
	/*Changing the last twelve hours from military time to the pm of digital time*/
	if(hour > 12){
		hour = hour - 12;
		session = "PM";
	}
	
	/*Adds placeholder zero for single digit numbers, boosts appearance on website*/
	if (min < 10) {
		min = "0" + min;
	}
	/*Adds placeholder zero for single digit numbers, boosts appearance on website*/
	if (sec < 10) {
		sec = "0" + sec;
	}

	/*Creating the format that will be displayed on my website*/
	var time = hour + ":" + min + ":" + sec + " " + session;
	var today = months[month] + " " + day + ", " + year;

	/*Updates the time on the website with previous strings*/
	document.getElementById("Cal").innerText = today;
	document.getElementById("Time").innerText = time;

	/*Allows for constant repetition of clock updates*/
	setTimeout(TimeUpdate, 1000);
}

TimeUpdate();